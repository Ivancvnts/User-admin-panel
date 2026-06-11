import { Search, Plus } from "lucide-react";
import { useState } from "react";
import { usersArr } from "../data/user.js";

import UserRow from "./UserRow";
import SidePanel from "./SidePanel";

function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [users, setUsers] = useState(usersArr);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function handleSearchUpdate(e) {
    setSearchQuery(e.target.value);
  }

  function handleOpenUserDetails(user) {
    setSelectedUser(user);
    setIsPanelOpen(true);
  }

  function handleOpenAddUser() {
    setSelectedUser(null);
    setIsPanelOpen(true);
  }

  function handleCloseSidePanel() {
    setIsPanelOpen(false);
  }

  function handleAddUser(newUser) {
    const user = {
      ...newUser,
      id: users.length + 1,
      active: true,
      registrationDate: new Date().toLocaleDateString(),
    };

    setUsers([...users, user]);
    handleCloseSidePanel();
  }

  function handleDeleteUser() {
    const updatedUserList = users.filter((user) => user.id !== selectedUser.id);

    setUsers(updatedUserList);
    if (isPanelOpen) {
      setIsPanelOpen(false);
    }
    handleCloseSidePanel();
    handleCloseModal();
  }

  function handleOpenModal(user) {
    setIsModalOpen(true);
    setSelectedUser(user);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedUser(null);
  }

  return (
    <>
      <div className={`users ${isPanelOpen ? "users--panel-open" : ""}`}>
        <div className="users__container">
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
              <button className="users__add-btn" onClick={handleOpenAddUser}>
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
                <UserRow
                  key={user.id}
                  user={user}
                  openUserDetails={handleOpenUserDetails}
                  deleteUser={handleOpenModal}
                />
              ))}
            </tbody>
          </table>
          <p className="users__list-message">
            Mostrando {filteredUsers.length} de {users.length} usuarios
          </p>
        </div>
        <SidePanel
          user={selectedUser}
          onClose={handleCloseSidePanel}
          isOpen={isPanelOpen}
          addUser={handleAddUser}
        />
      </div>
      {isModalOpen && (
        <div className="modal__overlay">
          <div className="modal">
            <p className="modal__message">
              ¿Estás seguro de que quieres eliminar a{" "}
              <strong>{selectedUser.name}</strong>?
            </p>
            <div className="modal_buttons">
              <button className="modal__btn" onClick={handleCloseModal}>
                Cancelar
              </button>
              <button
                className="modal__btn modal__btn_confirm"
                onClick={handleDeleteUser}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
