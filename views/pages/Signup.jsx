// import React from "react";
// import "../../css/signup.css"; // Import the external CSS

// const Signup = () => {
//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form>
//         <div className="input-group">
//           <label>Name</label>
//           <input type="text" placeholder="Enter your name" />
//         </div>
//         <div className="input-group">
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" />
//         </div>
//         <div className="input-group">
//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" />
//         </div>
//         <button className="signup-btn">Sign Up</button>
//       </form>
//       <p className="login-text">
//         Already have an account? <a href="/login">Login</a>
//       </p>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import "../../css/auth.css"; // Using the same CSS

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Your Logo</h2>
        <h3>Sign Up</h3>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button className="auth-btn">Sign Up</button>
        </form>
        <div className="social-login">
          <p>or sign up with</p>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
          </div>
        </div>
        <p className="switch-auth">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
