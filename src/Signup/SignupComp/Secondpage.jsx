import React from 'react'
import { useNavigate } from 'react-router-dom'
const Secondpage = () => {
    const Navigate=useNavigate()
    const handleNavigate=()=>{
        Navigate("/signup/other-info")
    }
  return (
    <>
        <div className="header-content">
                <h1>Contact Info</h1>
                <p>Enter your address details</p>
        </div>
        <div className='input-sec'>
            <div className='inputs'>
                <h3>Address</h3>
                <input type='text' placeholder='Enter your Address'/>
            </div>
            <div className='inputs'>
                <h3>District</h3>
                <input type='text' placeholder='District'/>
            </div>
            <div className='inputs'>
                <h3>Province No</h3>
                <input type='text' placeholder='Province No'/>
            </div>
            <div className='inputs'>
                <h3>Phone</h3>
                <input type='number' placeholder='Mobile No'/>
            </div>
            <button onClick={handleNavigate}>Continue</button>
        </div>
    </>
  )
}

export default Secondpage