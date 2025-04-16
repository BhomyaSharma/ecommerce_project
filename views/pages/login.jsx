import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // 🔑 Get login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form submission and page reload
  
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      console.log("Parsed Data:", data); // Debug: Check what backend sends
  
      if (response.ok && data.token) {
        // Construct userData with a fallback name
        const userData = {
          name: email.split("@")[0], // Use part of email as username
          token: data.token,
        };
  
        // Save user to AuthContext + localStorage
        login(userData);
  
        // Wait for context to update and then navigate
        navigate("/"); // Redirect to homepage
      } else {
        alert("Login failed: " + (data.message || data.error || "Missing user data or token."));
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
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: `url('https://i.pinimg.com/736x/2d/4e/65/2d4e659ccdb7ecf1e884be2134557a8f.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Left Illustration Section */}
      <div
        style={{
          flex: "1",
          maxWidth: "500px",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <img
          src="https://i.pinimg.com/736x/e8/5f/86/e85f86122b96cb56061cdae24a1ddeaa.jpg"
          alt="Shopping Illustration"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "30px",
            objectFit: "cover",
            border: "8px solid rgba(255, 255, 255, 0.7)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>

      {/* Right Form Section */}
      <div
        style={{
          flex: "1",
          maxWidth: "500px",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
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
