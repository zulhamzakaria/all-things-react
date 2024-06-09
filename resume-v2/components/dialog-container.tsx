import React from "react";
import { Button } from "./ui/button";

interface DialogContainerProps {
  children: [
    React.ReactElement<typeof Button>,
    React.ReactElement<React.ComponentType<any>>
  ];
}

const DialogContainer = ({ children }: DialogContainerProps) => {
  return <div></div>;
};

export default DialogContainer;
