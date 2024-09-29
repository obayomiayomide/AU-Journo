import React from "react";

function ExploreInfo({ exploreInfoIcon, exploreInfoText, width, height }) {
  return (
    <div className="h-[100px] flex items-center gap-[20px]  rounded-[30px] ">
      <span>
        <img src={exploreInfoIcon} alt="" width={width} height={height} />
      </span>
      <span className="font-poppins font-medium text-[28px] leading-[42px]">
        {exploreInfoText}
      </span>
    </div>
  );
}

export default ExploreInfo;
