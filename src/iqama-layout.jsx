import { useState, useReducer, useEffect } from "react";
import Header from "./components/header/header";
import IqamaDetails from "./components/IqamaDetails/IqamaDetails";

const initialState = {
  daysData: {},

  // loading, error, catchDataSuccess
  status: "idle",
  errorMessage: "",
};

function reducer(state, action) {
    switch (action.type) {
      case "loading":
        return { ...state, status: "loading" };
      case "catchDataSuccess":
        return { ...state, status: "ready", daysData: action.payload };
      case "error":
        return { ...state, status: "error", errorMessage: action.payload };
      default:
        return state;
    }
}

function MainLayout() {
  const [city, setCity] = useState("cairo");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/20-09-2025?city=${city}&country=Egypt&method=5&timezonestring=Africa/Cairo`
        );
        if (!res.ok) {
          throw new Error("something error in fetching data!!");
        }
        const data =await res.json();
        dispatch({ type: "catchDataSuccess", payload: data });
      } catch (err) {
          dispatch({ type: "error", payload: err.message });
      } finally {
        dispatch({ type: "ready" });
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <header>
        <Header city={city} setCity={setCity} />
              <IqamaDetails state={state} city={city } />
      </header>
    </>
  );
}

export default MainLayout;
