import React from 'react'
import Login from './components/login/login'
import Register from './components/register/register'
import Home from './pages/home/home'
import Test from './components/test/test'
import Hoteldetils from './pages/hoteldetils/hoteldetils'
import Landingpage from './pages/landingpage/landingpage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/test'  element={<Test/>}/>
        <Route path='/hotel/:id' element={<Hoteldetils/>}/>
        <Route path='/' element={<Landingpage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App