import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'

import 'owasp-shared/style.css'
import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const ALL_DATA_URL = 'http://localhost:3000/all-data'
const CHANGE_PASSWORD_URL = 'http://localhost:3000/change-password'
const REGISTER_URL = 'http://localhost:3000/register'
const LOGIN_URL = 'http://localhost:3000/login'

//default body values
const CHANGE_PASSWORD_BODY = { password: 'newpassword' }
const REGISTER_BODY = {
  username: 'newUser',
  password: 'password1234'
}
const LOGIN_BODY = {
  username: 'alice',
  password: '482c811da5d5b4bc6d497ffa98491e38'
}
const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  'Content-Type': 'application/json'
}

function Section({ title, defaultURL, method, defaultBody }) {
  const [url, setURL] = useState(defaultURL)
  const [body, setBody] = useState(JSON.stringify(defaultBody))
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    const options = defaultBody
      ? { method: method, headers, body: JSON.stringify(defaultBody) }
      : { headers }
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
    <>
      <h2>{title}</h2>
      <div className="main-section">
        <div className="request-details">
          <h3>url</h3>
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
              <h3>body</h3>
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
          <h2 className="status">Response Status: {status}</h2>
          {!defaultBody && (
            <>
              <label>Response body: </label>
              <code>{JSON.stringify(data)}</code>{' '}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>AO2: Cryptographic failure</h1>

      <Section
        defaultURL={ALL_DATA_URL}
        title="All data exploit"
        method="GET"
        defaultBody={null}
      />
      <Section
        defaultURL={CHANGE_PASSWORD_URL}
        title="Change Password"
        method="POST"
        defaultBody={CHANGE_PASSWORD_BODY}
      />
      <Section
        defaultURL={LOGIN_URL}
        title="Login"
        method="POST"
        defaultBody={LOGIN_BODY}
      />
      <Section
        defaultURL={REGISTER_URL}
        title="Register"
        method="POST"
        defaultBody={REGISTER_BODY}
      />
    </div>
  )
}
