import { ChevronDownIcon, DesktopIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineTranslate } from "react-icons/md";
import { PiTargetBold } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import DropdownMenu from "./dropdown-menu";
import DropdownProgramContainer from "./dropdown-program-container";

const HeaderNavbar: React.FC = () => {
  const classNameButton =
    "font-body font-normal text-sm leading-[1.5rem] tracking-normal flex items-center justify-center gap-1 cursor-pointer";

  return (
    <div className="flex items-center gap-[48px]">
      <span className={classNameButton}>Beranda</span>
      <Popover.Root>
        <Popover.Trigger asChild>
          <span className={classNameButton}>
            Program <ChevronDownIcon />
          </span>
        </Popover.Trigger>
        <DropdownProgramContainer>
          <DropdownMenu
            icon={<BsCodeSlash />}
            title="Bootcamp"
            description="Belajar intensif hingga siap kerja"
          />
          <DropdownMenu
            icon={<DesktopIcon />}
            title="Webinar"
            description="Insight langsung dari para ahli"
          />
          <DropdownMenu
            icon={<MdOutlineTranslate />}
            title="Kelas Inggris"
            description="Kuasai bahasa untuk karier global"
          />
        </DropdownProgramContainer>
      </Popover.Root>
      <Popover.Root>
        <Popover.Trigger asChild>
          <span className={classNameButton}>
            Tentang Kami <ChevronDownIcon />
          </span>
        </Popover.Trigger>
        <DropdownProgramContainer>
          <DropdownMenu
            icon={<IoMdInformationCircleOutline />}
            title="Tentang Kami"
            description="Komitmen kami untuk pendidikan"
          />
          <DropdownMenu
            icon={<PiTargetBold />}
            title="Visi dan Misi"
            description="Membangun masa depan"
          />
          <DropdownMenu
            icon={<TiMessages />}
            title="FAQ"
            description="Jawaban untuk pertanyaanmu"
          />
        </DropdownProgramContainer>{" "}
      </Popover.Root>
      <span className={classNameButton}>Blog</span>
    </div>
  );
};

export default HeaderNavbar;
