import Sidebar from "./Sidebar";
import Users from "./Users";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar></Sidebar>
      <div className="dashboard__content">
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
