const layout = ({
  children,
  details,
}: {
  children: React.ReactNode;
  details: React.ReactNode;
}) => {
  return (
    <div className=" h-screen w-auto bg-amber-50 flex justify-center">
      <div className="w-[595px] h-[calc(100vh-50px)] bg-slate-600 items-center text-center flex-col mt-[50px]">
        {children}
        {details}
      </div>
    </div>
  );
};

export default layout;
