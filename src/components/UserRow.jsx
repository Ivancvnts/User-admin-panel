import { Eye } from "lucide-react";

function UserRow({ user, openUserDetails }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>
        <div className="users__user-cell">
          <img
            className="avatar avatar_size_sm"
            src={`https://ui-avatars.com/api/?name=${user.name}&background=6d28d9&color=fff`}
            alt=""
          />
          {user.name}
        </div>
      </td>
      <td>{user.email}</td>
      <td>
        <span
          className={`users__badge users__badge_role_${user.role.toLowerCase()}`}
        >
          {user.role}
        </span>
      </td>
      <td>
        <span
          className={`users__badge ${user.active ? "users__badge_active" : "users__badge_inactive"}`}
        >
          {user.active ? "Activo" : "Inactivo"}
        </span>
      </td>
      <td>
        <button
          className="users__detailsbtn"
          onClick={() => openUserDetails(user)}
        >
          <Eye />
        </button>
      </td>
    </tr>
  );
}

export default UserRow;
