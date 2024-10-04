import React from "react";

function LevelUpInfo({ levelUpImg, title, head, para, width, height }) {
  return (
    <div className="w-[600px] bg-white  rounded-b-[20px] shadow-[2px_1px_50px_rgba(0,0,0,0.25)]">
      <div>
        <img
          className="my-0 mx-auto"
          src={levelUpImg}
          alt={levelUpImg}
          height={height}
          width={width}
        />
      </div>
      <div className="w-[550px] centralize m-[20px]">
        <p className="font-poppins font-medium text-[20px] leading-[30px]">
          {title}
        </p>
        <h3 className="font-poppins font-medium text-[40px] leading-[60px]">
          {head}
        </h3>
        <p className="font-poppins font-medium text-[28px] leading-[42px]">
          {para}
        </p>
      </div>
    </div>
  );
}

export default LevelUpInfo;
