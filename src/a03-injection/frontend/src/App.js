import React, { useState } from 'react'
const ALL_DATA_URL = 'http://llocalhost:3000/all-data'
const CHANGE_PASSWORD_URL = 'http://localhost:3000/change-password'
const REGISTER_URL = 'http://localhost:3000/register'
const LOGIN_URL = 'localhost:3000/login'
function App() {
  const [url, setURL] = useState()
  const [data, setData] = useState()
  const handleURLChange = event => {
    setURL(event.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(
          `Network response was not successful code: ${response.status}`
        )
      }
      const data = await response.json()

      console.log(data)
    } catch (error) {
      console.error('Error making GET request:', error)
    }
  }
  return (
    <div className="App">
      <header>AO2: Cryptographic failure</header>
      <label> URL:</label>
      <input value={URL} onChange={handleURLChange}></input>
      <button onClick={handleSubmit}> Go</button>
    </div>
  )
}

export default App
