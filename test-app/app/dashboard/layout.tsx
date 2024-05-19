const layout = ({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) => {
  return (
    <div className=" h-[calc(100vh-50px)] items-center w-auto bg-amber-50 flex">
      <div className="w-[595px] bg-slate-600 items-center text-center ml-auto mr-auto p-10">
        {children}
        {details}
      </div>
    </div>
  );
};

export default layout;
