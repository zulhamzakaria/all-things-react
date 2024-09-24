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

const aggregatedData = (data: any) => {
  const aggregated = data.reduce((acc: any, current: any) => {
    if (acc[current.date]) {
      acc[current.date] += current.revenue;
    } else {
      acc[current.date] = current.revenue;
    }
    return acc;
  }, {});

  return Object.keys(aggregated).map((date) => ({
    date,
    revenue: aggregated[date],
  }));
};

const Chart = ({ data }: ChartProps) => {
  const processedData = aggregatedData(data);
  return (
    <ResponsiveContainer height={400} width="100%">
      <LineChart data={processedData}>
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
