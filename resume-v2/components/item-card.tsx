const ItemCard = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    display: "flex",
    backgroundColor: "rgba(243, 244, 246, 0.5)",
    padding: "10px 5px 5px 5px",
    borderRadius: "10px",
  };

  return <div style={CardStyle}>{children}</div>;
};

export default ItemCard;
