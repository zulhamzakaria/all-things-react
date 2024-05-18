const SlotTitle = ({ title }: { title?: string }) => {
  return (
    <div className=" w-full font-bold text-slate-950 border-solid border-b-4 border-red-600 mb-2 ">
      {title?.toLocaleUpperCase()}
    </div>
  );
};

export default SlotTitle;
