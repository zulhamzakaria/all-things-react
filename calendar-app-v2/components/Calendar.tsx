"use client";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers";

const Calendar = () => {
  return (
    <div>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DateCalendar
            className="bg-white text-red-900"
            views={["day"]}
            fixedWeekNumber={10}
          /> */}
          <DatePicker
            className="text-white"
            views={["day"]}
            fixedWeekNumber={10}
            showDaysOutsideCurrentMonth
            sx={{ width: 600, height: 400 }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default Calendar;
