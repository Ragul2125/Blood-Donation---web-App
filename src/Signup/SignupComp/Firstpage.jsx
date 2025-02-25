import React from 'react'
import '../Signup.css'
import { useNavigate } from 'react-router-dom'
const Firstpage = () => {
    const Navigate = useNavigate()
    const handleNavigate = () => {
        Navigate("/signup/contact-info")
    }
    return (

        <>
            <div className="header-content">
                <p>Signup for a new account</p>
                <h1>Create Account</h1>
            </div>
            <div className="input-sec">
                <div className='inputs'>
                    <h3>Full name</h3>
                    <input type='text' placeholder='Enter Your Name' />
                </div>
                <div className='inputs'>
                    <h3>Email</h3>
                    <input type='text' placeholder='Enter Your Email' />
                </div>
                <div className='inputs'>
                    <h3>Password</h3>
                    <input type='text' placeholder='Enter Your Password' />
                </div>
                <div className='inputs'>
                    <h3>Confirm Password</h3>
                    <input type='text' placeholder='Confirm Password' />
                </div>
                <button onClick={handleNavigate}>Continue</button>
            </div>

        </>


    )
}

export default Firstpage