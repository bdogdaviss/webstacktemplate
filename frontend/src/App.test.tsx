import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: async () => ({ message: 'Hello from the API' }),
        } as Response),
      ),
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the message from /api/hello', async () => {
    render(<App />)
    await waitFor(() => {
      expect(screen.getByText('Hello from the API')).toBeInTheDocument()
    })
    expect(fetch).toHaveBeenCalledWith('/api/hello')
  })
})
