import React from "react";

function Issues() {
  return (
    <div className="absolute bottom-[30%] left-[25%] z-50 ">
    <div
      className="  w-[265px] h-[164px] rounded-[24px] bg-white  border-1"
      style={{ boxShadow: "0px 7px 14px rgba(0, 0, 0, 0.4)" }}
    >
      <div className="mx-[31.83px] py-[15.21px]">
        <div className="flex flex-row justify-between">
          <div className="w-[56px] h-[56.77px]">
            <img src="src/assets/IssueLogo.png" alt="" />
          </div>
          <div className=" w-[65px] h-[39.31px] pt-[5px]">
            <div className="flex flex-row" >
            <img src="src/assets/small right 2.png" alt="" />
            <p className="pt-[1px] text-[14px] font-bold text-customBlue">14%</p>
            </div>
            <p className="text-[12px]">This week</p>
          </div>
        </div>
        <div className="pt-[16.43px] font-bold">
          <p className="text-[14px]">Issues Fixed</p>
          <p className="text-[32px]">500K+</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Issues;
