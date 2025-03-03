import { Box, Card } from "@radix-ui/themes";
import React from "react";

type TProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const DropdownMenu: React.FC<TProps> = (props) => {
  return (
    <Card className="p-2 flex mb-5">
      <Card
        className="flex items-center justify-center gap-[5.88px] rounded-xl border mr-4"
        style={{
          width: "48px",
          height: "48px",
          borderWidth: "0.73px",
          padding: "17.63px",
          borderColor: "var(--Neutral-800, #252B37)",
        }}
      >
        {props.icon}
      </Card>
      <Box>
        <h5 className="font-body font-semibold text-sm leading-[1.5rem] tracking-normal">
          {props.title}
        </h5>
        <p
          className="font-body font-normal text-sm leading-[1.5rem] tracking-normal"
          style={{ color: "var(--Neutral-400, #A4A7AE)" }}
        >
          {props.description}
        </p>
      </Box>
    </Card>
  );
};

export default DropdownMenu;
