import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import View from './components/View'
import Add from './components/Add'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{color:'black'}}>Movie Tickets Booking</h1>
    <Navbar/>
    <Routes>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/' element={<View/>}></Route>

    </Routes>
    
    </>
  )
}

export default App
