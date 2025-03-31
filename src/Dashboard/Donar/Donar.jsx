import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Donar.css";
import header from "../../assets/header-img.svg";
import grp from "../../assets/bld-grp.svg";
import profile from "../../assets/profile.avif";
import api from "../../api/service";

const DonorDetails = () => {
  const location = useLocation();
  const isDonorPage = location.pathname.includes("donars");
  const [donors, setDonors] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch donors data
  useEffect(() => {
    if (!isDonorPage) return;

    const fetchDonors = async () => {
      try {
        const response = await api.get("/user/getdonors");
        setDonors(response.donors || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch donors");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, [isDonorPage]);

  // Fetch blood requests data
  useEffect(() => {
    if (isDonorPage) return;

    const fetchRequests = async () => {
      try {
        const response = await api.get("/requests/getallrequest");
        console.log(response.requests)
        setRequests(response.requests || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch blood requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [isDonorPage]);

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  const headerText = isDonorPage ? "Donors" : "Blood Requests";
  const cardData = isDonorPage ? donors : requests;

  if (loading) {
    return <div className="loading">Loading {headerText.toLowerCase()}...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

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
          {cardData.length > 0 ? (
            cardData.map((item) => (
              <div key={item._id} className="Donar-req-cards">
                {isDonorPage ? (
                  <>
                    <div className="Donar-req-cards-header">
                      <div className="Donar-req-cards-header-profile">
                        <img src={profile} alt="Profile" />
                      </div>
                      <div className="Donar-req-cards-header-bloodgrp">
                        <img src={grp} alt="Blood Group" />
                        <h4>{item.user_id?.blood_group || "N/A"}</h4>
                      </div>
                    </div>

                    <div className="Donar-req-cards-body">
                      <div className="Donar-req-cards-body-name">
                        <h3>{item.user_id?.name || "N/A"}</h3>
                      </div>
                      <div className="Donar-req-cards-body-content">
                        <div className="Donar-req-cards-body-content-row">
                          <p>Health Status:</p>
                          <p className="val">{item.health_status || "N/A"}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Last Donation:</p>
                          <p className="val">{formatDate(item.last_donated)}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Contact:</p>
                          <p className="val">{item.user_id?.phone_number || "N/A"}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Availability:</p>
                          <p className="val">{item.availability || "N/A"}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Location:</p>
                          <p className="val">
                            {item.user_id?.address || "N/A"}, {item.user_id?.district || "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="Donar-req-cards-header">
                      <div className="Donar-req-cards-header-profile">
                        <img src={profile} alt="Profile" />
                      </div>
                      <div className="Donar-req-cards-header-bloodgrp">
                        <img src={grp} alt="Blood Group" />
                        <h4>{item.blood_group || "N/A"}</h4>
                      </div>
                    </div>

                    <div className="Donar-req-cards-body">
                      <div className="Donar-req-cards-body-name">
                        <h3>Request #{item._id.slice(-4)}</h3>
                      </div>
                      <div className="Donar-req-cards-body-content">
                        <div className="Donar-req-cards-body-content-row">
                          <p>Blood Quantity:</p>
                          <p className="val">{item.quantity || "N/A"}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Location:</p>
                          <p className="val">{item.location || "N/A"}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Request Date:</p>
                          <p className="val">{formatDate(item.created_at)}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Contact Info :</p>
                          <p className="val">{item.contact_info || "N/A"}</p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Status:</p>
                          <p className="val" style={{ 
                            color: item.status === 'fulfilled' ? 'green' : 
                                  item.status === 'pending' ? 'orange' : 'red'
                          }}>
                            {item.status || "N/A"}
                          </p>
                        </div>
                        <div className="Donar-req-cards-body-content-row">
                          <p>Patient Details:</p>
                          <p className="val">{item.patient_info || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="Donar-req-cards-btn">
                  <button>
                    {isDonorPage ? "Contact" : "View Details"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              No {headerText.toLowerCase()} found
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default DonorDetails;