import Input from "../main-input";
import "./header.css"

function Header({ city, setCity }) {
    return (
      <>
        <div className="iqama-header-one w-full px-[15px]! py-[10px]! flex justify-between items-center ">
          <div className="logo">
            <img src="/logo.png" alt="iqama logo" />
          </div>
          <div className="search">
            <Input
              city={city}
              setCity={setCity}
              placeholder="search Egypt city..."
            />
          </div>
        </div>
      </>
    );
}

export default Header;