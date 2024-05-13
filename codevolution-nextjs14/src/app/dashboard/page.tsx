"use client";

import React, { useState } from "react";

const DashboardPage = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      hi, {name}
    </div>
  );
};

export default DashboardPage;
