import React, { useState } from 'react';
import './Request.css';
import { BsDropletFill } from "react-icons/bs";
import { Outlet, useNavigate } from 'react-router-dom';
import api from '../../api/service';

const Request = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [formData, setFormData] = useState({
        quantity: '',
        location: '',
        contact_info: '',
        patient_info: '',
        reason: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const bloodGroups = ["A+", "O-", "B-", "A-", "AB-", "AB+", "O+", "B+"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleRequest = async () => {
        if (!selectedGroup) {
            alert("Please select a blood group before searching!");
            return;
        }

        if (!formData.quantity || !formData.location || !formData.contact_info) {
            alert("Please fill all required fields!");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const requestData = {
                blood_group: selectedGroup,
                ...formData
            };

            await api.post('/requests/createRequest', requestData);
            navigate('success');
        } catch (err) {
            setError(err.response?.data?.message || "Failed to create request");
            console.error("Request creation error:", err);
        } finally {
            setLoading(false);
        }
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
                    <h4>Quantity*</h4>
                    <input 
                        type="number" 
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity (units)" 
                        min="1" 
                        required
                    />
                </div>
                <div className='location'>
                    <h4>Location*</h4>
                    <input 
                        type='text' 
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder='Enter hospital/location' 
                        required
                    />
                </div>
                <div className='location'>
                    <h4>Contact*</h4>
                    <input 
                        type='text' 
                        name="contact_info"
                        value={formData.contact_info}
                        onChange={handleChange}
                        placeholder='Enter contact number' 
                        required
                    />
                </div>
                <div className='location'>
                    <h4>Patient Information</h4>
                    <input 
                        type='text' 
                        name="patient_info"
                        value={formData.patient_info}
                        onChange={handleChange}
                        placeholder='Enter patient details' 
                    />
                </div>
                <div className='location'>
                    <h4>Reason</h4>
                    <input 
                        type='text' 
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder='Enter reason for request' 
                    />
                </div>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button 
                onClick={handleRequest} 
                disabled={loading || !selectedGroup || !formData.quantity || !formData.location || !formData.contact_info}
            >
                {loading ? 'Processing...' : 'Request'}
            </button>
            <Outlet />
        </div>
    );
};

export default Request;