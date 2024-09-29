import React from "react";
import backIcon from "../assets/Back-icon.png";
import { Link } from "react-router-dom";

function Back() {
  return (
    <Link to="/">
      <div className="flex align-center gap-2 items-center absolute">
        <div className="w-[10.85] w-18.95]">
          <img
            className=""
            src={backIcon}
            alt={backIcon}
            width={10.85}
            height={18.95}
          />
        </div>
        <p className="font-lato font-normal text-[26px] leading-[31.2px]">
          Back
        </p>
      </div>
    </Link>
  );
}

export default Back;
