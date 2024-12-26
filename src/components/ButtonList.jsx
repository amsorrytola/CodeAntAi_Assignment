import React from 'react';
import Button from './Button.jsx';

function ButtonList({ buttons }) {
  return (
    <div className=" pt-[3%] flex flex-col  items-center w-[100%] h-[100%]">
      {buttons.map((button, index) => (
        /*w-446/672 h-57.96/326  */
        <Button
          key={index}
          className="w-[66.3%] h-[17.4%] border border-gray-300 hover:bg-gray-100 mb-[2%] rounded-xl"
          onClick={button.onClick}
        >
          <div className="flex justify-center items-center space-x-5">
            <img src={button.icon} alt="" className="w-[5%] h-[5%]" />
            <span className='text-[120%] font-semibold  xs:text-[13px]'>{button.label}</span>
          </div>
        </Button>
      ))}
    </div>
  );
}

export default ButtonList;
