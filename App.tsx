import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Pi: any
  }
}

export default function App() {
  const [user, setUser] = useState<any>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://sdk.minepi.com/pi-sdk.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.Pi.init({ version: "2.0" })
    }
  }, [])

  const loginWithPi = async () => {
    try {
      const scopes = ['username', 'payments']
      const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound)
      setUser(authResult.user)
    } catch (err: any) {
      setError(err.message)
    }
  }

  function onIncompletePaymentFound(payment: any) {
    console.log("Incomplete payment:", payment)
  }

  return (
    <div style={{textAlign: 'center', padding: '50px', fontFamily: 'sans-serif', background: '#1a1a1a', color: 'white', minHeight: '100vh'}}>
      <h1>Welcome to Mingle</h1>
      <p>The Pi Social App</p>

      {!user ? (
        <button 
          onClick={loginWithPi}
          style={{padding: '15px 30px', fontSize: '18px', background: '#ffc500', color: 'black', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'}}
        >
          Login with Pi
        </button>
      ) : (
        <div>
          <h2>Hello {user.username}!</h2>
          <p>You are logged in with Pi ✅</p>
        </div>
      )}

      {error && <p style={{color: 'red', marginTop: '20px'}}>{error}</p>}
      
      <a href="/privacy" style={{display: 'block', marginTop: '40px', color: '#ffc500', textDecoration: 'none'}}>Privacy Policy</a>
    </div>
  )
}
