import React from "react";
import heroBg from "../../assets/L-Page-Bg.png";
import PagesLink from "../Pages Link/PagesLink";

function Hero() {
  return (
    <section>
      <div className="w">
        <h1 className="w">
          Discover, upload, and download thousand research works and journals.
        </h1>
        <p className="w">
          We give you access to own and publish your works with easy.
        </p>
        <div className="w">
          <PagesLink link="Register" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
