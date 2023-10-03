import React, { useState } from 'react'
const URL = 'http://localhost:3000/profile?username=alice'
const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhbGljZSIsImlhdCI6MTY2MjYzNzc2MH0.15w1NA_Kol5146DJEdXbDuIMmbVsiBXSGgzsVrV5NTY'
function App() {
  const [url, setURL] = useState(URL)
  const [data, setData] = useState()

  const handleURLChange = event => {
    setURL(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive'
        }
      })

      if (!response.ok) {
        throw new Error(
          `Network response was not successful code: ${response.status}`
        )
      }

      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div className="App">
      <h1>AO1: access control</h1>
      <label> URL:</label>
      <input value={URL} onChange={handleURLChange}></input>
      <button onClick={handleSubmit}> send request</button>
      <div>
        <h2>Response</h2>
        <code>{JSON.stringify(data)}</code>
      </div>
    </div>
  )
}

export default App
