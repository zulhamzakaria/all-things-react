import React from "react";

const ResumeLayout = ({
  children,
  education,
}: {
  children: React.ReactNode;
  education: React.ReactNode;
}) => {
  return (
    <div>
      <p>ResumeLayout</p>
      {children}
      {education}
    </div>
  );
};

export default ResumeLayout;
