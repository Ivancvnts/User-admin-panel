import { IdCard, Mail, Phone, Calendar, MapPin } from "lucide-react";

function UserDetail({ user }) {
  return (
    <div className="userdetail">
      <img
        className="avatar avatar_size_big"
        src={`https://ui-avatars.com/api/?name=${user.name}&background=6d28d9&color=fff`}
        alt=""
      />
      <p className="userdetail__user-name">{user.name}</p>
      <div className="userdetail__badges-container">
        <span
          className={`users__badge users__badge_role_${user.role.toLowerCase()}`}
        >
          {user.role}
        </span>
        <span
          className={`users__badge ${user.active ? "users__badge_active" : "users__badge_inactive"}`}
        >
          {user.active ? "Activo" : "Inactivo"}
        </span>
      </div>
      <div className="userdetails__data-container">
        <div className="userdetails__data-row">
          <IdCard />
          <p>ID:</p>
          <div className="userdetails__data-value">
            <p>{user.id}</p>
          </div>
        </div>
        <div className="userdetails__data-row">
          <Mail />
          <p>Email:</p>
          <div className="userdetails__data-value">
            <p>{user.email}</p>
          </div>
        </div>
        <div className="userdetails__data-row">
          <Phone />
          <p>Telefono:</p>
          <div className="userdetails__data-value">
            <p>{user.phone}</p>
          </div>
        </div>
        <div className="userdetails__data-row">
          <Calendar />
          <p>Fecha de registro:</p>
          <div className="userdetails__data-value">
            <p>{user.registrationDate}</p>
          </div>
        </div>
        <div className="userdetails__data-row">
          <MapPin />
          <p>Dirección:</p>
          <div className="userdetails__data-value">
            <p>{user.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
