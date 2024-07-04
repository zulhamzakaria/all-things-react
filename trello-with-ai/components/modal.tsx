"use client";
import { useBoardStore } from "@/store/board-store";
import { useModalStore } from "@/store/modal-store";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import TaskTypeRadioGroup from "./task-type-radio-group";
import { useRef } from "react";

function Modal() {
  const { isOpen, closeModal } = useModalStore();
  const { newTaskInput, setNewTaskInput } = useBoardStore();
  const imagePickerRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="form" className="relative z-10" onClose={closeModal}>
          {/* Backdrop */}
          <TransitionChild>
            <div
              className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
              onClick={closeModal}
            />
          </TransitionChild>
          {/* Slide-in sidebar */}
          <TransitionChild>
            <div className="fixed inset-y-0 left-0 w-64 bg-white transition duration-300 data-[closed]:-translate-x-full">
              <DialogPanel>
                <DialogTitle as="h3">Add a task</DialogTitle>

                <div>
                  <input
                    type="text"
                    value={newTaskInput}
                    onChange={(e) => setNewTaskInput(e.target.value)}
                    placeholder="Add a task"
                    className="w-full border border-gray-300 rounded-md outline-none p-5"
                  />
                </div>

                <TaskTypeRadioGroup />

                <div>
                  <input
                    type="file"
                    ref={imagePickerRef}
                    hidden
                    onChange={(e) => {
                      if (!e.target.files![0].type.startsWith("image/")) return;
                      setImage(e.target.files![0]);
                    }}
                  />
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
