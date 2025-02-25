import React, { useState } from 'react';
import './Request.css';
import { BsDropletFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Request = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);

    const bloodGroups = ["A+", "O-", "B-", "A-", "AB-", "AB+", "O+", "B+"];
    const Navigate=useNavigate();
    const handleSearch=()=>{
        Navigate('/dashboard/hospital')
    }
    return (
        <>
            <div className='Request-pg'>
                <h2>Find Donor</h2>
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
                        <h4>Location</h4>
                        <input type='text' placeholder='Location' />
                    </div>
                    <div className='location'>
                        <h4>Contact</h4>
                        <input type='text' placeholder='Contact' />
                    </div>
                    <div className='location '>
                        <h4>Patient Information</h4>
                        <input type='text' placeholder='Information' />
                    </div>
                    <div className='location'>
                        <h4>Reason</h4>
                        <input type='text' placeholder='Reason' />
                    </div>
                </div>
                <button onClick={handleSearch}>Search</button>
            </div>
        </>
    )
}

export default Request;
