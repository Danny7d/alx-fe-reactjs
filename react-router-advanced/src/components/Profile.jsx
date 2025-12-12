import { Outlet, Link } from "react-router-dom";

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
