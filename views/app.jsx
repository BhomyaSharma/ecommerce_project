import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login.jsx";
import Signup from "./pages/Signup";
import WomenCategory from "../views/pages/WomenCategory.jsx";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/women-clothing" element={<WomenCategory />} />
            </Routes>
        </Router>
    );
};

export default App;
