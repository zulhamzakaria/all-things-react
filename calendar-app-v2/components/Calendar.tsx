"use client";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Calendar = () => {
  return (
    <div>
      <h1>Calendar Commponent</h1>
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calendar;
