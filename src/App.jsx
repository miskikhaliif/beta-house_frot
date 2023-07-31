import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './dashboard/dash'
import Client from './clints/client'
import Service from './servivce/service'
import About from './about/about'
import { Home } from './home/home'
import { Contact } from './contact/contact'

function App() {
  return (
    <>
<Routes>
{/* <Route path='/' element={<h1> loginb </h1>}/> */}
  <Route path='/' element={<Dashboard/>}>
  <Route path='client' element={<Client/>}/>
  <Route path='service' element={<Service/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='user' element={<Client/>}/>
  <Route path='home' element={<Home/>}/>
  </Route>
</Routes>
      
       
    </>
  )
}

export default App
