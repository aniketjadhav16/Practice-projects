import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')

  const convertedAmount = () => {
    if (selectedOption === "USD") {
      setTo(from * 80)
    }
    if (selectedOption === "INR"){
      setTo(from/80)
    }
  }

  const handleSelected = (e) => {
      setSelectedOption(e.target.value)
  }

  return (
    <>
      <div>
        <label>From</label>
        <input
          type = "number"
          value = {from}
          onChange = {(e) => setFrom(parseFloat(e.target.value))}
        ></input>
      </div>

      <div>
        <select
          id = "dropdown"
          value={selectedOption}
          onChange={handleSelected}
        >
          <option>USD</option>
          <option>INR</option>
        </select>
      </div>

      <div>
        <button onClick={convertedAmount} >Convert</button>
      </div>

      <div>
        <label>To</label>
        <input
          type = "number"
          value={to}
          readOnly
        ></input>
      </div>
    </>
  )
}

export default App
