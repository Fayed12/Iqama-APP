import "./dataDetails.css";

function DataDetails({ timeDetails }) {
  const { Fajr, Dhuhr, Asr, Maghrib, Isha } = timeDetails;
  const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

  let dateArray = [Fajr, Dhuhr, Asr, Maghrib, Isha];

  // handle prayer time
  const prayerData = dateArray.map((time) => {
    if (Number(time.split(":")[0]) > 12) {
      return `${Number(time.split(":")[0]) - 12}:${time.split(":")[1]}`;
    } else {
      return time;
    }
  });
  return (
    <div className="data-details">
      {prayerData.map((item, i) => (
        <div className="time-item" key={prayers[i]}>
          <span className="label">{prayers[i]}</span>
          <span className="value">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default DataDetails;
