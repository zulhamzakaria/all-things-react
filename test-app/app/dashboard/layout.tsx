const layout = ({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      {details}
    </div>
  );
};

export default layout;
