import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { BiSolidDonateBlood } from "react-icons/bi";
import hosp from "../../assets/hospital.svg"
import profileImg from "../../assets/profile.avif";
import donate from "../../assets/blood-donation.svg"
import req from "../../assets/req.svg"
import bank from "../../assets/blood-bank.svg"
import gif from "../../assets/cardgif.svg"
import call from "../../assets/call.svg"
import map from "../../assets/map.svg"
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const Navigate=useNavigate();
  const handleDonate=()=>{
    Navigate('/dashboard/donate')
  }
  const handleRequest=()=>{
    Navigate('/dashboard/request')
  }
  const handleMap=()=>{
    Navigate('/dashboard/map')
  }
  const handleHosp=()=>{
    Navigate('/dashboard/hospital')
  }
  const handleBloodbank=()=>{
    Navigate('/dashboard/blood-bank')
  }
  const handleEmergency=()=>{
    Navigate('/dashboard/emergency')
  }
  return (
    <div className="home-pg">
      <header>
        <div className="profile">
          <img src={profileImg} alt="" />
          <div className="profile-content">
          <p className="name">Jenillia</p>
          <p>Dontar</p>
          </div>
        </div>
        <div className="notification">
          <MdNotificationsActive />
        </div>
      </header>
      <div className="container">
        <div className="event">
          <div className="event-header">
            <h3>Blood Donation Campaign</h3>
          </div>
          <div className="slide">
            <div className="cards card1"><h4>National Events</h4>
            <img src={gif} alt="" /></div>
            <div className="cards card2" ><h4>National Events</h4>
            <img src={gif} alt="" /></div>
            <div className="cards card3"><h4>National Events</h4>
            <img src={gif} alt="" /></div>
            <div className="cards card4"><h4>National Events</h4>
            <img src={gif} alt="" /></div>
            
          </div>
        </div>
        <div className="dash-cards">
          <div className="dash-card "onClick={handleDonate}>
          <p className="icons" ><img src={donate} alt="donate blood" /></p>
          <h3>Donate Blood</h3>
          </div>
          <div className="dash-card" onClick={handleRequest}>
          <p className="icons"><img src={req} alt="req bkood" /></p>
          <h3>Request Blood</h3>
          </div>
          <div className="dash-card" onClick={handleBloodbank}>
          <p className="icons"><img src={bank} alt="blood bank" /></p>
          <h3>Blood Bank</h3>
          </div>
          <div className="dash-card" onClick={handleHosp}>
          <p className="icons"><img src={hosp} alt="hosp" /></p>
          <h3>Hospital</h3>
          </div>
          <div className="dash-card" onClick={handleMap}><p className="icons"><img src={map} alt="map" /></p>
          <h3>Map</h3></div>
          <div className="dash-card" onClick={handleEmergency}><p className="icons"><img src={call} alt="call" /></p>
          <h3>Emergency Number</h3></div>

        </div>
      </div>
    </div>
  );
};

export default Home;
