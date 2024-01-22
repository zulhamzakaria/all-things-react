"use client";

import { useState } from "react";

const addnewuser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addNewUserHandler = async () => {
    const reqBody = { name: name, age: age, email: email };
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const data = await response.json();

    if (response.ok) {
      alert("user added");
    } else {
      alert("adding user failed");
    }
  };

  return (
    <div className="bg-blue-950 h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Please enter your name"
          className="text-black h-8 mb-1"
        />
        <br />
        <input
          type="number"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Please enter your age"
          className="text-black  h-8 mb-1"
        />
        <br />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Please enter your email"
          className="text-black  h-8 "
        />
        <br />
        <button
          onClick={addNewUserHandler}
          className="mt-5 border px-24 py-1 bg-black"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default addnewuser;
