import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'owasp-shared/style.css'
import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const REGISTER_URL = 'http://localhost:3000/register'

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  'Content-Type': 'application/json'
}

const defaultBody = {
  username: 'bondJames',
  password: 'IamY0u'
}

export default function App() {
  const [url, setURL] = useState(REGISTER_URL)
  const [body, setBody] = useState(JSON.stringify(defaultBody))
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    const options = { method: 'POST', headers, body }
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
      <h1>AO7: Authenticaiton failure</h1>
      <h2>Register</h2>
      <div className="main-section">
        <div className="request-details">
          <h3>url</h3>
          <input
            className="url-input"
            value={REGISTER_URL}
            onChange={handleURLChange}
          ></input>
          <button className="url-input-button" onClick={handleSubmit}>
            send
          </button>

          <div className="body-section">
            <h3>body:</h3>
            <CodeMirror
              value={JSON.stringify(defaultBody)}
              onChange={value => {
                setBody(value)
              }}
              height="200px"
            />
          </div>
        </div>

        <div className="response-section">
          <h2 className="success">Response: {status}</h2>
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </>
  )
}
