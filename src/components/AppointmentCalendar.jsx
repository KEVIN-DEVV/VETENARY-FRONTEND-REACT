import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentCalendar = ({ selectedDate, setSelectedDate }) => {

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="appointment-calendar">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        className="date-picker"
      />
      {selectedDate && (
        <p className="selected-date">
          Selected Date: {moment(selectedDate).format("DD/MM/YYYY")}
        </p>
      )}
    </div>
  );
};

export default AppointmentCalendar;
