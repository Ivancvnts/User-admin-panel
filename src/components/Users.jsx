import { Search, Plus } from "lucide-react";
import { useState } from "react";
import UserRow from "./UserRow";
import { users } from "../data/user.js";

function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function handleSearchUpdate(e) {
    setSearchQuery(e.target.value);
  }

  function handleOpenUserDetails(user) {
    setSelectedUser = user;
    setIsPanelOpen = true;
  }

  return (
    <>
      <div className="users">
        <div className="users__header">
          <div>
            <h1 className="users__title">Usuarios</h1>
            <p className="users__description">
              Gestiona y visualiza los usuarios registrados.
            </p>
          </div>
          <div className="users__actions">
            <div className="users__search">
              <Search size={16} />
              <input
                className="users__input"
                type="text"
                placeholder="Buscar usuario"
                onChange={handleSearchUpdate}
              />
            </div>
            <button className="users__add-btn">
              <Plus size={16} /> Agregar usuario
            </button>
          </div>
        </div>
        <table className="users__list">
          <thead className="users__list-head">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
        <p className="users__list-message">
          Mostrando {filteredUsers.length} de {users.length} usuarios
        </p>
      </div>
    </>
  );
}

export default Users;
