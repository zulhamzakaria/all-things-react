import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] px-2 py-1 ring-gray-300">
      <Image
        className="object-contain"
        src={"/search.png"}
        alt=""
        width={14}
        height={14}
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
