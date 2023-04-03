import React, { useState } from "react";
import "./index.css";
import AppointmentCalendar from "./AppointmentCalendar";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AppointmentForm({user}) {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const {id}=useParams()
  console.log(id)
  const notify = () => toast("Your appointment has been Received!");
  const navigation =useNavigate()
    const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Build the appointment data object
    const appointmentData = {
      type_of_appointment: selectedService,
      date_time: selectedDate,
      user_id: user.id,
      pet_id: id
    };
    // Send the appointment data to the server
    fetch("/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then(() => {
            notify()
            setTimeout(()=>{
                navigation('/')
            },2000)

          });
        } else {
          throw new Error("Failed to create appointment");
        }
      })
      .then((data) => {
        console.log("Appointment created successfully:", data);
        // Reset the form after successful submission
        setSelectedService("");
        setSelectedDate("");
      })
      .catch((error) => {
        console.error("Error creating appointment:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(e);
  };

  return (
    <section>
      <ToastContainer className="toast"/>
    <h1 className="a1">Welcome {user.name}</h1>
    <form onSubmit={handleSubmit}>
    
      <br />
      <label>
        Service:
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
          <option value="">--Please choose a service--</option>
          <option value="Dental Care">Dental Care</option>
          <option value="Checup">Checkup</option>
          <option value="Vaccination">Vaccination</option>
        </select>
      </label>
      <br />
      <label>
        Date:
        <AppointmentCalendar setSelectedDate={setSelectedDate} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}

export default AppointmentForm;
