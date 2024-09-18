import React from "react";
import ActionBtn from "../ActionBtn";
import levelUpImg1 from "../../assets/L-P-Img1.png";
import levelUpImg2 from "../../assets/L-P-Img2.png";
import LevelUpInfo from "../LevelUpInfo";

function LevelUp() {
  return (
    <section className="">
      <div>
        <LevelUpInfo
          levelUpImg={levelUpImg1}
          title="STREAMLINE YOUR DISCOVERY"
          head="Optimize the process of uncovering research findings."
          para="Access an extensive repository of thousands of research papers while keeping yourself updated on crucial subjects on our platform."
        />
        <LevelUpInfo
          levelUpImg={levelUpImg2}
          title="ELEVATE YOUR RESEARCH PROFILE"
          head="Start growing your publication today."
          para="Take the next step in your academic journey. Let's boost your publication together."
        />
      </div>
      <div className="">
        <h1 className="">
          Level up your research and be a part of our thriving community of
          academics and researchers.
        </h1>
        <ActionBtn buttonText="Join Us" />
      </div>
    </section>
  );
}

export default LevelUp;
