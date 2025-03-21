import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { useLocation } from 'react-router-dom';
import profile from '../../assets/profile.avif';
import '../Donar/Donar.css';
import header from "../../assets/header-img.svg";

const Emergency = () => {
  const location = useLocation();

  let headerText = "Emergency Number";
  let emergencyContacts = [];

  if (location.pathname.includes('blood-bank')) {
    headerText = "Blood Bank";
    emergencyContacts = [
      { id: 1, name: "Madurai Voluntary Blood Bank", phone: "0452 452 4452", image: profile },
      { id: 2, name: "Red Cross Blood Bank", phone: "0452 987 6543", image: profile },
      { id: 3, name: "LifeSaver Blood Bank", phone: "0452 112 2334", image: profile },
      { id: 4, name: "Safe Hands Blood Bank", phone: "0452 334 5566", image: profile },
      { id: 5, name: "Unity Blood Bank", phone: "0452 778 8899", image: profile },
      { id: 6, name: "Bright Hope Blood Bank", phone: "0452 665 7788", image: profile },
      { id: 7, name: "Health First Blood Bank", phone: "0452 998 1122", image: profile },
      { id: 8, name: "Rapid Response Blood Bank", phone: "0452 223 4455", image: profile },
      { id: 9, name: "Pure Life Blood Bank", phone: "0452 556 7788", image: profile },
      { id: 10, name: "Vital Aid Blood Bank", phone: "0452 112 3344", image: profile }
    ];
  } else if (location.pathname.includes('hospital')) {
    headerText = "Hospital";
    emergencyContacts = [
      { id: 1, name: "St. John's Medical Hospital", phone: "0452 123 4567", image: profile },
      { id: 2, name: "City Care Hospital", phone: "0452 765 4321", image: profile },
      { id: 3, name: "Green Valley Hospital", phone: "0452 333 2222", image: profile },
      { id: 4, name: "Sunrise Multispecialty Hospital", phone: "0452 445 6677", image: profile },
      { id: 5, name: "Healing Touch Hospital", phone: "0452 998 7766", image: profile },
      { id: 6, name: "Metro City Hospital", phone: "0452 556 3344", image: profile },
      { id: 7, name: "Silverline Hospital", phone: "0452 112 7788", image: profile },
      { id: 8, name: "Medline General Hospital", phone: "0452 334 5566", image: profile },
      { id: 9, name: "Guardian Angel Hospital", phone: "0452 778 8899", image: profile },
      { id: 10, name: "Grandview Hospital", phone: "0452 665 1122", image: profile }
    ];
  } else {
    emergencyContacts = [
      { id: 1, name: "Indian Red Cross Blood Bank", phone: "011 2371 6441", image: profile },
      { id: 2, name: "National Blood Transfusion", phone: "011 2323 6969", image: profile },
      { id: 3, name: "Rotary Blood Bank", phone: "011 4225 2222", image: profile },
      { id: 4, name: "All India Institute of Medical Sciences", phone: "011 2658 8500", image: profile },
      { id: 5, name: "Indian Medical Association Blood ", phone: "011 2337 0009", image: profile },
      { id: 6, name: "Jeevan Blood Bank", phone: "044 2835 5454", image: profile },
      { id: 7, name: "KEM Hospital Blood Bank", phone: "022 2413 6051", image: profile },
      { id: 8, name: "Tata Memorial Hospital Blood ", phone: "022 2417 7000", image: profile },
      { id: 9, name: "Apollo Blood Bank", phone: "040 2360 7777", image: profile },
      { id: 10, name: "St. John's Blood Bank", phone: "080 4946 6789", image: profile }
    ];
  }

  return (
    <main className='emergency-main'>
      <header>
        <h3>{headerText}</h3>
        <img src={header} alt="Header" />
      </header>
      <div className="container">
        {emergencyContacts.map(contact => (
          <div className="container-fields" key={contact.id}>
            <div className='left-con'>
            <div className="img">
              <img src={contact.image} alt={contact.name} />
            </div>
            <div className="content">
              <div className="content-name">{contact.name}</div>
              <div className="no">{contact.phone}</div>
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
