import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // USERNAME validation
    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.trim().length < 3)
      newErrors.username = "Username must be at least 3 characters";

    // EMAIL validation
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!email.includes("@")) newErrors.email = "Invalid email";

    // PASSWORD validation
    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });

      // Reset form
      setUsername("");
      setEmail("");
      setPassword("");

      // Show "Submitted!" message for 2 seconds
      setSubmittedMessage(true);
      setTimeout(() => setSubmittedMessage(false), 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      <p>Username: {username}</p>

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <p>Email: {email}</p>

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      <p>Password: {password}</p>

      <button type="submit">Submit</button>

      {submittedMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>Submitted!</p>
      )}
    </form>
  );
}

export default RegistrationForm;
