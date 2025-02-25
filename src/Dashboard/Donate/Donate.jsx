import React from 'react'
import './Donate.css'
import { useState } from 'react';
import { BsDropletFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Donate = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const bloodGroups = ["A+", "O-", "B-", "A-", "AB-", "AB+", "O+", "B+"];
  const Navigate=useNavigate()
  const handleNavigate=()=>{
    Navigate("/dashboard/donars")
  }
  return (
    <>
                  <div className='Donate-pg'>
                      <h2>Donate Blood</h2>
                      <div className='b-group'>
                          <div className='b-title'>
                              <h4><BsDropletFill /> Blood Group*</h4>
                          </div>
                          <div className='groups'>
                              {bloodGroups.map((group, index) => (
                                  <div 
                                      key={index} 
                                      className={`blood-group ${selectedGroup === group ? 'selected' : ''}`} 
                                      onClick={() => setSelectedGroup(group)}
                                  >
                                      <h2>{group}</h2>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className='information-sec'>
                          <div className='location'>
                              <h4>Quantity</h4>
                              <input type='number' placeholder='Quantity' />
                          </div>
                          <div className='location'>
                              <h4>Contact Information</h4>
                              <input type='text' placeholder='Contact Information' />
                          </div>
                          {/* <div className='location '>
                              <h4>Patient Information</h4>
                              <input type='text' placeholder='Information' />
                          </div>
                          <div className='location'>
                              <h4>Reason</h4>
                              <input type='text' placeholder='Reason' />
                          </div> */}
                      </div>
                      <button onClick={handleNavigate}>Donate</button>
                  </div>
    </>
  )
}

export default Donate