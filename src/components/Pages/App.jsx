import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

function App() {
  return (
    <>
      <div className="lg:flex relative">
        {/* SideBar */}
        <div className="xs:absolute xs:top-0 xs:left-0 xs:w-[100%] xs:h-full lg:relative  z-10">
          <SideBar />
        </div>

        {/* Outlet */}
        <div className="xs:ml-0  flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
