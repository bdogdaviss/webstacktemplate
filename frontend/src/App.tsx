import { useEffect, useState } from 'react'
import './App.css'

type HelloResponse = { message: string }

function App() {
  const [message, setMessage] = useState<string>('Loading…')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<HelloResponse>
      })
      .then((data) => setMessage(data.message))
      .catch((e: unknown) => setError(e instanceof Error ? e.message : String(e)))
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <h1>webstacktemplate</h1>
      <p>Frontend ↔ API check:</p>
      {error ? (
        <p style={{ color: 'crimson' }}>API error: {error}</p>
      ) : (
        <p><strong>{message}</strong></p>
      )}
    </main>
  )
}

export default App
