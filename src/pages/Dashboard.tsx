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
          ORDERS WAITING BE SHIPPED
        </NumStatsBox>
        <NumStatsBox number={48} color="red">
          ALL ORDERS
        </NumStatsBox>
      </div>
    </div>
  );
}

export default Dashboard;
