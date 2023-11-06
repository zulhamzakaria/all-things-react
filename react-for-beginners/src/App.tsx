import ListGroup from "./components/ListGroup";

function App() {
  const items = ["new york", "san francisco"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
