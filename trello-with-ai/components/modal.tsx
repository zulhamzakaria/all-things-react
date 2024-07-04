"use client";
import { useModalStore } from "@/store/modal-store";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);
  const { isOpen, closeModal } = useModalStore();
  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog as="form" className="relative z-10" onClose={closeModal}>
          {/* Backdrop */}
          <TransitionChild>
            <div
              className="fixed inset-0 bg-black/30 transition duration-300 data-[closed]:opacity-0"
              onClick={() => setOpen(false)}
            />
          </TransitionChild>
          {/* Slide-in sidebar */}
          <TransitionChild>
            <div className="fixed inset-y-0 left-0 w-64 bg-white transition duration-300 data-[closed]:-translate-x-full">
              {/* ... */}
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
