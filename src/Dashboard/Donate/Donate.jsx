import React from "react";
import { IoChevronBack } from "react-icons/io5";
import ProfileImg from "../../assets/profileImg.svg";
import { FaRegBell } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import "./Donate.css";
import { Outlet, useNavigate } from "react-router-dom";
const Donate = () => {
  const Navigate = useNavigate();
  const handleDonate = () => {
    Navigate("success");
  };
  return (
    <div className="donate-main">
      <div className="donate-pg">
        <div className="donate-pg-content">
          <div className="title">
            <h2>Donate</h2>
          </div>
          <div className="donate-details">
            <div className="input-1">
              Write Your Full Name
              <input type="text" placeholder="Your name here" />
            </div>
            <div className="input-1">
              Blood Type
              <input type="text" placeholder="Blood Type...." />
            </div>
            <div className="input-1">
              Health Status
              <input type="text" placeholder="recent Surgery,allergy,vaccine" />
            </div>
            <div className="input-1">
              Last Donation Date
              <input type="date" placeholder="Select Date" />
            </div>
            <div className="input-1">
              Availability
              <input
                type="text"
                placeholder="eg, Dhaka City,till january 2025"
              />
            </div>
            <div className="two-inputs">
              <div className="input-6">
                Weight
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="120"
                  placeholder="Enter your age"
                ></input>
              </div>
              <div className="input-6">
                Age
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  min="1"
                  max="300"
                  step="0.1"
                  placeholder="Enter your weight"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleDonate} className="btn">Proceed To Donate</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Donate;
