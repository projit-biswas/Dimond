import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import HeroSection from './component/Homepage/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  )
}

export default App
