import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = ["Apple", "Orange", "Pear"];
  const fruitsObject = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Lemon" },
  ];
  return (
    <div>
      <ul>
        {fruitsObject.map((fruit) => (
          <>
            <li key={fruit.id}>{fruit.name}</li>
            <Fruit key={fruit.id} id={fruit.id} name={fruit.name} />
          </>
        ))}
      </ul>
    </div>
  );
}
