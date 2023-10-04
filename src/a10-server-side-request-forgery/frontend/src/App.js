import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'owasp-shared/style.css'
import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const UPLOAD_IMAGE_URL = 'http://localhost:3000/user/image'
const MALICIOUS_IMAGE_URL = 'http://localhost:3000/user/image'

//default body values
const UPLOAD_IMAGE_BODY = {
  imgUrl: 'https://i.imgflip.com/6upp1a.jpg'
}
const MALICIOUS_IMAGE_BODY = {
  imgUrl: 'http://localhost:3001/secret'
}
const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  'Content-Type': 'application/json'
}

function Section({ title, defaultURL, defaultBody }) {
  const [url, setURL] = useState(defaultURL)
  const [body, setBody] = useState(JSON.stringify(defaultBody))
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(defaultBody)
    }
    try {
      const response = await fetch(url, options)
      const data = await response.text()
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
          <h3>POST</h3>
          <input
            className="url-input"
            value={defaultURL}
            onChange={handleURLChange}
          ></input>
          <button className="url-input-button" onClick={handleSubmit}>
            send
          </button>

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
      <h1>A10: Server-side-request-forgery</h1>
      <Section
        defaultURL={UPLOAD_IMAGE_URL}
        title="Upload image"
        defaultBody={UPLOAD_IMAGE_BODY}
      />
      <Section
        defaultURL={MALICIOUS_IMAGE_URL}
        title="Malicious image"
        defaultBody={MALICIOUS_IMAGE_BODY}
      />
    </div>
  )
}
