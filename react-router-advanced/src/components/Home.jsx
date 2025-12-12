import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Advanced React Router Demo</h1>
      <p>
        This application demonstrates advanced routing techniques including:
      </p>
      <ul>
        <li>Nested routes</li>
        <li>Dynamic routing</li>
        <li>Protected routes</li>
      </ul>
      <nav>
        <Link to="/profile" className="nav-link">
          Go to Profile
        </Link>
        <Link to="/blog" className="nav-link">
          View Blog Posts
        </Link>
        <Link to="/users/john" className="nav-link">
          User Profile Example
        </Link>
      </nav>
    </div>
  );
};

export default Home;
