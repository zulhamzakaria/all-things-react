"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex flex-col">
      <div>
        {selectedDate && (
          <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
        )}
      </div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="bg-white text-red-900"
            showDaysOutsideCurrentMonth
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calendar;
