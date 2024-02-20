"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="col-span-8">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: "prev.next today",
              center: "title",
              right: "resourceTimelineWook, dayGridMonth, timeGridWeek",
            }}
            events={{}}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            // dateClick={{}}
            // drop={}
            // eventClick={}
          />
        </div>
        <div
          id="draggable-element"
          className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50"
        >
          <h1 className="font-bold text-lg text-center">Drag Event</h1>
          {events.map((event) => (
            <div
              className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white"
              title={event.title}
              key={event.id}
            >
              {event.title}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
