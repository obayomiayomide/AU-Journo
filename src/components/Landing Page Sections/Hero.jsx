import React from "react";
import heroBg from "../../assets/L-Page-Bg.png";
import PagesLink from "../Pages Link/PagesLink";

function Hero() {
  return (
    <section>
      <div className="w-[90%] my-0 mx-auto">
        <div className="w-[644px]">
          <h1 className="for-header">
            Discover, upload, and download thousand research works and journals.
          </h1>
          <p className="font-poppins font-medium text-[28px] leading-[42px]">
            We give you access to own and publish your works with ease.
          </p>
          <div className="w-[191px] for-btn ">Register</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
