import { X } from "lucide-react";
import UserDetail from "./UserDetail";
import AddUser from "./AddUser";

function SidePanel({ user, onClose, isOpen, addUser }) {
  return (
    <>
      <div className={`sidepanel ${isOpen ? "sidepanel_open" : ""}`}>
        <div className="sidepanel__content">
          <div className="sidepanel__header">
            <p className="sidepanel__title">
              {user ? "Detalle del usuario" : "Agregar nuevo usuario"}
            </p>
            <button className="sidepanel__closebtn" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
          {user && <UserDetail user={user} />}
          {!user && <AddUser onClose={onClose} addUser={addUser} />}
        </div>
      </div>
    </>
  );
}

export default SidePanel;
