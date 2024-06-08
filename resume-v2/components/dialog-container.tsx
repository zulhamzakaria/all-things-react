import React, { ReactNode } from "react";

interface DialogContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function DialogContainer({
  isOpen,
  onClose,
  children,
}: DialogContainerProps) {
  if (!isOpen) return null;
  return (
    <div id="dialog-backdrop">
      <div id="dialog-content">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
}
