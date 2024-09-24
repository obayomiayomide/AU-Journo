import React from "react";

function PagesLink({ condition, link }) {
  return (
    <div className="">
      <p className="font-lato font-normal text-[26px] leading-[31.2px]">
        {condition} <span className="text-[#2E7B3F]">{link}</span>
      </p>
    </div>
  );
}

export default PagesLink;
