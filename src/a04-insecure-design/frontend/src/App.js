import React, { useState } from 'react'
import 'owasp-shared/style.css'
import { loggedInToken as BEARER_TOKEN } from 'owasp-shared/test-utils'

//urls
const BUY_PRODUCT_URL = 'http://localhost:3000/buy-product'

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  'Content-Length': 0,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive'
}

export default function App() {
  const [url, setURL] = useState(BUY_PRODUCT_URL)
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers
      })

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
      <h1>AO4: Insecure design</h1>
      <h2>Buy a product</h2>
      <div className="main-section">
        <div className="request-details">
          <h3>url</h3>
          <input
            className="url-input"
            value={BUY_PRODUCT_URL}
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
