import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import HeroSection from './component/Homepage/HeroSection'
import Design from './component/Homepage/Design'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <HeroSection/> */}
      <Design/>
    </>
  )
}

export default App
