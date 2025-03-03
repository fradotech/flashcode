import Image from "next/image";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div
      className="flex items-center gap-4"
      style={{ width: "157px", height: "32px" }}
    >
      <Image width={28} height={32} src={"/flashcode.png"} alt={"icon"} />
      <span className="font-display font-semibold text-[22.4px] leading-[30.4px] tracking-normal">
        FlashCode
      </span>
    </div>
  );
};

export default Logo;
