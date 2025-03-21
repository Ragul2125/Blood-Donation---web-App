import React, { useState } from 'react';
import './Request.css';
import { BsDropletFill } from "react-icons/bs";
import { Outlet, useNavigate } from 'react-router-dom';

const Request = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const navigate = useNavigate();

    const bloodGroups = ["A+", "O-", "B-", "A-", "AB-", "AB+", "O+", "B+"];

    const handleSearch = () => {
        if (!selectedGroup) {
            alert("Please select a blood group before searching!");
            return;
        }
        navigate('success'); // Fixed navigation
    };

    return (
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
                    <h4>Quantity</h4>
                    <input type="number" placeholder="Enter your Quantity" min="1" />
                </div>
                <div className='location'>
                    <h4>Location</h4>
                    <input type='text' placeholder='Enter your location' />
                </div>
                <div className='location'>
                    <h4>Contact</h4>
                    <input type='text' placeholder='Enter your contact number' />
                </div>
                <div className='location'>
                    <h4>Patient Information</h4>
                    <input type='text' placeholder='Enter patient details' />
                </div>
                <div className='location'>
                    <h4>Reason</h4>
                    <input type='text' placeholder='Enter reason for request' />
                </div>
            </div>
            <button onClick={handleSearch}>Search</button>
            <Outlet />
        </div>
    );
};

export default Request;
