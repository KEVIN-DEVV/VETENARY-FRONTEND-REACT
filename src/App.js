import React, { useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/index.css";
import Home from "./components/Home";


import Petform from "./components/PetForm";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentCalendar from "./components/AppointmentCalendar";

import SignUp from "./components/Signup/Signup"
import LogIn from "./components/Signup/Login"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer";

function App() {
  const [user, setUser] =useState ({})
  console.log(user)
  useEffect(()=>{
    fetch("/user")
    .then(response => response.json())
    .then (response => {
      console.log(response)
      setUser(response)})
    
  },[]) 
  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup-login" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/appointments/:id" element={<AppointmentForm user={user}/>} />
        <Route exact path="/pet" element={<Petform user={user}/>} />
        <Route
          exact
          path="/calendar"
          element={<AppointmentCalendar />}
        />
        <Route exact path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
