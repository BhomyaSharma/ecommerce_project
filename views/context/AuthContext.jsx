// import React, { createContext, useState, useEffect } from "react";

// // Create Context
// export const AuthContext = createContext();

// // Auth Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);

//   // Load user and token from localStorage on mount
//   useEffect(() => {
//     const storedUserName = localStorage.getItem("userName");
//     const storedToken = localStorage.getItem("token");
  
//     if (storedUserName && storedToken) {
//       setUser({ name: storedUserName, token: storedToken }); // include token here too
//       setToken(storedToken);
//     }
//   }, []);
  

//   // Login function
//   const login = (userData) => {
//     setUser(userData);
//     setToken(userData.token);
//     localStorage.setItem("userName", userData.name);
//     localStorage.setItem("token", userData.token);
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem("userName");
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from "react";

// Create Context
export const AuthContext = createContext();

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load user and token from localStorage on mount
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedToken = localStorage.getItem("token");

    // Only set user if both userName and token are available in localStorage
    if (storedUserName && storedToken) {
      setUser({ name: storedUserName, token: storedToken });
      setToken(storedToken);
    }
  }, []); // Empty dependency array, runs only once when the component mounts

  // Login function
  const login = (userData) => {
    setUser(userData);
    setToken(userData.token);
    localStorage.setItem("userName", userData.name);
    localStorage.setItem("token", userData.token);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
