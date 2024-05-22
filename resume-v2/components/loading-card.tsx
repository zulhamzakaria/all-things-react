import { Loader2 } from "lucide-react";

const LoadingCard = () => {
  const CardStyle = {
    padding: "60px",
    boxShadow: "0 1px 8px rgba(0,0,0,0.1)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  };

  return (
    <div style={CardStyle}>
      <Loader2 className="h-6 w-6 text-muted-foreground animate-spin" />
    </div>
  );
};

export default LoadingCard;
