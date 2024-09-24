import React from "react";
import AchieverLogo from "./AchieverLogo";
import NavLinks from "./Pages Link/NavLinks";

function Nav({ navlinks, signedIn }) {
  const between = navlinks || signedIn ? "justify-between" : "justify-start";
  return (
    <header
      className={`w-full bg-gradient-to-br from-#998d8d to-white px-[83.5px] py-[33.33px] flex ${between} border`}
    >
      <nav className={`flex ${between} relative w-full`}>
        <AchieverLogo />
        {navlinks ? <NavLinks /> : ""}
      </nav>
    </header>
  );
}

export default Nav;
