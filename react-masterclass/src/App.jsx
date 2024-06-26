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
import Search from "./components/Search";
import { useState } from "react";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const numArray = [11, 2, 3, 4];
  const Person = {
    name: "kukumas",
    message: "Hello from ",
    seatNumbers: numArray,
  };
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(0);
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
        <Navbar />
        <Search foodData={foodData} setFoodData={setFoodData} />
        <Container>
          <InnerContainer>
            <RecipeDetails foodId={foodId} />
            <FoodList setFoodId={setFoodId} foodData={foodData} />
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}

export default App;
