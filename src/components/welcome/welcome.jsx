import "./welcome.css";

function Welcome() {
  return (
    <>
      <div className="welcome">
        <div className="image w-full h-[300px] flex justify-center items-end ">
          <img src="/logo.png" alt="logo" className="w-[300px]" />
        </div>
        <div className="welcome-message w-full flex justify-center">
          <span>Welcome in Iqama APP</span>
        </div>
      </div>
    </>
  );
}

export default Welcome;
