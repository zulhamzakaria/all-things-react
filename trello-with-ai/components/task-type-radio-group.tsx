"use client";

import { useBoardStore } from "@/store/board-store";
import { Radio, RadioGroup } from "@headlessui/react";

const types = [
  {
    id: "todo",
    name: "Todo",
    description: "A new task to be completed",
    color: "bg-red-500",
  },
  {
    id: "in-progress",
    name: "In Progress",
    description: "A task that is currently being worked on",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "A task that has been completed",
    color: "bg-green-500",
  },
];

const TaskTypeRadioGroup = () => {
  const { newTaskType, setNewTaskType } = useBoardStore();

  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-d">
        <RadioGroup value={newTaskType} onChange={(e) => setNewTaskType(e)}>
          <div className="space-y-2">
            {types.map((type) => (
              <Radio
                key={type.id}
                value={type.id}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }${
                    checked
                      ? `${type.color} bg-opacity-75 text-white`
                      : "bg-white"
                  } relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              ></Radio>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default TaskTypeRadioGroup;
