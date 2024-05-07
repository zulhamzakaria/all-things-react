export default function Fruits() {
  const fruits = ["Apple", "Orange", "Pear"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
