import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginCredentials.email,
        password: loginCredentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("check credentails");
    }
    if (json.success) {
      navigate("/");
    }
  };
  const handleInputChange = (e) => {
    setloginCredentials({ ...loginCredentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={loginCredentials.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={loginCredentials.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
      <Link to="/signup" className="m-3 btn btn-success">
        Register Here
      </Link>
    </div>
  );
}
