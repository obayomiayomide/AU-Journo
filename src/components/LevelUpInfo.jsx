import React from "react";

function LevelUpInfo({ levelUpImg, title, head, para }) {
  return (
    <div className="">
      <div className="">
        <img src={levelUpImg} alt="" />
      </div>
      <div className="">
        <p className="">{title}</p>
        <h3 className="">{head}</h3>
        <p className="">{para}</p>
      </div>
    </div>
  );
}

export default LevelUpInfo;
