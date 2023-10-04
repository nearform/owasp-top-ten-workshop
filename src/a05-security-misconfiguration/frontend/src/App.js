import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'owasp-shared/style.css'

import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const LOGIN_URL = 'http://localhost:3000/login'
const PROFILE_URL = 'http://localhost:3000/profile'

const profileHeaders = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive'
}

const loginHeaders = {
  ...profileHeaders,
  'Content-Type': 'application/json'
}

const LOGIN_BODY = {
  username: 'alice',
  password: 'newpassword'
}

function Section({ title, defaultURL, method, defaultBody, headers }) {
  const [url, setURL] = useState(defaultURL)
  const [body, setBody] = useState(JSON.stringify(defaultBody))
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    const options = defaultBody ? { method, headers, body } : { headers }
    try {
      const response = await fetch(url, options)

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
          <h3>{method}</h3>
          <input
            className="url-input"
            value={defaultURL}
            onChange={handleURLChange}
          ></input>
          <button className="url-input-button" onClick={handleSubmit}>
            send
          </button>

          {method === 'POST' && (
            <div className="body-section">
              <h3>body:</h3>
              <CodeMirror
                value={body}
                onChange={value => {
                  setBody(value)
                }}
                height="200px"
              />
            </div>
          )}
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
      <h1>AO5: Security Misconfiguration</h1>

      <Section
        defaultURL={LOGIN_URL}
        title="login"
        method="POST"
        defaultBody={LOGIN_BODY}
        headers={loginHeaders}
      />
      <Section
        defaultURL={PROFILE_URL}
        title="profile"
        method="GET"
        defaultBody={null}
        headers={profileHeaders}
      />
    </div>
  )
}
