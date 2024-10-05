import React from "react";
import exploreImg from "../../assets/L-P-Img3.png";
import membersIcon from "../../assets/Members-Icon.png";
import downloadIcon from "../../assets/Download-Icon.png";
import publishedIcon from "../../assets/Published-Icon.png";
import ExploreInfo from "../ExploreInfo";

function Explore() {
  return (
    <section className="flex justify-between">
      <div className="w-[700px]">
        <img
          className="centralize"
          src={exploreImg}
          alt="Explore our top research topics"
          width={644}
          height={644}
        />
        <ExploreInfo
          exploreInfoIcon={membersIcon}
          exploreInfoText="1000+ members"
          width={80}
          w="380px"
          movel="-20px"
        />
        <ExploreInfo
          exploreInfoIcon={publishedIcon}
          exploreInfoText="500+ published topics"
          width={40}
          w="430px"
          movet="100px"
        />
        <ExploreInfo
          exploreInfoIcon={downloadIcon}
          exploreInfoText="200+ downloaded"
          width={60}
          w="400px"
          movel="100px"
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
