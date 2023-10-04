import React, { useState } from 'react'
import 'owasp-shared/style.css'
import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const EXPLOIT_VULNERABILITY_URL =
  'http://localhost:3000/profile?username=//127.0.0.1'

const PROFILE_URL = 'http://localhost:3000/profile?username=alice'

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive'
}

function Section({ title, defaultURL }) {
  const [url, setURL] = useState(defaultURL)
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    try {
      const response = await fetch(url, { headers })

      const data = await response.json()

      response.ok
        ? setStatus(`success, ${response.status}`)
        : setStatus(`failed, ${response.status}`)

      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="main-container">
      <h2>{title}</h2>
      <div className="main-section">
        <div className="request-details">
          <h3>GET</h3>
          <input
            className="url-input"
            value={defaultURL}
            onChange={handleURLChange}
          ></input>
          <button className="url-input-button" onClick={handleSubmit}>
            send
          </button>
        </div>

        <div className="response-section">
          <h3 className="status">
            Response:{' '}
            {status && (
              <p
                className={
                  status.includes('failed') ? 'failed-status' : 'success-status'
                }
              >
                {status}
              </p>
            )}
          </h3>
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>AO6: Vulnerable and outdated components</h1>

      <Section defaultURL={PROFILE_URL} title="Profile" />
      <Section
        defaultURL={EXPLOIT_VULNERABILITY_URL}
        title="Exploit Vulnerability"
      />
    </div>
  )
}
