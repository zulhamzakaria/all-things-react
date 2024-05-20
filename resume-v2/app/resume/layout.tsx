import React from "react";

const ResumeLayout = ({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) => {
  return (
    <div>
      <p>ResumeLayout</p>
      {children}
      {details}
    </div>
  );
};

export default ResumeLayout;
