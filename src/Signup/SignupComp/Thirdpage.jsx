import React from 'react'
import { useNavigate } from 'react-router-dom'
const Thirdpage = () => {
    const Navigate=useNavigate()
    const handleFinish=()=>{
        Navigate("/dashboard")
    }
  return (
    <>
        <div className="header-content">
                <h1>Other Info</h1>
                <p>Enter your personal details</p>
        </div>
        <div className="input-sec">
                <div className='inputs'>
                    <h3>DOB</h3>
                    <input type='calender' placeholder='Enter Your Dob'/>
                </div>
                <div className='inputs'>
                    <h3>Weight</h3>
                    <input type='text' placeholder='Enter Your Weight'/>
                </div>
                <div className='inputs'>
                    <h3>Blood Group</h3>
                    <input type='text' placeholder='Enter Your Password'/>
                </div>
                <button onClick={handleFinish}>Finish</button>
        </div>
    </>
  )
}

export default Thirdpage