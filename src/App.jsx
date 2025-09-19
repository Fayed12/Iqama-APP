import { useState,useEffect } from "react";
import Welcome from "./components/welcome/welcome";

function App() {

  // start is open == false and then become true after open first time
  const [startAppMessage, setStartAppMessage] = useState(() => {
    const isOpen = sessionStorage.getItem("isOpenApp");
    if (isOpen) return isOpen;

    return false;
  })
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAppMessage(true)
    }, 4100);

    return ()=>clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    sessionStorage.setItem("isOpenApp" , startAppMessage)
  })

  return (
    <>
      {!startAppMessage ? (
        <Welcome />
      ) : (
        <div className="all-page relative w-full h-dvh">
          <div className="overlay absolute w-full h-full bg-[rgba(0,0,0,0.51)] blur-xs backdrop-blur-[1px]"></div>
          <div className="iqama-page relative h-full w-full">
            <div className="w-full h-full flex justify-center items-center">
              <h1 className=" text-[50px]">hello in iqama</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App
