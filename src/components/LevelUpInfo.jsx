import React from "react";

function LevelUpInfo({ levelUpImg, title, head, para }) {
  return (
    <div className="w-[600px] border ">
      <div className="">
        <img src={levelUpImg} alt="" />
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
