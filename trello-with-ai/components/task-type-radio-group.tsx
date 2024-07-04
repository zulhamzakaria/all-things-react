"use client";

import { useBoardStore } from "@/store/board-store";

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

    const {newTaskType, setNewTaskType} = useBoardStore()

  return <div>TaskTypeRadioGroup</div>;
};

export default TaskTypeRadioGroup;
