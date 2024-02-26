"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import ToDo from "./ToDo";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="bg-red-900">
        {selectedDate && (
          <p style={{ textAlign: "center" }}>
            Selected Date: {new Date(selectedDate).toLocaleDateString()}
          </p>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* {selectedDate && (
          <p>Selected Date: {new Date(selectedDate).toLocaleDateString()}</p>
        )} */}
        <div style={{ flex: 1 }}>
          <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                className="bg-white text-red-900"
                showDaysOutsideCurrentMonth
                onChange={handleDateChange}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ToDo />
        </div>
      </div>
    </>
  );
};

export default Calendar;
