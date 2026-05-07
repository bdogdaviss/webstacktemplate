// Generates landing-page screenshots for each project in src/data/projects.ts
// and writes them to public/images/{slug}.jpg.
//
// Run from portfolio/: npm run snap
//
// Uses playwright-core with the system Chrome so we don't download a
// chromium binary — adjust CHROME_PATH if Chrome lives elsewhere.

import { chromium } from 'playwright-core'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { projects } from '../src/data/projects.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public', 'images')

const CHROME_PATH =
  process.env.CHROME_PATH ??
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const VIEWPORT = { width: 1280, height: 800 } // 16:10, matches card aspect
const NAV_TIMEOUT = 25_000
const SETTLE_MS = 1_500

async function main() {
  await mkdir(outDir, { recursive: true })

  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    headless: true,
  })

  try {
    for (const p of projects) {
      const out = join(outDir, `${p.slug}.jpg`)
      const url = p.href
      if (!url || url === '#') {
        console.log(`skip ${p.slug} (no url)`)
        continue
      }

      console.log(`→ ${p.slug}  ${url}`)

      const ctx = await browser.newContext({
        viewport: VIEWPORT,
        deviceScaleFactor: 2,
        userAgent:
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      })
      const page = await ctx.newPage()

      try {
        await page.goto(url, {
          waitUntil: 'networkidle',
          timeout: NAV_TIMEOUT,
        })
      } catch (err) {
        console.warn(
          `   networkidle timeout, falling back to load: ${(err as Error).message}`,
        )
        try {
          await page.goto(url, { waitUntil: 'load', timeout: NAV_TIMEOUT })
        } catch (err2) {
          console.warn(
            `   ${p.slug}: failed to load — ${(err2 as Error).message}`,
          )
          await ctx.close()
          continue
        }
      }

      await page.waitForTimeout(SETTLE_MS)

      const buf = await page.screenshot({
        type: 'jpeg',
        quality: 80,
        clip: { x: 0, y: 0, ...VIEWPORT },
      })
      await writeFile(out, buf)
      console.log(`   wrote ${out} (${buf.length} bytes)`)

      await ctx.close()
    }
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
