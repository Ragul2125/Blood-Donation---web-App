import React, { useState, useEffect } from "react";
import "./Profile.css";
import header from "../../assets/profile-header.svg";
import profile from "../../assets/profile.avif";
import api from "../../api/service";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    blood_group: "",
    age: "",
    phone_number: "",
    weight: "",
    dob: "",
    health_status: "",
    last_donated: "",
    availability: false
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await api.get("/user/getdetails");
        console.log(response.user);
        setUserData(response.user);
        setFormData({
          name: response.user.name || "",
          email: response.user.email || "",
          blood_group: response.user.blood_group || "",
          age: response.user.age || "",
          phone_number: response.user.phone_number || "",
          weight: response.user.weight || "",
          dob: response.user.dob || "",
          health_status: response.user.donor_id?.health_status || "",
          last_donated: response.user.donor_id?.last_donated || "",
          availability: response.user.donor_id?.availability || false
        });
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); 
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updates = {
        name: formData.name,
        email: formData.email,
        blood_group: formData.blood_group,
        age: formData.age,
        phone_number: formData.phone_number,
        weight: formData.weight,
        dob: formData.dob
      };

      
      if (userData.is_donor) {
        updates.health_status = formData.health_status;
        updates.last_donated = formData.last_donated;
        updates.availability = formData.availability;
      }

      const response = await api.put("/user/updateuser", updates);
      setUserData(response.data);
      setEditMode(false);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile");
    }
  };

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!userData) {
    return <div className="error">No user data available</div>;
  }

  return (
    <main className="profile-main">
      <header className="header-pg">
        <div className="header-top">
          <img src={header} alt="Profile header" />
        </div>
      </header>
      <div className="profile-img">
        <img src={profile} alt="Profile" />
      </div>
      <div className="info-sec">
        <div className="info">
          <div className="info-header">
            <h2>Info</h2>
            <div className="edit" onClick={() => setEditMode(!editMode)}>
              {editMode ? "Cancel" : "Edit"}
            </div>
          </div>
          
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Blood Group</th>
                    <th>Age</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="blood_group"
                        value={formData.blood_group}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Contact No</th>
                    <th>Weight</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                      /> kg
                    </td>
                  </tr>
                  <tr>
                    <th>Last Donation Date</th>
                    <th>DOB</th>
                  </tr>
                  <tr>
                    <td>
                      {userData.is_donor ? (
                        <input
                          type="date"
                          name="last_donated"
                          value={formData.last_donated ? formData.last_donated.split('T')[0] : ''}
                          onChange={handleInputChange}
                        />
                      ) : (
                        userData.donor_id?.last_donated
                          ? formatDate(userData.donor_id.last_donated)
                          : "N/A"
                      )}
                    </td>
                    <td>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob ? formData.dob.split('T')[0] : ''}
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                  {userData.is_donor && (
                    <>
                      <tr>
                        <th>Health Status</th>
                        <th>Availability</th>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="health_status"
                            value={formData.health_status}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            name="availability"
                            checked={formData.availability}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <td colSpan="2">
                      <button type="submit" className="save-button">
                        Save Changes
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          ) : (
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>{userData.name || "N/A"}</td>
                  <td>{userData.email || "N/A"}</td>
                </tr>
                <tr>
                  <th>Blood Group</th>
                  <th>Age</th>
                </tr>
                <tr>
                  <td>{userData.blood_group || "N/A"}</td>
                  <td>{userData.age || "N/A"}</td>
                </tr>
                <tr>
                  <th>Contact No</th>
                  <th>Weight</th>
                </tr>
                <tr>
                  <td>{userData.phone_number || "N/A"}</td>
                  <td>{userData?.weight || "N/A"} kg</td>
                </tr>
                <tr>
                  <th>Last Donation Date</th>
                  <th>DOB</th>
                </tr>
                <tr>
                  <td>
                    {userData.donor_id?.last_donated
                      ? formatDate(userData.donor_id.last_donated)
                      : "N/A"}
                  </td>
                  <td>{userData.dob ? formatDate(userData.dob) : "N/A"}</td>
                </tr>
                {userData.is_donor && (
                  <>
                    <tr>
                      <th>Health Status</th>
                      <th>Availability</th>
                    </tr>
                    <tr>
                      <td>{userData.donor_id?.health_status || "N/A"}</td>
                      <td>{userData.donor_id?.availability  ||"Not Available"}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default Profile;