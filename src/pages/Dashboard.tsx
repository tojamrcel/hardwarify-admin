import NumStatsBox from "../features/dashboard/NumStatsBox";
import useLastOrdersStats from "../features/dashboard/useLastOrdersStats";
import useStats from "../features/dashboard/useStats";
import Spinner from "../ui/Spinner";
import Title from "../ui/Title";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Dashboard() {
  const { stats, isLoading, error } = useStats();
  const {
    lastOrdersStats,
    error: lastOrdersError,
    isLoading: isLoadingLastOrders,
  } = useLastOrdersStats();

  if (isLoading)
    return (
      <div className="flex h-screen max-h-full w-screen max-w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (error || lastOrdersError || !stats || !lastOrdersStats)
    throw new Error("Couldn't fetch stats");

  const { numOrders, toBeShipped, ordersToday } = stats;
  const { revenueData, ordersData } = lastOrdersStats;

  return (
    <div className="flex flex-col gap-4 xl:gap-6">
      <Title>Dashboard</Title>
      <div className="grid gap-4 xl:grid-cols-3 xl:gap-16">
        <NumStatsBox number={ordersToday} color="green">
          ORDERS IN LAST 24H
        </NumStatsBox>
        <NumStatsBox number={toBeShipped} color="yellow">
          ORDERS WAITING TO BE SHIPPED
        </NumStatsBox>
        <NumStatsBox number={numOrders} color="red">
          ALL ORDERS
        </NumStatsBox>
      </div>
      <div className="grid gap-4 xl:grid-cols-2 xl:gap-16">
        <div className="flex h-96 w-full flex-col items-center justify-center rounded-md bg-stone-100 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 w-full px-8 text-left text-xl font-semibold text-gray-600 dark:text-stone-300">
            Orders in last 7 days
          </h2>
          {isLoadingLastOrders ? (
            <Spinner />
          ) : (
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
          )}
        </div>
        <div className="flex h-96 w-full flex-col items-center justify-center rounded-md bg-stone-100 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 w-full px-8 text-left text-xl font-semibold text-gray-600 dark:text-stone-300">
            Revenue in last 7 days
          </h2>
          {isLoadingLastOrders ? (
            <Spinner />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
