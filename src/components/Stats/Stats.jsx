import { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext.js";
import StatsCard from "./StatsCard";
import PieChartCard from "./PieChartCard";

import { UsersRound } from "lucide-react";
import { UserRoundPlus } from "lucide-react";
import { UserRoundX } from "lucide-react";
import { CircleStar } from "lucide-react";

const ROLECOLORS = ["#6d28d9", "#1d4ed8", "#374151"];
const ACTIVECOLORS = ["#065f46", "#8e5311"];

function Stats() {
  const { users } = useContext(UsersContext);
  const totalUsers = users.length;
  const inactiveUsers = users.filter((user) => user.active === false).length;
  const uniqueRoles = new Set(users.map((user) => user.role));
  const totalRoles = uniqueRoles.size;
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  const newUsers = users.filter(
    (user) => new Date(user.registrationDate) > oneWeekAgo,
  ).length;
  const usersByRole = [...uniqueRoles].map((role) => ({
    name: role,
    value: users.filter((user) => user.role === role).length,
  }));
  const usersByState = [true, false].map((state) => ({
    name: state ? "Activo" : "Inactivo",
    value: users.filter((user) => user.active === state).length,
  }));
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-header__title">Estadisticas</h1>
          <p className="page-header__description">
            Resumen general de usuarios y actividad
          </p>
        </div>
      </div>
      <div className="stats">
        <div className="stats__cards-container">
          <StatsCard
            icon={<UsersRound />}
            title={"Usuarios totales"}
            data={totalUsers}
            color={"purple"}
          ></StatsCard>
          <StatsCard
            icon={<UserRoundPlus />}
            title={"Usuarios nuevos"}
            data={newUsers}
            color={"green"}
          ></StatsCard>
          <StatsCard
            icon={<UserRoundX />}
            title={"Usuarios inactivos"}
            data={inactiveUsers}
            color={"yellow"}
          ></StatsCard>
          <StatsCard
            icon={<CircleStar size="36" strokeWidth="1.5" />}
            title={"Roles diferentes"}
            data={totalRoles}
            color={"blue"}
          ></StatsCard>
        </div>
        <div className="stats__charts-container">
          <PieChartCard
            data={usersByRole}
            title="Usuarios por rol"
            colors={ROLECOLORS}
            totalUsers={totalUsers}
          ></PieChartCard>
          <PieChartCard
            data={usersByState}
            title="Usuarios activos"
            colors={ACTIVECOLORS}
            totalUsers={totalUsers}
          ></PieChartCard>
        </div>
      </div>
    </>
  );
}

export default Stats;
