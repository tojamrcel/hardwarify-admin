import ChartBox from "../features/dashboard/ChartBox";
import NumStatsBox from "../features/dashboard/NumStatsBox";
import OrdersChart from "../features/dashboard/OrdersChart";
import RevenueChart from "../features/dashboard/RevenueChart";
import useLastOrdersStats from "../features/dashboard/useLastOrdersStats";
import useStats from "../features/dashboard/useStats";
import Spinner from "../ui/Spinner";
import Title from "../ui/Title";

function Dashboard() {
  const { stats, isLoading, error } = useStats();
  const {
    lastOrdersStats,
    error: lastOrdersError,
    isLoading: isLoadingLastOrders,
  } = useLastOrdersStats();

  if (isLoading || isLoadingLastOrders)
    return (
      <div className="flex h-screen max-h-full w-screen max-w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (error || lastOrdersError || !stats || !lastOrdersStats)
    return (
      <div className="flex h-1/2 items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
        <h2 className="text-3xl">
          There was an error loading the data. Try again later.
        </h2>
      </div>
    );

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
        <ChartBox>
          <h2 className="mb-2 w-full px-8 text-left text-xl font-semibold text-gray-600 dark:text-gray-300">
            Orders in last 7 days
          </h2>
          <OrdersChart ordersData={ordersData} />
        </ChartBox>
        <div className="flex h-96 w-full flex-col items-center justify-center rounded-md bg-stone-100 shadow-md dark:bg-gray-800">
          <h2 className="mb-2 w-full px-8 text-left text-xl font-semibold text-gray-600 dark:text-gray-300">
            Revenue in last 7 days
          </h2>
          <RevenueChart revenueData={revenueData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
