import { Outlet, Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div className="profile">
      <h1>User Profile</h1>
      <nav className="profile-nav">
        <Link to="details" className="nav-link">
          Profile Details
        </Link>
        <Link to="settings" className="nav-link">
          Settings
        </Link>
      </nav>
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
