import { useState } from 'react'
import './App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom'
function App() {


  return (
    <>
<Routes>
  <Route path='/' element={<Signup></Signup>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
</Routes>
      
     </>
  )
}

export default App
