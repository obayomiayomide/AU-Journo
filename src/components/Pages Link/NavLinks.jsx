import React from "react";

function NavLinks({ link }) {
  return (
    <div className="w-[400px] h-[30px] flex justify-between">
      <div className="font-poppins font-medium text-[22px] leading-[33px]">
        About us
      </div>
      <div className="font-poppins font-medium text-[22px] leading-[33px]">
        Register
      </div>
      <div className="font-poppins font-medium text-[22px] leading-[33px]">
        Login
      </div>
    </div>
  );
}

export default NavLinks;
