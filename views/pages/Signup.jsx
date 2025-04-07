import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // ✅ Email state added
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username, email, password }), // ✅ Include name, email, password
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful:", data);
        navigate("/login");
      } else {
        alert("Signup failed: " + data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "calc(100vh - 150px)",
        background: "#FFE4C4",
        padding: "20px",
      }}
    >
      {/* Left Section */}
      <div
        style={{
          flex: "1",
          background: "#FFE4C4",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img
          src="https://i.pinimg.com/474x/79/eb/19/79eb19f0607b71186736ef6a678a5068.jpg"
          alt="Shopping Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Right Form Section */}
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "48px",
            color: "#7a5d4d",
            marginBottom: "10px",
          }}
        >
          Happy Shopping
        </h1>
        <h2
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "24px",
            color: "#7a5d4d",
            marginBottom: "40px",
          }}
        >
          Let's You Sign Up!
        </h2>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "300px" }}>
          {/* Username */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #7a5d4d")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #7a5d4d")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #7a5d4d")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={inputStyle}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #7a5d4d")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.target.style.background = "#5d4037")}
            onMouseLeave={(e) => (e.target.style.background = "#7a5d4d")}
          >
            Sign Up
          </button>
        </form>

        {/* Bottom Links */}
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontFamily: "'Lora', serif",
            color: "#7a5d4d",
            fontSize: "14px",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "#7a5d4d",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            Already have an account?
          </Link>
          <a href="#" style={{ color: "#7a5d4d", textDecoration: "none" }}>
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

// ✨ Input and Button Styles
const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  fontFamily: "'Lora', serif",
  color: "#7a5d4d",
  background: "#ffebee",
  border: "none",
  borderRadius: "25px",
  outline: "none",
  transition: "box-shadow 0.3s ease",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "16px",
  fontFamily: "'Playfair Display', serif",
  color: "#fff",
  background: "#7a5d4d",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

export default Signup;
