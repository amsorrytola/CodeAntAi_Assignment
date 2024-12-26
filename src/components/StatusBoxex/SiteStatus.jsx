import React from "react";

function SiteStatus() {
  return (
    <div className="absolute z-0 flex justify-center items-center">
    <div className=" w-[447px] h-[170px] rounded-[24px] bg-white  border-1" style={{ boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.3)" }}>
      <div className="flex  w-[314px] h-[31px] ml-[22px] mt-[21px]">
        <div className="w-[28px] h-[31px] ">
          <img src="src/assets/AntLogo.png" alt="AntLogo" className="" />
        </div>
        <div>
          <p className="text-[18px] font-bold ml-[8px]">
            AI to Detect & Autofix Bad Code
          </p>
        </div>
      </div>
      <div className="w-[446px] mt-[20px]">
        <hr />
      </div>
      <div className="flex justify-evenly mt-[22.5px]">
        <div className="">
          <p className="flex justify-center items-center text-[18px] font-bold">30+</p>
          <p className="text-[14px]">Language Support</p>
        </div>
        <div>
          <p className="flex justify-center items-center text-[18px] font-bold">10K+</p>
          <p className="text-[14px]">Developers</p>
        </div>
        <div>
          <p className="flex justify-center items-center text-[18px] font-bold">100K+</p>
          <p className="text-[14px]">Hours Saved</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SiteStatus;
