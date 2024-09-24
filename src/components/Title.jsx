import React from "react";
import Hr from "./Hr";
import googleIcon from "../assets/Google-icon.png";
import facebookIcon from "../assets/Facebook-icon.png";

function Title({ head, para }) {
  return (
    <>
      <h1 className="font-poppins font-bold text-[64px] leading-[96px]">
        {head}
      </h1>
      <p className="font-lato font-normal text-[28px] leading-[33.6px]">
        {para}
      </p>
      <div className="w-[148.33px] my-0 mx-auto flex justify-between  ">
        <img
          className=""
          src={googleIcon}
          alt="Sign with google"
          width={64}
          height={64}
        />
        <img
          className=""
          src={facebookIcon}
          alt="Sign with facebook"
          width={64}
          height={64}
        />
      </div>

      <Hr />
    </>
  );
}

export default Title;
