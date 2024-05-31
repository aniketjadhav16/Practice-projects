import { useState } from 'react'
import './App.css'

function App() {
  const [visibleText, setVisibleText] = useState('Text')

  const onHandleChange = (e) => {
    setVisibleText(e.target.value)
  }

  return (
    <>
      <div>
        <label>Enter text </label>
        <input
          placeholder='Enter text'
          onChange={onHandleChange}
        ></input>
      </div>
      <p>{visibleText}</p>
    </>
  )
}

export default App
