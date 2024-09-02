import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import { Table } from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { assignmentsData, role } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Class", accessor: "class" },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  { header: "Actions", accessor: "action" },
];

const AssignmentsListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item?.teacher}</td>
      <td className="hidden md:table-cell">{item?.dueDate}</td>
      <td className="flex items-center gap-2">
        {/* <Link href={`/list/assignments/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
            <Image
              src={"/edit.png"}
              alt=""
              width={16}
              height={16}
              className="object-cover"
            />
          </button>
        </Link> */}
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
          //   <Image src={"/delete.png"} alt="" width={16} height={16} />
          // </button>
          <>
            <FormModal table="assignment" data={item} requestType="update" />
            <FormModal table="assignment" id={item.id} requestType="delete" />
          </>
        )}
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0 h-screen">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Assignments</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 bg-lamaYellow flex items-center justify-center rounded-full">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 bg-lamaYellow flex items-center justify-center rounded-full">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 bg-lamaYellow flex items-center justify-center rounded-full">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="assignment" requestType="create" />
            )}
          </div>
        </div>
      </div>
      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
