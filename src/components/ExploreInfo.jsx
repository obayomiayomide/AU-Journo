import React from "react";

function ExploreInfo({ exploreInfoIcon, exploreInfoText }) {
  return (
    <div className="">
      <span className="">
        <img src={exploreInfoIcon} alt="" />
      </span>
      <span className="">{exploreInfoText}</span>
    </div>
  );
}

export default ExploreInfo;
