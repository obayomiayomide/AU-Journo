import React from "react";
import ActionBtn from "../ActionBtn";
import levelUpImg1 from "../../assets/L-P-Img1.png";
import levelUpImg2 from "../../assets/L-P-Img2.png";
import LevelUpInfo from "../LevelUpInfo";

function LevelUp() {
  return (
    <section className="w-full flex flex-col text-center">
      <div className="flex gap-10 my-0 mx-auto text-center items-center">
        <LevelUpInfo
          levelUpImg={levelUpImg1}
          title="STREAMLINE YOUR DISCOVERY"
          head="Optimize the process of uncovering research findings."
          para="Access an extensive repository of thousands of research papers while keeping yourself updated on crucial subjects on our platform."
          width="full"
          height="315px"
        />
        <LevelUpInfo
          levelUpImg={levelUpImg2}
          title="ELEVATE YOUR RESEARCH PROFILE"
          head="Start growing your publication today."
          para="Take the next step in your academic journey. Let's boost your publication together."
          width="315px"
          height="315px"
        />
      </div>
      <div className="w-[1029px] my-0 mx-auto">
        <h1 className="font-poppins font-semibold text-[64px] leading-[96px]">
          Level up your research and be a part of our thriving community of
          academics and researchers.
        </h1>
        <p className="w-[191px] my-0 mx-auto font-poppins font-medium text-[22px] leading-[33px] border rounded-[15px] px-[50px] py-[15px] ">
          Join Us
        </p>
      </div>
    </section>
  );
}

export default LevelUp;
