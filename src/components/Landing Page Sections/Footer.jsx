import React from "react";
import FooterLinks from "../Pages Link/FooterLinks";

function Footer() {
  return (
    <section className="p-[50px] bg-primary">
      <div className=" text-center">
        <hr className="max-w-[1528px] my-0 mx-auto border-white " />
        <FooterLinks />
        <div className="max-w-[528px] font-poppins font-medium text-[22px] text-white leading-[33px] centralize">
          © All right reserved, {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
}

export default Footer;
