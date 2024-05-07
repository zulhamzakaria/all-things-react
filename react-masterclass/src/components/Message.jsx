export default function Message() {
  return (
    <div>
      <button onClick={handleClick2}>Click me!</button>
    </div>
  );
}

function handleClick() {
  console.log("button clicked");
}

const handleClick2 = () => {
  console.log("arrow function");
};
