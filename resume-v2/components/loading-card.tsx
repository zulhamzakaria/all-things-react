const LoadingCard = ({ children }: { children: React.ReactNode }) => {
  const CardStyle = {
    padding: "61px",
    // margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return <div style={CardStyle}>{children}</div>;
};

export default LoadingCard;
