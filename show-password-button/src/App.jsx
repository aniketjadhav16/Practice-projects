import { useState } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')

  const onHandleChange = (e) => {
    setText(e.target.value)
  }

  const visibilityButton = (e) => {
    setVisible(!visible)
  }

  return (
    <>
      <div>
        <input
          type={visible ? 'text' : 'password'}
          onChange={onHandleChange}
          placeholder='Enter password'
        ></input>
        <button
          onClick={visibilityButton}
        >SetVisible</button>
      </div>
    </>
  )
}

export default App
