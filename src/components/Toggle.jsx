function Toggle({ enabled, onChange }) {
  return (
    <div className={`toggle ${enabled ? "toggle_on" : ""}`} onClick={onChange}>
      <div className="toggle__thumb"></div>
    </div>
  );
}

export default Toggle;
