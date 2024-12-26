import React from "react";
import LoginLeftSide from "../LoginLeftSide";
import LoginAuth from "../LoginAuth";

function Login() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex justify-center items-center w-[50%] h-screen   xs:hidden ">
        
          <LoginLeftSide />
        
        <div className="absolute bottom-0 left-0 h-319 w-284">
          <img src="src/assets/Antbg.png" alt="" />
        </div>
      </div>
      <div className=" w-[50%] xs:w-[100%] h-screen bg-[#FAFAFA] ">
        <LoginAuth />
      </div>
    </div>
  );
}

export default Login;
