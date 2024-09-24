import React from "react";
import heroBg from "../../assets/L-Page-Bg.png";
import PagesLink from "../Pages Link/PagesLink";

function Hero() {
  return (
    <section>
      <div className="w-[644px]">
        <h1 className="font-poppins font-bold text-[64px] leading-[96px]">
          Discover, upload, and download thousand research works and journals.
        </h1>
        <p className="font-poppins font-medium text-[28px] leading-[42px]">
          We give you access to own and publish your works with easy.
        </p>
        <div className="border rounded-[15px] px-[50px] py-[15px] ">
          <PagesLink link="Register" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
