import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from './components/Hero'
import Booking from './components/Booking'
import Profile from './components/Profile'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />}/>
          <Route exact path="/home" element={<Hero />}/>
          <Route exact path='/booking' element={<Booking />}/>
          <Route exact path='/profile' element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App