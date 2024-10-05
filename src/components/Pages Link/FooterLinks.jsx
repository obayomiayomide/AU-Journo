import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="w-[1234px] flex justify-between text-white items-center centralize my-[30px]">
      <Link to="">
        <div className="font-poppins font-medium text-[22px] text-white leading-[33px]">
          About us
        </div>
      </Link>
      <Link to="">
        <div className="font-poppins font-medium text-[22px] text-white leading-[33px]">
          Help center
        </div>
      </Link>
      <Link to="">
        <div className="font-poppins font-medium text-[22px] text-white leading-[33px]">
          Terms and Privacy
        </div>
      </Link>
      <Link to="">
        <div className="font-poppins font-medium text-[22px] text-white leading-[33px]">
          FAQs
        </div>
      </Link>
      <Link to="">
        <div className="font-poppins font-medium text-[22px] text-white leading-[33px]">
          Visit school website
        </div>
      </Link>
    </div>
  );
}

export default FooterLinks;
