
// import React from "react";
// import "../../css/auth.css";

// const Login = () => {
//   return (
//     <div className="auth-container">
//       <div className="auth-box">
//         <h2>Your Logo</h2>
//         <h3>Login</h3>
//         <form>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="username@gmail.com" />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" placeholder="Password" />
//           </div>
//           <a href="#" className="forgot-password">Forgot Password?</a>
//           <button className="auth-btn">Sign in</button>
//         </form>
//         <div className="social-login">
//           <p>or continue with</p>
//           <div className="social-icons">
//             <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
//             <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
//             <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
//           </div>
//         </div>
//         <p className="switch-auth">Don't have an account? <a href="/signup">Register for free</a></p>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import "../../css/auth.css"; // Keep your existing CSS

const Login = () => {
  return (
    <div className="auth-container login-bg"> {/* Add "login-bg" class */}
      <div className="auth-box">
        <h2>Your Logo</h2>
        <h3>Login</h3>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="username@gmail.com" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button className="auth-btn">Sign in</button>
        </form>
        <div className="social-login">
          <p>or continue with</p>
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" />
          </div>
        </div>
        <p className="switch-auth">Don't have an account? <a href="/signup">Register for free</a></p>
      </div>
    </div>
  );
};

export default Login;
