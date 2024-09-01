interface TableProps {
  header: string;
  accessor: string;
  className?: string;
}

export const Table = ({ columns }: { columns: TableProps[] }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => {
            return <th key={col.accessor}>{col.header}</th>;
          })}
        </tr>
      </thead>
    </table>
  );
};
