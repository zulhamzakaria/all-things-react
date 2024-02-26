"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    alert(date);
    setSelectedDate(date);
  };
  return (
    <div className="flex flex-col">
      <div>
        {selectedDate ? (
          <p>Selected Date: {new Date(selectedDate).toLocaleDateString()}</p>
        ) : (
          "huh"
        )}
      </div>
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
  );
};

export default Calendar;
