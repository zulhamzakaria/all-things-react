import React from "react";

const page = () => {
  return (
    <div className="flex-col flex h-screen items-center justify-center">
      <p>{process.env.NODE_ENV}</p>
      <p>{process.env.MONGO_URI}</p>
      <p>{process.env.JWT_SECRET}</p>
    </div>
  );
};

export default page;
