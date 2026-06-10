import { useState } from "react";

function AddUser({ onClose, addUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "User",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleClose() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      role: "User",
    });

    setErrors({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    onClose();
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function validate(data) {
    const newErrors = {};

    if (!data.name) {
      newErrors.name = "El nombre es requerido";
    } else if (data.name.length < 3) {
      newErrors.name = "El nombre debe tener al menos 3 caracteres";
    }

    if (!data.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!data.phone) {
      newErrors.phone = "El teléfono es requerido";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "El teléfono debe tener 10 dígitos";
    }

    if (!data.address) {
      newErrors.address = "La dirección es requerida";
    } else if (data.address.length < 10 || data.address.length > 100) {
      newErrors.address = "La dirección debe tener entre 10 y 100 caracteres";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    //guardar el usuario
    addUser(formData);
    handleClose();
  }

  return (
    <>
      <div className="adduser">
        <form className="adduser__form" onSubmit={handleSubmit}>
          <label className="adduser__input-name" htmlFor="name">
            Nombre completo
          </label>
          <input
            className={`adduser__input ${errors.name ? "adduser__input_error" : ""}`}
            type="text"
            id="name"
            value={formData.name}
            placeholder="Ej. Pedro Fernandez"
            onChange={handleChange}
          />
          {errors.name && <p className="adduser__error">{errors.name}</p>}
          <label className="adduser__input-name" htmlFor="email">
            Email
          </label>
          <input
            className={`adduser__input ${errors.email ? "adduser__input_error" : ""}`}
            type="text"
            id="email"
            value={formData.email}
            placeholder="Ej. pedro@email.com"
            onChange={handleChange}
          />
          {errors.email && <p className="adduser__error">{errors.email}</p>}
          <label className="adduser__input-name" htmlFor="phone">
            Teléfono
          </label>
          <input
            className={`adduser__input ${errors.phone ? "adduser__input_error" : ""}`}
            type="text"
            id="phone"
            value={formData.phone}
            placeholder="Ej. +34 600 000 000"
            onChange={handleChange}
          />
          {errors.phone && <p className="adduser__error">{errors.phone}</p>}

          <label className="adduser__input-name" htmlFor="address">
            Dirección
          </label>
          <input
            className={`adduser__input ${errors.address ? "adduser__input_error" : ""}`}
            type="text"
            id="address"
            value={formData.address}
            placeholder="Ej. Calle 123, Querétaro, Mexico"
            onChange={handleChange}
          />
          {errors.address && <p className="adduser__error">{errors.address}</p>}
          <label className="adduser__input-name" htmlFor="role">
            Rol
          </label>
          <select className="adduser__input" id="role" onChange={handleChange}>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
            <option value="Admin">Admin</option>
          </select>
          <div className="adduser__buttons">
            <button
              className="adduser__btn"
              onClick={handleClose}
              type="button"
            >
              Cancelar
            </button>
            <button className="adduser__btn adduser__btn_save" type="submit">
              Guardar usuario
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
