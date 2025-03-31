import React, { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import ProfileImg from "../../assets/profileImg.svg";
import { FaRegBell } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import "./Donate.css";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../../api/service";

const Donate = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    blood_group: "",
    health_status: "",
    last_donated: "",
    availability: "",
    weight: "",
    age: ""
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get("/user/getdetails");
        setUserData(response.user);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDonate = async () => {
    try {
      await api.post("/user/become-donor", formData);
      Navigate("success");
    } catch (error) {
      console.error("Error becoming donor:", error);
      alert(error.response?.data?.message || "Failed to register as donor");
    }
  };

  if (loading) {
    return <div className="loading">Loading user data...</div>;
  }

  return (
    <div className="donate-main">
      <div className="donate-pg">
        <div className="donate-pg-content">
          <div className="title">
            <h2>Donate</h2>
          </div>
          <div className="donate-details">
            <div className="input-1">
              Your Full Name
              <input 
                type="text" 
                value={userData?.name || ""} 
                readOnly 
                className="read-only-input"
              />
            </div>
            <div className="input-1">
              Blood Type
              <select
                name="blood_group"
                value={formData.blood_group}
                onChange={handleChange}
                required
              >
                <option value="">Select your blood type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="input-1">
              Health Status
              <input 
                type="text" 
                name="health_status"
                value={formData.health_status}
                onChange={handleChange}
                placeholder="Recent surgery, allergy, vaccine" 
                required
              />
            </div>
            <div className="input-1">
              Last Donation Date
              <input 
                type="date" 
                name="last_donated"
                value={formData.last_donated}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-1">
              Availability
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="e.g., Dhaka City, till January 2025"
                required
              />
            </div>
            <div className="two-inputs">
              <div className="input-6">
                Age
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  min="18"
                  max="65"
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div className="input-6">
                Weight (kg)
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  min="40"
                  max="150"
                  step="0.1"
                  placeholder="Enter your weight"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleDonate} className="btn" disabled={!formData.blood_group || !formData.health_status}>
          Proceed To Donate
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Donate;