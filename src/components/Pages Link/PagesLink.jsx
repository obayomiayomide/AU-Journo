import React from "react";
import { Link } from "react-router-dom";

function PagesLink({ condition, link, toLink }) {
  return (
    <div className="">
      <p className="font-lato font-normal text-[26px] leading-[31.2px]">
        {condition}{" "}
        <Link to={toLink}>
          <span className="text-[#2E7B3F]">{link}</span>
        </Link>
      </p>
    </div>
  );
}

export default PagesLink;
