import { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.js";
import { Sun, Moon } from "lucide-react";

import Toggle from "./Toggle";

function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [notifyNewUser, setNotifyNewUser] = useState(true);
  const [notifyStateChange, setNotifyStateChange] = useState(false);
  const [authentication, setAuthentication] = useState(true);
  const [closeForInactivity, setCloseForInactivity] = useState(false);

  function handleThemeChange(theme) {
    setTheme(theme);
  }

  function handleToggleNotifyNewUser() {
    setNotifyNewUser(!notifyNewUser);
  }

  function handleToggleNotifyStateChange() {
    setNotifyStateChange(!notifyStateChange);
  }

  function handleToggleAuthentication() {
    setAuthentication(!authentication);
  }

  function handleToggleCloseForInactivity() {
    setCloseForInactivity(!closeForInactivity);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-header__title">Configuración</h1>
          <p className="page-header__description">Preferencias y ajustes</p>
        </div>
      </div>
      <div className="settings">
        <div className="settings__card">
          <p className="settings__card-title">Preferencias de la cuenta</p>
          <div className="settings__setting">
            <div className="settings__setting-info">
              <p className="settings__setting-title">Tema</p>
              <p className="settings__setting-description">
                Selecciona el tema de la interfaz
              </p>
            </div>
            <div className="settings__theme-options">
              <div
                className={`settings__theme-option ${theme === "light" ? "settings__theme-option_selected" : ""}`}
                onClick={() => handleThemeChange("light")}
              >
                <Sun></Sun>
                <p> Claro</p>
              </div>
              <div
                className={`settings__theme-option ${theme === "dark" ? "settings__theme-option_selected" : ""}`}
                onClick={() => handleThemeChange("dark")}
              >
                <Sun></Sun>
                <p> Obscuro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="settings__card">
          <p className="settings__card-title">Notificaciones</p>
          <div className="settings__setting">
            <div className="settings__setting-info">
              <p className="settings__setting-title">
                Notificar nuevo usuarios
              </p>
              <p className="settings__setting-description">
                Recibe una notificación cuando se registre un nuevo usuario
              </p>
            </div>
            <Toggle
              enabled={notifyNewUser}
              onChange={handleToggleNotifyNewUser}
            ></Toggle>
          </div>
          <div className="settings__setting">
            <div className="settings__setting-info">
              <p className="settings__setting-title">
                Notificar cambios de estado
              </p>
              <p className="settings__setting-description">
                Recibe una notificación cuando cambie el estado de un usuario
              </p>
            </div>
            <Toggle
              enabled={notifyStateChange}
              onChange={handleToggleNotifyStateChange}
            ></Toggle>
          </div>
        </div>
        <div className="settings__card">
          <p className="settings__card-title">Seguridad</p>
          <div className="settings__setting">
            <div className="settings__setting-info">
              <p className="settings__setting-title">
                Activar factor de doble autenticación
              </p>
              <p className="settings__setting-description">
                Solicita que los usuarios configuren el factor de doble
                autenticación
              </p>
            </div>
            <Toggle
              enabled={authentication}
              onChange={handleToggleAuthentication}
            ></Toggle>
          </div>
          <div className="settings__setting">
            <div className="settings__setting-info">
              <p className="settings__setting-title">
                Cerrar sesión por inactividad
              </p>
              <p className="settings__setting-description">
                Cierra la sesión de los usuarios despeus de 15 minutos de
                inactividad
              </p>
            </div>
            <Toggle
              enabled={closeForInactivity}
              onChange={handleToggleCloseForInactivity}
            ></Toggle>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
