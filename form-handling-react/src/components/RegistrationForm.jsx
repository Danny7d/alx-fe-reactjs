import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState(""); // for username
  const [email, setEmail] = useState(""); // for email
  const [password, setPassword] = useState(""); // for password

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
    // reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>

      <label>Username</label>
      <input
        type="text"
        value={username} // controlled
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <p>Username: {username}</p>

      <label>Email</label>
      <input
        type="email"
        value={email} // controlled
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <p>Email: {email}</p>

      <label>Password</label>
      <input
        type="password"
        value={password} // controlled
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <p>Password: {password}</p>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
