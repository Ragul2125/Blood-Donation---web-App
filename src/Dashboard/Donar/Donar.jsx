import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import './Donar.css';
import Matti from '../../assets/matti.png'
const DonorDetails = () => {
  // Static header for donor details.
  const headerText = "Donor Details";

  // Array storing unique donor details.
  const donorDetails = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      image: Matti,
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      image: Matti,
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "555-123-4567",
      image: Matti,
    },
    {
      id: 4,
      name: "Michael Brown",
      phone: "444-987-6543",
      image: Matti,
    },
    {
      id: 5,
      name: "Emily Davis",
      phone: "333-222-1111",
      image: Matti,
    },
    {
      id: 6,
      name: "William Garcia",
      phone: "222-333-4444",
      image: Matti,
    },
    {
      id: 7,
      name: "Olivia Martinez",
      phone: "777-888-9999",
      image: Matti,
    }
  ];

  return (
    <main className='emergency-main'>
      <header>
        <h3>{headerText}</h3>
      </header>
      <div className="container">
        {donorDetails.map(donor => (
          <div className="container-fields" key={donor.id}>
            <div className="img">
              <img src={donor.image} alt={donor.name} />
            </div>
            <div className="content">
              <div className="content-name">
                {donor.name}
              </div>
              <div className="no">
                {donor.phone}
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

export default DonorDetails;
