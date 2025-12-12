import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const location = useLocation();

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || "/profile";
    return <Navigate to={from} replace />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication API call
    setTimeout(() => {
      // Simple authentication check (in real app, this would be an API call)
      if (email && password) {
        localStorage.setItem("isAuthenticated", "true");
        setIsLoading(false);
        const from = location.state?.from?.pathname || "/profile";
        window.location.href = from;
      } else {
        setIsLoading(false);
        alert("Please enter email and password");
      }
    }, 1000);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <p>Please sign in to access protected routes</p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" disabled={isLoading} className="login-button">
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="demo-info">
          <p>
            <strong>Demo Instructions:</strong>
          </p>
          <p>Enter any email and password to simulate login.</p>
          <p>This will grant access to protected routes like Profile.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
