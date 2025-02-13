import { IoHomeOutline ,IoSearchOutline } from "react-icons/io5";
import { MdOutlineEditCalendar } from "react-icons/md";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { CiDroplet } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import "./BottomNav.css";

const BottomNavBar = () => {
  return (
    <div className="bottom-nav-container">
      <div className="nav-item active">
        <IoHomeOutline size={24} />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <IoSearchOutline size={24} />
        <span>Search</span>
      </div>
      <div className="nav-item center-button">
        <CiDroplet size={24} className="plus-icon" />
      </div>
      <div className="nav-item">
      <MdOutlineEditCalendar size={24}/>
      <span>Event</span>    
      </div>
      <div className="nav-item">
        <GoPerson  size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
};

export default BottomNavBar;