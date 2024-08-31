import TableSearch from "@/app/components/TableSearch";
import Image from "next/image";
import React from "react";

const TeacherPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 h-screen">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 bg-lamaYellow flex items-center justify-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 bg-lamaYellow flex items-center justify-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 bg-lamaYellow flex items-center justify-center rounded-full">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* list */}
      <div></div>
      {/* pagination */}
      <div></div>
    </div>
  );
};

export default TeacherPage;
