interface TableProps {
  header: string;
  accessor: string;
  className?: string;
}

export const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: TableProps[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => {
            return <th key={col.accessor}>{col.header}</th>;
          })}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};
