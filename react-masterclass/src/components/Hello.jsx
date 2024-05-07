// const person = "Toni";

// function displayMessage(person) {
//   return `${person} Zambroni`;
// }

function Hello(props) {
  //   let { name, message, seatNumbers } = props;

  //   name = "new guy";
  //   prop.name = "jubo"; not allowed
  return (
    <>
      {/* <h1>Hello from {displayMessage(person)}</h1> */}
      <h1>
        {props.person.message} {props.person.name} {props.person.seatNumbers}
      </h1>
    </>
  );
}

export default Hello;
