import NumStatsBox from "../features/dashboard/NumStatsBox";
import Title from "../ui/Title";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 xl:gap-6">
      <Title>Dashboard</Title>
      <div className="grid gap-4 xl:grid-cols-3 xl:gap-16">
        <NumStatsBox number={3} color="green">
          NEW ORDERS TODAY
        </NumStatsBox>
        <NumStatsBox number={7} color="yellow">
          ORDERS WAITING TO BE SHIPPED
        </NumStatsBox>
        <NumStatsBox number={48} color="red">
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
