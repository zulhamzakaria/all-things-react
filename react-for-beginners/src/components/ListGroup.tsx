export default ListGroup;

function ListGroup() {
  const items = ["new york", "san francisco"];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* convert items to a different type */}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
