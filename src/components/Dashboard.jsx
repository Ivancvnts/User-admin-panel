import { Routes, Route } from "react-router-dom";
import { UsersContext } from "../contexts/UsersContext.js";
import { useState } from "react";
import { usersArr } from "../data/user.js";

import Sidebar from "./Sidebar";
import Users from "./Users";
import Stats from "./Stats/Stats.jsx";
import Settings from "./Settings";

function Dashboard() {
  const [users, setUsers] = useState(usersArr);
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard__content">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/estadisticas" element={<Stats />} />
            <Route path="/configuracion" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </UsersContext.Provider>
  );
}

export default Dashboard;
