import React, { useState } from 'react'
const ALL_DATA_URL = 'http://localhost:3000/all-data'
const CHANGE_PASSWORD_URL = 'http://localhost:3000/change-password'
const REGISTER_URL = 'http://localhost:3000/register'
const LOGIN_URL = 'http://localhost:3000/login'

const CHANGE_PASSWORD_BODY = { password: 'newpassword' }
const REGISTER_BODY = {
  username: 'newUser',
  password: 'password1234'
}
const LOGIN_BODY = {
  username: 'alice',
  password: '482c811da5d5b4bc6d497ffa98491e38'
}

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGljZSIsImlhdCI6MTY2MjYzNzc2MH0.15w1NA_Kol5146DJEdXbDuIMmbVsiBXSGgzsVrV5NTY'

const headers = {
  Authorization: `Bearer ${BEARER_TOKEN}`,
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive'
}

function Section({ title, defaultURL, method, body }) {
  const [url, setURL] = useState(defaultURL)
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }
  const handleSubmit = async () => {
    const options = body ? { method: method, headers, body: body } : { headers }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error(
          `Network response was not successful code: ${response.status}`
        )
      }
      const data = await response.json()

      setData(data)
    } catch (error) {
      console.error(error)
    }
  }
  console.log(defaultURL)
  return (
    <div class="main-section">
      <h2>{title}</h2>
      <label> URL:</label>
      <input
        class="url-input"
        value={defaultURL}
        onChange={handleURLChange}
      ></input>
      <button class="url-input-button" onClick={handleSubmit}>
        send
      </button>
      {method === 'POST' && (
        <div class="body-section">
          <h3>body:</h3>
          <code>{JSON.stringify(body)}</code>
        </div>
      )}
      <div class="response-section">
        <h2>Response</h2>
        <code>{JSON.stringify(data)}</code>
      </div>
    </div>
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
        body={null}
      />
      <Section
        defaultURL={CHANGE_PASSWORD_URL}
        title="Change Password"
        method="POST"
        body={CHANGE_PASSWORD_BODY}
      />
      <Section
        defaultURL={LOGIN_URL}
        title="Change Password"
        method="POST"
        body={LOGIN_BODY}
      />
      <Section
        defaultURL={REGISTER_URL}
        title="Change Password"
        method="POST"
        body={REGISTER_BODY}
      />
    </div>
  )
}
