"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  return (
    <div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            className="bg-white text-red-900"
            views={["day", "month"]}
            openTo="month"
            monthsPerRow={3}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calendar;
