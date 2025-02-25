import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Firstpage from './SignupComp/Firstpage'
import Secondpage from './SignupComp/Secondpage'
import Thirdpage from './SignupComp/Thirdpage'

import './Signup.css'

const Signup = () => {
    return (
        <div className='createaccnt-pg'>
            <header className="header">
                <div className="header-bg"></div>
                <div className="header-bg-off"></div>
                
            </header>

            <Routes>
                <Route path="/" element={<Firstpage />} />
                <Route path="account-info" element={<Firstpage />} />
                <Route path="contact-info" element={<Secondpage />} />
                <Route path="other-info" element={<Thirdpage />} />
            </Routes>
        </div>
    )
}

export default Signup
