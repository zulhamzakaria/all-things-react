const ItemCard = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    margin: "10px",
    display: "flex",
  };

  return <div style={CardStyle}>{children}</div>;
};

export default ItemCard;
