import NumStatsBox from "../features/dashboard/NumStatsBox";

function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-gray-600">Dashboard</h1>
      <div className="grid grid-cols-3 gap-16">
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
      <div className="grid grid-cols-2 gap-16">
        <div className="h-96 rounded-md bg-stone-100 shadow-md"></div>
        <div className="h-96 w-full justify-self-end rounded-md bg-stone-100 shadow-md"></div>
      </div>
      <div className="grid grid-cols-2 gap-16">
        <div className="h-96 rounded-md bg-stone-100 shadow-md"></div>
        <div className="h-96 w-full justify-self-end rounded-md bg-stone-100 shadow-md"></div>
      </div>
    </div>
  );
}

export default Dashboard;
