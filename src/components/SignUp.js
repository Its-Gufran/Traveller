import React, { useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to submit form data
    setSubmitted(true);
  };

  if (submitted) {
    return null; // Return null to hide the component after submitting the form
  }

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign Up" />
        </div>
      </form>
      <p className="login-link">
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
}

export default SignUp;
