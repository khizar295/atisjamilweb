import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Custrev from './pages/Custrev'
import Clients from './pages/Clients'
import Services from './pages/Services'
import TestimonialsSection from './pages/Testinomials'
import StatsSection from './pages/Expcli'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Custrev/>
      <Clients/>  
      <Services/>
      <TestimonialsSection/>
      <StatsSection/>
    </>
  )
}

export default App
