import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-sm text-gray-200">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum...</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {"2025-01-09"}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Start Puggling. Click Find a Room to chat with a random stranger, or
            start your own room and invite your friends. Anonymous chat is a
            great way to share what you are not comfortable with sharing in
            real-life (just share it with complete strangers instead!).
            Experiment in the Puggle sandbox, and you will find{" "}
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum...</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {"2025-01-09"}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            I see food, and I eat it. Friends buy you lunch. Best friends eat
            your lunch. If it's true that you are what you eat, I'm a chocolate
            cake. You know what they say…a hamburger a day keeps the doctor
            away. I decided to start my journey of self-improvement but ended up
            at the fridge
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum...</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              {"2025-01-09"}
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1 ">
            When you walk into a room, say, "Well, that went far worse than I
            expected.". 26. Leave someone a text that says, "You have no idea
            what you've done!". 27. "Shush! I can't hear what the voices are
            saying.". 28. Walk into a room where your friend is talking to a
            random male stranger and
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
