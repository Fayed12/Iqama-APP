import { useState, useReducer, useEffect } from "react";
import Header from "./components/header/header";
import IqamaDetails from "./components/IqamaDetails/IqamaDetails";


// time
const today = new Date();

function formatDate(date) {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();
  return { day, month, year };
}

const initialState = {
  daysData: {},

  // loading, error, catchDataSuccess
  status: "idle",
  errorMessage: "",
  ...formatDate(today)
};

function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return { ...state, status: "loading" };
      case "catchDataSuccess":
        return { ...state, status: "ready", daysData: action.payload };
      case "error":
        return { ...state, status: "error", errorMessage: action.payload };
      case "time":
        return {
          ...state,
          status: "dayTime",
          day: action.payload.day,
          month: action.payload.month,
          year: action.payload.year,
        };
      default:
        return state;
    }
}

function MainLayout() {
  const [city, setCity] = useState("cairo");
  const [state, dispatch] = useReducer(reducer, initialState);
  
  // handle increment date
  function handleIncDate() {
    const current = new Date(state.year, state.month - 1, state.day);
    current.setDate(current.getDate() + 1);
    dispatch({ type: "time", payload: formatDate(current) });
  }

  // handle decrement date
  function handleDecDate() {
    const current = new Date(state.year, state.month - 1, state.day);
    current.setDate(current.getDate() - 1);
    dispatch({ type: "time", payload: formatDate(current) });
  }

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${state.day}-${state.month}-${state.year}?city=${city}&country=Egypt&method=5&timezonestring=Africa/Cairo`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("something error in fetching data!!");
        }
        const data = await res.json();
        dispatch({ type: "catchDataSuccess", payload: data });
      } catch (err) {
        dispatch({ type: "error", payload: err.message });
      }
    }
    fetchData();

    return () => controller.abort();
  }, [city, state.day, state.month, state.year]);
  return (
    <>
      <header>
        <Header city={city} setCity={setCity} />
        <IqamaDetails
          state={state}
          city={city}
          date={state.day}
          handleDecDate={handleDecDate}
          handleIncDate={handleIncDate}
        />
      </header>
    </>
  );
}

export default MainLayout;
