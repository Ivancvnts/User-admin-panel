function StatsCard({ icon, title, data, color }) {
  return (
    <div className="stats-card">
      <div
        className={`stats-card__logo-container stats-card__logo-container_${color}`}
      >
        {icon}
      </div>
      <div className="stats-card__info-container">
        <p className="stats-card__title">{title}</p>
        <p className="stats-card__data">{data}</p>
      </div>
    </div>
  );
}

export default StatsCard;
