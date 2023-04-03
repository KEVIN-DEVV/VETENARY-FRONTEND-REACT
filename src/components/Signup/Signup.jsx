import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const input = event.target;
    if (input.value) {
      input.classList.add("has-value");
    } else {
      input.classList.remove("has-value");
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phoneNumber,
          password_confirmation: passwordConfirmation,
          password,
        }),
      });

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="cover">
      <h1>Sign Up</h1>
      <form onSubmit={handleRegister}>
        <div className="names">
          <div className="inputBox">
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                handleInputChange(event);
              }}
              required
            />
            <span>Name</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
                handleInputChange(event);
              }}
              required
            />
            <span>Phone Number</span>
          </div>
        </div>
        <div className="inputBox">
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              handleInputChange(event);
            }}
            required
          />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              handleInputChange(event);
            }}
            required
          />
          <span>Password</span>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(event) => {
              setPasswordConfirmation(event.target.value);
              handleInputChange(event);
            }}
            required
          />
          <span>Confirm Password</span>
        </div>
        <button type="submit" className="signup-btn">
          Sign Up
        </button>
        <div>{error}</div>
      </form>
      <p>
        Already have an account?{" "}
        <span className="reghere">
          <Link to="/login">Log In</Link>
        </span>
      </p>
    </div>
  );
}

export default Signup;
