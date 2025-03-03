import * as Popover from "@radix-ui/react-popover";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const DropdownProgramContainer: React.FC<TProps> = (props) => {
  return (
    <Popover.Content
      className="w-[387px] h-[270px] rounded-3xl border p-lg shadow-lg focus:outline-none p-4"
      style={{
        backgroundColor: "var(--Base-Background, #0C0D0D)",
        borderColor: "var(--Neutral-800, #252B37)",
      }}
      sideOffset={5}
    >
      {props.children}
    </Popover.Content>
  );
};

export default DropdownProgramContainer;
