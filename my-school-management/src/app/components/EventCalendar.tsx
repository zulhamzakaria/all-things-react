"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "12:00 pm - 2:00pm",
    description: "Event for Event 1",
  },
  {
    id: 2,
    title: "Event 2",
    time: "2:00 pm - 6:00pm",
    description: "Event for Event 2",
  },
];

const EventCalendar = () => {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={setValue} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Event(s)</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md odd:border-t-lamaSky even:border-t-lamaPurple border-2 border-t-4 border-gray-100"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
