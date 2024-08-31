"use client";

import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default EventCalendar;
