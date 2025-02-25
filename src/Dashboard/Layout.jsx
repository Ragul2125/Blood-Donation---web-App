import React from 'react'
import { Outlet } from 'react-router-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Donate from './Donate/Donate.jsx'
import Emergency from './Emergency/Emergency.jsx'
import Profile from './Profile/Profile.jsx'
import Request from './Request/Request.jsx'
import Map from './Map/Search.jsx'
import Home from './Home/Home.jsx'
import Bottom from '../Bottom/BottomNav.jsx'
import Donars from '../Dashboard/Donar/Donar.jsx'
const Dashboard = () => {
  return (
   <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/donate' element={<Donate/>}/>
                <Route path='/emergency' element={<Emergency/>}/>
                <Route path='/blood-bank' element={<Emergency/>}/>
                <Route path='/hospital' element={<Emergency/>}/>
                <Route path='/donars' element={<Donars/>}/>
                <Route path='/map' element={<Map/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/request' element={<Request/>}/>
            </Routes>
            <Bottom/>
      
   </>
  )
}

export default Dashboard