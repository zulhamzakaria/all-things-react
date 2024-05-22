const ItemCard = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    margin: "5px",
    display: "flex",
  };

  return <div style={CardStyle}>{children}</div>;
};

export default ItemCard;
