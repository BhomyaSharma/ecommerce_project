import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
        navigate("/"); // Redirect to home on success
      } else {
        alert("Login failed: " + data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "calc(120vh - 150px)", // Adjust for header/footer
        backgroundImage: `url('https://i.pinimg.com/736x/2d/4e/65/2d4e659ccdb7ecf1e884be2134557a8f.jpg')`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
      }}
    >
      {/* Left Illustration Section */}
      <div
        style={{
          flex: "1",
          // background: "#f0f0f0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/e8/5f/86/e85f86122b96cb56061cdae24a1ddeaa.jpg" // Replace with your illustration URL
          // alt="Shopping Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#7a5d4d"
            viewBox="0 0 24 24"
            style={{ marginRight: "10px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              // d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              color: "#7a5d4d",
            }}
          >
            
          </span>
        </div>
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
          // background: "rgba(255, 228, 196, 0.9)", // Semi-transparent overlay to ensure readability
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
          Let's You Sign In!
        </h2>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "300px" }}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
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
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #7a5d4d")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
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
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 0 5px #7a5d4d")}
              onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
          <button
            type="submit"
            style={{
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
            }}
            onMouseEnter={(e) => (e.target.style.background = "#5d4037")}
            onMouseLeave={(e) => (e.target.style.background = "#7a5d4d")}
          >
            Get Started
          </button>
        </form>
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
            to="/signup"
            style={{
              color: "#7a5d4d",
              textDecoration: "none",
              marginRight: "20px",
            }}
          >
            Create Account
          </Link>
          <a href="#" style={{ color: "#7a5d4d", textDecoration: "none" }}>
            Need Help?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;