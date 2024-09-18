import React from "react";
import exploreImg from "../../assets/L-P-Img3.png";
import membersIcon from "../../assets/Members-Icon.png";
import downloadIcon from "../../assets/Download-Icon.png";
import publishedIcon from "../../assets/Published-Icon.png";
import ExploreInfo from "../ExploreInfo";

function Explore() {
  return (
    <section>
      <div>
        <img src={exploreImg} alt="Explore our top research topics" />
        <ExploreInfo
          exploreInfoIcon={membersIcon}
          exploreInfoText="1000+ members"
        />
        <ExploreInfo
          exploreInfoIcon={downloadIcon}
          exploreInfoText="200+ downloaded"
        />
        <ExploreInfo
          exploreInfoIcon={publishedIcon}
          exploreInfoText="500+ published topics"
        />
      </div>
      <div className="">
        <h1 className="w">
          Explore our top research topics across various fields.
        </h1>
        <p className="w">Over 1000 researches available for you to explore.</p>
      </div>
    </section>
  );
}

export default Explore;
