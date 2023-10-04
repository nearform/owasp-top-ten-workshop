import React, { useState } from 'react'
import 'owasp-shared/style.css'

import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

const URL = 'http://localhost:3000/profile?username=alice'

function App() {
  const [url, setURL] = useState(URL)
  const [data, setData] = useState()
  const [status, setStatus] = useState(null)

  const handleURLChange = event => {
    setURL(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive'
        }
      })

      const data = await response.json()

      response.ok
        ? setStatus(`success, ${response.status}`)
        : setStatus(`failed, ${response.status}`)
      setData(data)
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div className="App">
      <h1>AO1: access control</h1>
      <div className="main-section">
        <div className="request-details">
          <h3>url</h3>
          <input
            className="url-input"
            value={URL}
            onChange={handleURLChange}
          ></input>
          <button className="url-input-button" onClick={handleSubmit}>
            send
          </button>
        </div>
        <div className="response-section">
          <h2 className="status">Response: {status}</h2>
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </div>
  )
}

export default App
