import { ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import AppButton from "../_components/_atoms/app-button";
import Logo from "../_components/_molecules/logo";
import HeaderNavbar from "./_header/header-navbar";

const Header: React.FC = () => {
  return (
    <div
      id="header"
      className="fixed top-0 w-full h-[84px] backdrop-blur bg-[#0A0D1299] z-50 border-b border-[#252B37]"
    >
      <div className="flex justify-between items-center px-[44px] md:px-[176px] h-full">
        <Logo />
        <HeaderNavbar />
        <div>
          <AppButton>
            <span className="font-body font-medium text-sm leading-[1.5rem] tracking-normal flex items-center justify-center gap-1">
              Daftar Sekarang
              <ChevronRightIcon />
            </span>
          </AppButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
