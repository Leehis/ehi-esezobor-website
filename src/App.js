import './App.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'

import Card from './components/card/Card'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Project from './components/project/Project'
import Tools from './components/tools/Tools'
import Work from './components/work/Work'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tools />
      <Work />
    </>
  )
}

export default App
