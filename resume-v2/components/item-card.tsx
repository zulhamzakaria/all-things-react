const ItemCard = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    display: "flex",
  };

  return <div style={CardStyle}>{children}</div>;
};

export default ItemCard;
