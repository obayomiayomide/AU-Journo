import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="w-[400px] h-[30px] flex justify-between">
      <NavLink>
        <div className="font-poppins font-medium text-[22px] leading-[33px]">
          About us
        </div>
      </NavLink>
      <NavLink to="/register">
        <div className="font-poppins font-medium text-[22px] leading-[33px]">
          Register
        </div>
      </NavLink>
      <NavLink to="/login">
        <div className="font-poppins font-medium text-[22px] leading-[33px]">
          Login
        </div>
      </NavLink>
    </div>
  );
}

export default NavLinks;
