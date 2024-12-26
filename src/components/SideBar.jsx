import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function SideBar() {
  const [isMenu, setMenuTab] = useState(false);

  // Automatically set `isMenu` to true when the screen width is greater than 1200px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setMenuTab(true);
      } else {
        setMenuTab(false);
      }
    };

    // Initial check when the component mounts
    handleResize();

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col xs:bg-white ">
        <div className="w-[242px] xs:w-[100%]  bg-white flex flex-col border-r">
          {/* Logo Section */}
          <div className="flex xs:justify-between lg:p-4">
            <div className="flex items-center pl-[20px] xs:pt-4  ">
              <img
                src="src/assets/Antlogo2.png"
                alt="CodeAnt AI"
                className="w-[28.5px] h-[32px]"
              />
              <p className="text-[24px] pl-[10px] font-sans">CodeAnt AI</p>
            </div>
            <button
              onClick={() => {
                setMenuTab((prev) => !prev);
              }}
              className="hidden xs:block xs:pr-2 xs:mt-[10px]"
            >
              <img
                src={`${
                  isMenu ? "src/assets/Cross.png" : "src/assets/MenuBar.png"
                }`}
                alt=""
              />
            </button>
          </div>
          {isMenu && (
            <div className=" ">
            <select className="mt-[20px] xs:mt-[15px] mx-[20px] xs:mr-[10px]  w-[202px] xs:w-[95%]  h-[40px] bg-white border border-gray-400 rounded-md pl-[20px]">
            <option>UtkarshDhairyaPanwar</option>
            <option>TalhaAnsari</option>
          </select>

          <nav className="mt-[20px] xs:mt[1px] space-y-4 xs:space-y-3 pl-[20px] font-semibold text-[16px]">
            <NavLink
              to="/repositories"
              onClick={()=>{
                if (window.innerWidth > 1200) {
                  setMenuTab(true);
                } else {
                  setMenuTab(false);
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center w-[210px] xs:w-[98%] h-[48px] bg-blue-600 rounded-md"
                  : "text-gray-600 flex items-center space-x-2"
              }
            >
              <img
                src="src/assets/MenuIcons/RepoIcon.png"
                className="w-[24px] h-[24px] ml-[10px]"
              />
              <span className="pl-[10px]">Repositories</span>
            </NavLink>
            <NavLink
              to="/ai-code-review"
              onClick={()=>{
                if (window.innerWidth > 1200) {
                  setMenuTab(true);
                } else {
                  setMenuTab(false);
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center w-[210px] xs:w-[98%] h-[48px] bg-blue-600 rounded-md"
                  : "text-gray-600 flex items-center space-x-2"
              }
            >
              <img
                src="src/assets/MenuIcons/ReviewIcon.png"
                className="w-[24px] h-[24px] ml-[10px]"
              />
              <span className="pl-[10px]">AI Code Review</span>
            </NavLink>
            <NavLink
              to="/cloud-security"
              onClick={()=>{
                if (window.innerWidth > 1200) {
                  setMenuTab(true);
                } else {
                  setMenuTab(false);
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center w-[210px] xs:w-[98%] h-[48px] bg-blue-600 rounded-md"
                  : "text-gray-600 flex items-center space-x-2"
              }
            >
              <img
                src="src/assets/MenuIcons/CloudIcon.png"
                className="w-[24px] h-[24px] ml-[10px]"
              />
              <span className="pl-[10px]">Cloud Security</span>
            </NavLink>
            <NavLink
              to="/how-to-use"
              onClick={()=>{
                if (window.innerWidth > 1200) {
                  setMenuTab(true);
                } else {
                  setMenuTab(false);
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center w-[210px] xs:w-[98%] h-[48px] bg-blue-600 rounded-md"
                  : "text-gray-600 flex items-center space-x-2"
              }
            >
              <img
                src="src/assets/MenuIcons/UseIcon.png"
                className="w-[24px] h-[24px] ml-[10px]"
              />
              <span className="pl-[10px]">How to Use</span>
            </NavLink>
            <NavLink
              to="/settings"
              onClick={()=>{
                if (window.innerWidth > 1200) {
                  setMenuTab(true);
                } else {
                  setMenuTab(false);
                }
              }}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center w-[210px] xs:w-[98%] h-[48px] bg-blue-600 rounded-md"
                  : "text-gray-600 flex items-center space-x-2"
              }
            >
              <img
                src="src/assets/MenuIcons/SettingsIcon.png"
                className="w-[24px] h-[24px] ml-[10px]"
              />
              <span className="pl-[10px]">Settings</span>
            </NavLink>
          </nav>
          </div>)}

          
        </div>
              {isMenu && (
                <div className="lg:absolute  lg:bottom-0 pl-[20px] pb-[20px] bg-white xs:pt-[10px] xs:border-b-4">
          <NavLink
            to="/support"
            onClick={()=>{
              if (window.innerWidth > 1200) {
                setMenuTab(true);
              } else {
                setMenuTab(false);
              }
            }}
            className="text-gray-600 flex items-center space-x-2 mb-[20px] xs:mb-[10px]"
          >
            <img
              src="src/assets/MenuIcons/SupportIcon.png"
              className="w-[24px] h-[24px] ml-[10px]"
            />
            <span className="pl-[10px] xs:font-semibold">Support</span>
          </NavLink>
          <NavLink to="/" className="text-gray-600 xs:font-semibold flex items-center space-x-2">
            <img
              src="src/assets/MenuIcons/LogoutIcon.png"
              className="w-[24px] h-[24px] ml-[10px]"
            />
            <span className="pl-[10px]">Logout</span>
          </NavLink>
        </div>
              )}
        
      </div>
    </>
  );
}

export default SideBar;
