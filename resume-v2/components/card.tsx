const Card = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={CardStyle}>{children}</div>;
};

export default Card;
