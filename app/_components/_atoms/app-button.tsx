import { Button, ButtonProps } from "@radix-ui/themes";
import React from "react";

type TProps = ButtonProps;

const AppButton: React.FC<TProps> = (props) => {
  return (
    <Button
      {...props}
      className="w-[197px] h-[44px] gap-[4px] rounded-full p-[8px] bg-[#FDFDFD] text-[#0A0D12] transition-colors duration-[1ms] ease-in-out hover:bg-[#F0F0F0]"
    />
  );
};

export default AppButton;
