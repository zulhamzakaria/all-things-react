const person = "Toni";

function displayMessage(person) {
  return `${person} Zambroni`;
}

function Hello(prop) {
  return (
    <>
      {/* <h1>Hello from {displayMessage(person)}</h1> */}
      <h1>
        {prop.message} {prop.name}
      </h1>
    </>
  );
}

export default Hello;
