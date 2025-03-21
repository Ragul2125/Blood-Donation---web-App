import React from "react";
import { useLocation } from "react-router-dom";
import "./Donar.css";
import header from "../../assets/header-img.svg";
import grp from "../../assets/bld-grp.svg";
import profile from "../../assets/profile.avif";

const DonorDetails = () => {
  const location = useLocation();
  const isDonorPage = location.pathname.includes("donars"); 

  // Title dynamically set
  const headerText = isDonorPage ? "Donars" : "Receivers";

  // Donor Data
  const donorData = [
    { id: 1, name: "Mahesh", bloodType: "A+", health: "Recent Surgery", age: 25, weight: "70Kg", availability: "Till April 2025" },
    { id: 2, name: "Ravi", bloodType: "O+", health: "Healthy", age: 30, weight: "75Kg", availability: "Anytime" }
  ];

  // Receiver Data
  const receiverData = [
    { id: 1,name:"Mahesh", bloodType: "B-", quantity: "2 Units", location: "Chennai", contact: "+91 9876543210", patientCondition: "Critical Condition" },
    { id: 2, name:"Mahesh",bloodType: "AB+", quantity: "1 Unit", location: "Bangalore", contact: "+91 8765432109", patientCondition: "Stable Condition" }
  ];

  // Select correct data
  const cardData = isDonorPage ? donorData : receiverData;

  return (
    <main className="emergency-main">
      <header className="header-pg">
        <div className="header-top">
          <h2>{headerText}</h2>
          <img src={header} alt="Header" />
        </div>
      </header>

      <div className="container">
        <div className="donar-req-conatiner">
          {cardData.map((item) => (
            <div key={item.id} className="Donar-req-cards">
              
              {/* Donor Card Layout */}
              {isDonorPage ? (
                <>
                  <div className="Donar-req-cards-header">
                    <div className="Donar-req-cards-header-profile">
                      <img src={profile} alt="Profile" />
                    </div>
                    <div className="Donar-req-cards-header-bloodgrp">
                      <img src={grp} alt="Blood Group" />
                      <h4>{item.bloodType}</h4>
                    </div>
                  </div>
                  
                  <div className="Donar-req-cards-body">
                    <div className="Donar-req-cards-body-name">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="Donar-req-cards-body-content">
                      <div className="Donar-req-cards-body-content-row">
                        <p>Health Status :</p>
                        <p className="val">{item.health}</p>
                      </div>
                      <div className="Donar-req-cards-body-content-row">
                        <p>Age :</p>
                        <p className="val">{item.age}</p>
                      </div>
                      <div className="Donar-req-cards-body-content-row">
                        <p>Weight :</p>
                        <p className="val">{item.weight}</p>
                      </div>
                      <div className="Donar-req-cards-body-content-row">
                        <p>Availability :</p>
                        <p className="val">{item.availability}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Receiver Card Layout */
                <>
                  <div className="Donar-req-cards-header">
                  <div className="Donar-req-cards-header-profile">
                      <img src={profile} alt="Profile" />
                    </div>
                    <div className="Donar-req-cards-header-bloodgrp">
                      <img src={grp} alt="Blood Group" />
                      <h4>{item.bloodType}</h4>
                    </div>
                  </div>

                  <div className="Donar-req-cards-body">
                  <div className="Donar-req-cards-body-name">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="Donar-req-cards-body-content">
                      <div className="Donar-req-cards-body-content-row">
                        <p>Blood Quantity :</p>
                        <p className="val">{item.quantity}</p>
                      </div>
                      <div className="Donar-req-cards-body-content-row">
                        <p>Location :</p>
                        <p className="val">{item.location}</p>
                      </div>
                      <div className="Donar-req-cards-body-content-row">
                        <p>Contact :</p>
                        <p className="val">{item.contact}</p>
                      </div>
                      <div className="Donar-req-cards-body-content-row">
                        <p>Patient Condition :</p>
                        <p className="val">{item.patientCondition}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="Donar-req-cards-btn">
                <button>Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DonorDetails;