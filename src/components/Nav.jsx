import React from "react";
import AchieverLogo from "./AchieverLogo";
import NavLinks from "./Pages Link/NavLinks";

function Nav({ navlinks, signedIn }) {
  const between = navlinks || signedIn ? "justify-between" : "justify-start";
  return (
    <header
      className={`w-full bg-gradient-to-br from-[#e0e0e0] to-white px-[83.5px] py-[33.33px] flex ${between} border`}
    >
      <nav className={`w-full flex ${between} relative items-center`}>
        <AchieverLogo />
        {navlinks ? <NavLinks /> : ""}
      </nav>
    </header>
  );
}

export default Nav;
