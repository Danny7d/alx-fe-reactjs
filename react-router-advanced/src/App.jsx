import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <nav className="main-nav">
            <Link to="/" className="nav-brand">
              React Router Demo
            </Link>
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <Link to="/users/john" className="nav-link">
                User Example
              </Link>
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Protected Profile Routes */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Dynamic User Profile Routes */}
            <Route path="/users/:username" element={<UserProfile />} />

            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />

            {/* 404 Not Found Route */}
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>
            Advanced React Router Demo - showcasing nested, dynamic, and
            protected routes
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
