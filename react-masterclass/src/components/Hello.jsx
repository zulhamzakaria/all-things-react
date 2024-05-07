const person = "Toni";

function displayMessage(person) {
  return `${person} Zambroni`;
}

function Hello(prop) {
  const { name, message } = prop;
  return (
    <>
      {/* <h1>Hello from {displayMessage(person)}</h1> */}
      <h1>
        {message} {name}
      </h1>
    </>
  );
}

export default Hello;
