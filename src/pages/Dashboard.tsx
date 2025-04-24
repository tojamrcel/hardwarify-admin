import NumStatsBox from "../features/dashboard/NumStatsBox";
import useStats from "../features/dashboard/useStats";
import Spinner from "../ui/Spinner";
import Title from "../ui/Title";

function Dashboard() {
  const { stats, isLoading, error } = useStats();

  if (isLoading)
    return (
      <div className="flex h-screen max-h-full w-screen max-w-full items-center justify-center">
        <Spinner />
      </div>
    );
  if (error || !stats) throw new Error("Couldn't fetch stats");

  const { numOrders, toBeShipped, ordersToday } = stats;

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
        <div className="h-96 rounded-md bg-stone-100 shadow-md"></div>
        <div className="h-96 w-full justify-self-end rounded-md bg-stone-100 shadow-md"></div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2 xl:gap-16">
        <div className="h-96 rounded-md bg-stone-100 shadow-md"></div>
        <div className="h-96 w-full justify-self-end rounded-md bg-stone-100 shadow-md"></div>
      </div>
    </div>
  );
}

export default Dashboard;
