import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface OrdersChartProps {
  ordersData: {
    day: string;
    orders: number;
  }[];
}

function OrdersChart({ ordersData }: OrdersChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={ordersData}
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
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          name="Orders"
          type="monotone"
          dataKey="orders"
          stroke="#b91c1c"
          fillOpacity={1}
          fill="url(#colorOrders)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default OrdersChart;
