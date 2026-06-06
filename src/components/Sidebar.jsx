import adminLogo from "../assets/admin-logo.svg";
import { Users, User, UserPlus, ChartNoAxesColumn, Cog } from "lucide-react";

function Sidebar() {
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
          <a className="sidebar__link sidebar__link_active">
            <User />
            Usuarios
          </a>
          <a className="sidebar__link">
            <UserPlus />
            Agregar usuario
          </a>
          <a className="sidebar__link">
            <ChartNoAxesColumn />
            Estadisticas
          </a>
          <a className="sidebar__link">
            <Cog />
            Configuración
          </a>
        </div>
        <div className="sidebar__user-container">
          <img
            className="sidebar__avatar"
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
