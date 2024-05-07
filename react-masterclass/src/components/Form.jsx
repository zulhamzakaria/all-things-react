import { useState } from "react";

export default function Form() {
  const [person, setPerson] = useState({ firstName: "", age: 0 });
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
          type="text"
          value={person.firstName}
        />
        <input
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          type="text"
          value={person.age}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <div />
    </div>
  );
}
