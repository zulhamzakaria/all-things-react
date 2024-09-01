"use client";
import Image from "next/image";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 95, fill: "c3ebfa" },
  { name: "Group B", value: 5, fill: "#fae27c" },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80">
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-semibold  ">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PerformanceChart;
