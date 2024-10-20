import React from "react";
import exploreImg from "../../assets/L-P-Img3.png";
import ExploreInfo from "../ExploreInfo";

function Explore() {
  return (
    <section className="h-[885px] flex justify-between bg-gradient-to-b from-white via-primaryrr via-primaryry to-white">
      <div className="w-[700px] flex flex-col justify-center items-center">
        <ExploreInfo />
        <img
          className="centralize"
          src={exploreImg}
          alt="Explore our top research topics"
          width={644}
          height={644}
        />
      </div>
      <div className="w-[644px] ">
        <h1 className="font-poppins font-semibold text-[64px] leading-[96px]">
          Explore our top research topics across various fields.
        </h1>
        <p className="font-poppins font-medium text-[28px] leading-[42px]">
          Over 1000 researches available for you to explore.
        </p>
      </div>
    </section>
  );
}

export default Explore;
