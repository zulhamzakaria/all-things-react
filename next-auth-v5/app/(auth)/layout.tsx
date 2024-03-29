import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-red-500 text-white">
        this is the navbar w/o auth prefix.
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
