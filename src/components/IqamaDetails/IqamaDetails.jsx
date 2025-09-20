function IqamaDetails({ state, city }) {
  const resData = state?.daysData?.data;

  if (state?.status === "loading") {
    return <div className="text-[white]">Loading...</div>;
  }

  if (!resData) {
    return <div className="text-[white]">No data yet...</div>;
  }

  return (
    <div className="all-details flex justify-center items-center w-full text-[white]">
      <div className="container w-full">
        <div className="all-details">
          <div className="hijri-month">{resData.date.hijri.month.ar}</div>
          <div className="gregorian-data">{resData.date.gregorian.date}</div>
          <div className="city-name">{city}</div>
          <div className="day-name">{resData.date.hijri.weekday.ar}</div>
        </div>
        <div className="day-time">
          <div className="day">today</div>
          <div className="scroll-days">s d</div>
        </div>
        <div className="details">now</div>
        <div className="nots"></div>
      </div>
    </div>
  );
}

export default IqamaDetails;
