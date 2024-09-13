import React from "react";
import googleIcon from "../assets/Google-icon.png";
import facebookIcon from "../assets/Facebook-icon.png";
import Hr from "./Hr";

function Title({ head, para }) {
  return (
    <div className="">
      <h1 className="">{head}</h1>
      <p className="">{para}</p>
      <div>
        <img className="" src={googleIcon} alt="Sign with google" />
        <img className="" src={facebookIcon} alt="Sign with facebook" />
      </div>
      <div className="">
        <p className="">Or</p>
        <Hr />
      </div>
    </div>
  );
}

export default Title;
