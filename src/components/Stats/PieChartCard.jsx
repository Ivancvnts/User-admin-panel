import { useContext } from "react";
import { UsersContext } from "../../contexts/UsersContext.js";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function PieChartCard({ data, title, colors, totalUsers }) {
  return (
    <div className="pie-chart-card">
      <p className="pie-chart-card__title">{title}</p>
      <div className="pie-chart-card__content">
        <div className="pie-chart-card__container">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="pie-chart-card__total">
            <p className="pie-chart-card__stat">{totalUsers}</p>
            <p className="pie-chart-card__description">Total</p>
          </div>
        </div>
        <ul className="pie-chart-card__role-list">
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
