import { Eye, Trash2 } from "lucide-react";

function UserRow({ user, openUserDetails, deleteUser }) {
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
        <div className="users__actions">
          <button
            className="users__actionbtn"
            onClick={() => openUserDetails(user)}
          >
            <Eye />
          </button>
          <button className="users__actionbtn" onClick={() => deleteUser(user)}>
            <Trash2 />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default UserRow;
