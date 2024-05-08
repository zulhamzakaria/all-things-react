import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  const numArray = [11, 2, 3, 4];
  const Person = {
    name: "kukumas",
    message: "Hello from ",
    seatNumbers: numArray,
  };
  return (
    <>
      <div className=" App">
        App
        {/* <Hello person={Person} /> */}
        {/* <Fruits /> */}
        {/* <ConditionalComponent /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
      </div>
    </>
  );
}

export default App;
