import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";
import { PiDropSimpleBold } from "react-icons/pi";
import { TbDropletPlus } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { BiDonateBlood } from "react-icons/bi";
import "./BottomNav.css";
import { useNavigate } from "react-router-dom";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("home");

  const handleHome = () => {
    setActiveNav("home");
    navigate("/dashboard");
  };

  const handleEvent = () => {
    setActiveNav("event");
    navigate("/dashboard/events");
  };

  const handleDonate = () => {
    setActiveNav("donars");
    navigate("/dashboard/donars");
  };

  const handleRecieve = () => {
    setActiveNav("recieve");
    navigate("/dashboard/requested");
  };

  const handleProfile = () => {
    setActiveNav("profile");
    navigate("/dashboard/profile");
  };

  return (
    <div className="bottom-nav-container">
      <div className={`nav-item ${activeNav === "donars" ? "active" : ""}`}>
        <TbDropletPlus size={24}  onClick={handleDonate} />
        <span>Donars</span>
      </div>
      <div className={`nav-item ${activeNav === "event" ? "active" : ""}`}>
        <MdOutlineEditCalendar size={24} onClick={handleEvent} />
        <span>Event</span>
      </div>
      <div className="nav-item center-button">
        <IoHomeOutline size={24} className="plus-icon" onClick={handleHome} />
      </div>
      <div className={`nav-item ${activeNav === "recieve" ? "active" : ""}`}>
        <BiDonateBlood size={24} onClick={handleRecieve} />
        <span>Requested</span>
      </div>
      <div className={`nav-item ${activeNav === "profile" ? "active" : ""}`}>
        <GoPerson size={24} onClick={handleProfile} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomNavBar;
