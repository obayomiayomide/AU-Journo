import React from "react";

function ExploreInfo({
  exploreInfoIcon,
  exploreInfoText,
  width,
  height,
  w,
  movel,
  movet,
}) {
  return (
    <div
      className={`w-[${w}] max-w-[430px] h-[100px] flex items-center rounded-[30px] bg-white z-10 relative ml-[${movel}] mt-[${movet}] shadow-[0_0_50px_rgba(0,0,0,0.25)]`}
    >
      <div className="flex items-center gap-[20px] centralize">
        <span>
          <img src={exploreInfoIcon} alt="" width={width} height={height} />
        </span>
        <span className="font-poppins font-medium text-[28px] leading-[42px]">
          {exploreInfoText}
        </span>
      </div>
    </div>
  );
}

export default ExploreInfo;
