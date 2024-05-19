const layout = ({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) => {
  return (
    <div className=" h-screen items-center w-auto bg-amber-50 flex">
      <div className="w-[595px] bg-slate-600 items-center text-center">
        {children}
        {details}
      </div>
    </div>
  );
};

export default layout;
