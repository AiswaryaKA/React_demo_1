import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Aish from './Aish'
import Pooj from './Pooj'
import Amala from './Amala'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Aish/>
      <Pooj/>
      <Amala/>
    </>
  )
}

export default App
