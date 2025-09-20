import "./dataDetails.css";

function DataDetails({ timeDetails }) {
  return (
    <div className="data-details">
      <div className="time-item">
        <span className="label">Fajr</span>
        <span className="value">{timeDetails.Fajr}</span>
      </div>
      <div className="time-item">
        <span className="label">Dhuhr</span>
        <span className="value">{timeDetails.Dhuhr}</span>
      </div>
      <div className="time-item">
        <span className="label">Asr</span>
        <span className="value">{timeDetails.Asr}</span>
      </div>
      <div className="time-item">
        <span className="label">Maghrib</span>
        <span className="value">{timeDetails.Maghrib}</span>
      </div>
      <div className="time-item">
        <span className="label">Isha</span>
        <span className="value">{timeDetails.Isha}</span>
      </div>
    </div>
  );
}

export default DataDetails;
