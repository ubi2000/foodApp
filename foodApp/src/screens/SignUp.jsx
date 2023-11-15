import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid input fields");
    }
  };

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
          
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="geolocation"
            value={credentials.geolocation}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-success">
          Already Registered
        </Link>
      </form>
    </div>
  );
}
