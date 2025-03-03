import React from "react";
import Logo from "../_components/_molecules/logo";

const Footer: React.FC = () => {
  return (
    <div
      id="footer"
      className="fixed bottom-0 w-full bg-[#0A0D1299] z-50 border-b border-[#252B37]"
    >
      <div className="flex justify-between items-center px-[44px] md:px-[176px] h-full">
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
