import '@testing-library/jest-dom/vitest'

// jsdom doesn't provide IntersectionObserver — stub it so components that gate
// work on visibility (e.g. LightRays) can mount in tests without throwing.
class MockIntersectionObserver {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver
}
