import React from "react";
import "./Success.css";
import { SiTicktick } from "react-icons/si";
import req from "../../assets/req.svg";
import bank from "../../assets/blood-bank.svg";
import bloodDrop from "../../assets/Blood_Drops.svg"
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();

  // Check if the current route is for donation or request
  const isDonor = location.pathname.includes("/donate");
  const isRequest = location.pathname.includes("/request");

  return (
    <div className="Success-main">
      <div className="msg">
        <div className="icon">
          <SiTicktick />
        </div>

        {isDonor && (
          <>
            <div className="msg-content">
              Thank You for Registering! ❤️ Your decision to become a blood
              donor can save lives! Stay tuned for donation opportunities, and
              thank you for being a hero!
            </div>
            <div className="donate-icon">
              <img src={bloodDrop} alt="Blood Bank Icon" />
            </div>
          </>
        )}

        {isRequest && (
          <>
            <div className="msg-content">
              Blood Request Submitted! 🩸 Thank you for reaching out. Your
              request has been received, and we are working to connect you with
              available donors. Stay strong—we're here to help!
            </div>
            <div className="donate-icon">
              <img src={req} alt="Blood Request Icon" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Success;
