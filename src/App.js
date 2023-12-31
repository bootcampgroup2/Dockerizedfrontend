import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import RegistrationForm from "./components/Register";

import Home from "../src/components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Inbox from "./components/Inbox";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegistrationForm/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </Router>
  );
}

export default App;
