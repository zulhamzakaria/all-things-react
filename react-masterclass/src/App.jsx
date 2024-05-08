import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Inline from "./components/Inline";
import InlineComponent from "./components/Inline";
import Message from "./components/Message";
import Outline from "./components/Outline";
import ToDo from "./components/Todo";
import "./app.css";

function App() {
  const numArray = [11, 2, 3, 4];
  const Person = {
    name: "kukumas",
    message: "Hello from ",
    seatNumbers: numArray,
  };
  return (
    <>
      <div className="app">
        {/* <Hello person={Person} /> */}
        {/* <Fruits /> */}
        {/* <ConditionalComponent /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Form /> */}
        {/* <ToDo /> */}
        {/* <Inline />
        <Outline /> */}
      </div>
    </>
  );
}

export default App;
