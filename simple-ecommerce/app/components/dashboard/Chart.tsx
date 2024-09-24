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

const Chart = () => {
  return (
    <ResponsiveContainer height={400} width="100%">
      <LineChart>
        <CartesianGrid strokeDasharray={"3 3"}>
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type={"monotone"} stroke="#3b83f6" activeDot={{ r: 8 }} />
        </CartesianGrid>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
