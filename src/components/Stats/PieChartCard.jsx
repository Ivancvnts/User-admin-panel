import { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext.js";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function PieChartCard({ data, title, colors, totalUsers, uniqueRoles }) {
  return (
    <div className="pie-char-card">
      <p className="pie-char-card__title">{title}</p>
      <div className="pie-char-card__content">
        <div className="pie-char-card__container">
          <PieChart width={270} height={320}>
            <Pie data={data} innerRadius={80} outerRadius={120} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="pie-char-card__total">
            <p className="pie-char-card__stat">{totalUsers}</p>
            <p className="pie-char-card__description">Total</p>
          </div>
        </div>
        <ul className="pie-char-card__role-list">
          {data.map((role, index) => (
            <li key={role.name}>
              <span style={{ background: colors[index] }}></span>
              {`${role.name}:`} {role.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PieChartCard;
