import React from "react";
import "./Profile.css";
import header from "../assets/profile-header.svg";
import profile from "../assets/profile.avif";
const Profile = () => {
  return (
    <main className="profile-main">
      <header className="header-pg">
        <div className="header-top">
          <img src={header} alt="" />
        </div>
      </header>
      <div className="profile-img">
        <img src={profile} alt="" />
      </div>
      <div className="info-sec">
        <div className="info">
          <div className="info-header">
            <h2>Info</h2>
            <div className="edit">Edit</div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>Rgaul</td>
                <td>ragul@gmail.com</td>
              </tr>
              <tr>
                <th>Blood Group</th>
                <th>Age</th>
              </tr>
              <tr>
                <td>B+ve</td>
                <td>19 yr</td>
              </tr>
              <tr>
                <th>Contact No</th>
                <th>Weight</th>
              </tr>
              <tr>
                <td>9087679890</td>
                <td>68</td>
              </tr>
              <tr>
                <th>Last Donation Date</th>
                <th>DOB</th>
              </tr>
              <tr>
                <td>2/9/2008</td>
                <td>14/02/2006</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </main>
  );
};

export default Profile;
