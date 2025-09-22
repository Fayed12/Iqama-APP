import "./IqamaDetails.css";
import DataDetails from "../aladhan-details/dataDetails";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function IqamaDetails({ state, city }) {
  const date = new Date();
  let day = date.getDate();

  const resData = state?.daysData?.data;

  if (!resData) {
    return <div className="no-data">No data yet...</div>;
  }

  return (
    <div className="all-details">
      <div className="container">
        <div className="iqama-header">
          <h2>{resData.date.hijri.month.ar}</h2>
          <p>{resData.date.gregorian.date}</p>
          <p className="city">{city}</p>
          <p>{resData.date.hijri.weekday.ar}</p>
        </div>
        <div className="day-time">
          <button>
            <ChevronLeftIcon />
          </button>
          <div className="day">{day}</div>
          <button>
            <ChevronRightIcon />
          </button>
        </div>
        {state?.status === "loading" ? (
          <div className="flex items-center justify-center">
            <span className="text-[20px] font-bold">Loading......</span>
          </div>
        ) : (
          <div className="details">
            <DataDetails timeDetails={resData.timings} />
          </div>
        )}
        <div className="notes">
          <span>All times are based on Africa/Cairo timezone</span>
        </div>
      </div>
    </div>
  );
}

export default IqamaDetails;
