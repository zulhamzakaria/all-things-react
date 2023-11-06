import { useState } from "react";

export default ListGroup;

interface IProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: IProps) {
  // hook
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {/* convert items to a different type */}
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
