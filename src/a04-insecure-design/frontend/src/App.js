import React, { useState } from 'react'

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGljZSIsImlhdCI6MTY2MjYzNzc2MH0.15w1NA_Kol5146DJEdXbDuIMmbVsiBXSGgzsVrV5NTY'

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
        mode: 'cors',
        method: 'POST',
        headers
      })
      console.log(response)
      if (!response.ok) {
        setStatus(`failed, ${response.status}`)
        throw new Error(response.status)
      }
      const data = await response.json()

      setData(data)
      setStatus(`success, ${response.status}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
      <h1>AO4: Insecure design</h1>

      <div className="main-section">
        <h2>Buy a product</h2>
        <label> URL:</label>
        <input
          className="url-input"
          value={BUY_PRODUCT_URL}
          onChange={handleURLChange}
        ></input>
        <button className="url-input-button" onClick={handleSubmit}>
          send
        </button>

        <div className="response-section">
          <h2 className="success">Response: {status}</h2>
          <code>{JSON.stringify(data)}</code>
        </div>
      </div>
    </div>
  )
}
