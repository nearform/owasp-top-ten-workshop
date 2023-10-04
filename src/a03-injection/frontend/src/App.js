import React, { useState } from 'react'

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGljZSIsImlhdCI6MTY2MjYzNzc2MH0.15w1NA_Kol5146DJEdXbDuIMmbVsiBXSGgzsVrV5NTY'

//urls
const GET_CUSTOMER_URL = 'http://localhost:3000/customer?name=alice'
const SQL_INJECTION = `http://localhost:3000/customer?name=' OR '1'='1`

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  'Content-Type': 'application/json'
}

function Section({ title, defaultURL, method, defaultBody }) {
  const [url, setURL] = useState(defaultURL)
  const [status, setStatus] = useState(null)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    const options = { headers }

    console.log(options)

    try {
      const response = await fetch(url, options)
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
    <div className="main-section">
      <h2>{title}</h2>
      <label> URL:</label>
      <input
        className="url-input"
        value={defaultURL}
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
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>AO3: Common vulnerabilities</h1>

      <Section defaultURL={GET_CUSTOMER_URL} title="Get customer by name" />
      <Section defaultURL={SQL_INJECTION} title="SQL Injection" />
    </div>
  )
}
