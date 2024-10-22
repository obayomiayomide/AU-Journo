import React from "react";
import membersIcon from "../assets/Members-Icon.png";
import downloadIcon from "../assets/Download-Icon.png";
import publishedIcon from "../assets/Published-Icon.png";

function ExploreInfo() {
  return (
    <div className="w-[] h-[675px] mt-[-50px] absolute flex flex-col justify-between">
      <div className="w-[380px] h-[100px] ml-[150px] flex items-center rounded-[30px] bg-white z-10 shadow-[0_0_50px_rgba(0,0,0,0.25)] ml-[] mt-[]">
        <div className="flex items-center gap-[20px] centralize">
          <span>
            <img src={membersIcon} alt="" width={68} />
          </span>
          <span className="font-poppins font-medium text-[28px] leading-[42px]">
            1000+ members
          </span>
        </div>
      </div>
      <div className="w-[430px] h-[100px] mt-[180px] flex items-center rounded-[30px] bg-white z-10 shadow-[0_0_50px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-[20px] centralize">
          <span>
            <img src={publishedIcon} alt="" width={42} />
          </span>
          <span className="font-poppins font-medium text-[28px] leading-[42px]">
            500+ published topics
          </span>
        </div>
      </div>
      <div className="w-[365px] h-[100px] ml-[500px] flex items-center rounded-[30px] bg-white z-10 ml-[] mt-[] shadow-[0_0_50px_rgba(0,0,0,0.25)]">
        <div className="flex items-center gap-[20px] centralize">
          <span>
            <img src={downloadIcon} alt="" width={48} />
          </span>
          <span className="font-poppins font-medium text-[28px] leading-[42px]">
            200+ downloaded
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExploreInfo;
