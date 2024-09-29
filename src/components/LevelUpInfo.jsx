import React from "react";

function LevelUpInfo({ levelUpImg, title, head, para, width, height }) {
  return (
    <div className="w-[600px] border ">
      <div>
        <img
          className="my-0 mx-auto"
          src={levelUpImg}
          alt={levelUpImg}
          height={height}
          width={width}
        />
      </div>
      <div className="">
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
