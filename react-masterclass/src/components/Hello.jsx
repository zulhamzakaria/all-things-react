const person = "Toni";

function displayMessage(person) {
  return `${person} Zambroni`;
}

function Hello() {
  return <h1>Hello from {displayMessage(person)}</h1>;
}

export default Hello;
