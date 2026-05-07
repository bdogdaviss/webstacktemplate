import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import LightRays from './LightRays'

export default function Hero() {
  const { resolvedTheme } = useTheme()

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      {resolvedTheme === 'dark' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.2}
            rayLength={3}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 sm:pt-32">
        <p className="mb-4 text-sm font-medium tracking-wide text-subtle uppercase">
          {profile.location || ' '}
        </p>
        <h1
          id="hero-heading"
          className="text-5xl leading-[1.05] tracking-tight sm:text-6xl"
        >
          {profile.name || 'Your Name'}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-subtle sm:text-xl">
          {profile.tagline || ' '}
        </p>
        {profile.bio && (
          <p className="mt-4 max-w-2xl text-base text-subtle">{profile.bio}</p>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/projects"
            aria-label="View Projects"
            className="rainbow relative z-0 inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 transition duration-300 hover:scale-105 active:scale-100"
          >
            <span className="rounded-full bg-gray-800 px-5 py-2.5 text-sm font-medium text-white">
              View Projects
            </span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-card"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
