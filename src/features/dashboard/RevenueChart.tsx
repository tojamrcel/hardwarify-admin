import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface RevenueChartProps {
  revenueData: {
    day: string;
    revenue: number;
  }[];
}

function RevenueChart({ revenueData }: RevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={revenueData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#b91c1c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#b91c1c" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Area
          name="Revenue"
          type="monotone"
          dataKey="revenue"
          stroke="#b91c1c"
          fillOpacity={1}
          unit="$"
          fill="url(#colorOrders)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;
