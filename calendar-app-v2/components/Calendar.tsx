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
    <div>
      <div className="bg-red-900" style={{ marginBottom: "10px" }}>
        {selectedDate && (
          <p style={{ textAlign: "center", margin: "0" }}>
            Selected Date: {new Date(selectedDate).toLocaleDateString()}
          </p>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
    </div>
  );
};

export default Calendar;
