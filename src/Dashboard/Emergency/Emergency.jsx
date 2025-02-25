import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import profile from '../../assets/profile.avif';
import './Emergency.css';

const Emergency = () => {
  const location = useLocation();

  // Determine header text based on the URL pathname
  let headerText = "Emergency Number";
  if (
    location.pathname.includes('blood-bank')
  ) {
    headerText = "Blood Bank";
  } else if (location.pathname.includes('hospital')) {
    headerText = "Hospital";
  }

  // Array storing unique emergency contact details.
  const emergencyContacts = [
    {
      id: 1,
      name: "Madurai Voluntary Blood Bank",
      phone: "0452 452 4452",
      image: profile,
    },
    {
      id: 2,
      name: "St. John's Medical Hospital",
      phone: "0452 123 4567",
      image: profile,
    },
    {
      id: 3,
      name: "City Care Hospital",
      phone: "0452 765 4321",
      image: profile,
    },
    {
      id: 4,
      name: "Green Valley Hospital",
      phone: "0452 333 2222",
      image: profile,
    },
    {
      id: 5,
      name: "Lifeline Medical Centre",
      phone: "0452 444 5555",
      image: profile,
    },
    {
      id: 6,
      name: "Hope & Health Clinic",
      phone: "0452 777 8888",
      image: profile,
    },
    {
      id: 7,
      name: "Sunrise Emergency Hospital",
      phone: "0452 999 0000",
      image: profile,
    }
  ];

  return (
    <main className='emergency-main'>
      <header>
        <h3>{headerText}</h3>
      </header>
      <div className="container">
        {emergencyContacts.map(contact => (
          <div className="container-fields" key={contact.id}>
            <div className="img">
              <img src={contact.image} alt={contact.name} />
            </div>
            <div className="content">
              <div className="content-name">
                {contact.name}
              </div>
              <div className="no">
                {contact.phone}
              </div>
            </div>
            <div className="call">
              <FiPhoneCall />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Emergency;
