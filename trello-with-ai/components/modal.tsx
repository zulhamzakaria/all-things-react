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
import { FormEvent, useRef } from "react";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/solid";

function Modal() {
  const { isOpen, closeModal } = useModalStore();
  const {
    newTaskInput,
    setNewTaskInput,
    image,
    setImage,
    addTask,
    newTaskType,
  } = useBoardStore();
  const imagePickerRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskInput) return;

    addTask(newTaskInput, newTaskType, image);

    setImage(null);
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="form"
          onSubmit={handleSubmit}
          className="relative z-10"
          onClose={closeModal}
        >
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
                  <button
                    type="button"
                    onClick={() => {
                      imagePickerRef.current?.click();
                    }}
                    className="w-full border border-gray-300 rounded-md outline-none p-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <PhotoIcon className="h-6 w-6 mr-2 inline-block" />
                    Upload Image
                  </button>

                  {image && (
                    <Image
                      alt="uploaded-image"
                      width={200}
                      height={200}
                      className="w-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
                      src={URL.createObjectURL(image)}
                      onClick={() => {
                        setImage(null);
                      }}
                    />
                  )}

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

                <div>
                  <button type="submit" disabled={!newTaskInput}>
                    Add task
                  </button>
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
