import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { AppContext } from "./context/AppProvider";

const App = () => {
  const { user } = useContext(AppContext);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
      <Routes>
        <Route
          path="/"
          element={<Home showLogin={showLogin} setShowLogin={setShowLogin} />}
        />
        <Route
          path="/course"
          element={user ? <Course /> : <Navigate to="/signup" />}
        />
        <Route
          path="/signup"
          element={<SignUp showLogin={showLogin} setShowLogin={setShowLogin} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
