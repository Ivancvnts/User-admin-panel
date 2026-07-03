import adminLogo from "../assets/admin-logo.svg";
import { Users, User, UserPlus, ChartNoAxesColumn, Cog } from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const customClassName = ({ isActive }) =>
    "sidebar__link" + (isActive ? " sidebar__link_active" : "");

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <Users
            className="sidebar__header-logo"
            size={36}
            color="#6d28d9"
            strokeWidth={2.3}
          ></Users>
          <div>
            <p className="sidebar__header-title">AdminPanel</p>
            <p className="sidebar__header-description">
              Panel de administración
            </p>
          </div>
        </div>
        <div className="sidebar__links-container">
          <NavLink to="/" className={customClassName}>
            <User />
            Usuarios
          </NavLink>
          <NavLink to="/estadisticas" className={customClassName}>
            <ChartNoAxesColumn />
            Estadisticas
          </NavLink>
          <NavLink to="/configuracion" className={customClassName}>
            <Cog />
            Configuración
          </NavLink>
        </div>
        <div className="sidebar__user-container">
          <img
            className="avatar avatar_size_md"
            src="https://ui-avatars.com/api/?name=Admin&background=6d28d9&color=fff"
            alt="avatar"
          />
          <div className="sidebar__user-info">
            <p className="sidebar__user-name">Administrador</p>
            <p className="sidebar__user-email">admin@email.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
