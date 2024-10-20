import React from "react";
import heroBg from "../../assets/L-Page-Bg.png";
import PagesLink from "../Pages Link/PagesLink";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full h-[1022px] bg-hero-pattern bg-cover flex items-center">
      <div className="w-[90%] centralize">
        <div className="w-[644px]">
          <h1 className="for-header">
            Discover, upload, and download thousand research works and journals.
          </h1>
          <p className="font-poppins font-medium text-[28px] leading-[42px] my-[50px]">
            We give you access to own and publish your works with ease.
          </p>
          <Link to="/register">
            <div className="w-[191px] for-btn my-[100px]">Register</div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
