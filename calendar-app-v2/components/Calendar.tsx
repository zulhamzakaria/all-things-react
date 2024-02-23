"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import  ContributionCalendar  from "react-github-calendar";

const Calendar = () => {
  return (
    <div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="bg-white text-red-900"
            views={["day"]}
            fixedWeekNumber={10}
          />
        </LocalizationProvider>
      </div>
      <div>
        <ContributionCalendar />
      </div>
    </div>
  );
};

export default Calendar;
