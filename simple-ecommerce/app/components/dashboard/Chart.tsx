"use client";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartProps {
  data: {
    date: string;
    revenue: number;
  }[];
}

const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer height={400} width="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type={"monotone"}
          stroke="#3b83f6"
          activeDot={{ r: 8 }}
          dataKey={"revenue"}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
