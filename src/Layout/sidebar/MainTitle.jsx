import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function MainTitle({ setNavigation, navigation }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const ref = useOutsideClick(() => setOpenMenu(false));

  // Determine the clip-path style based on the openMenu state
  const dropdownStyle = {
    clipPath: openMenu
      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 0, 0 0)",
  };

  return (
    <div className="relative cursor-pointer bg-bgColor text-primary">
      <div
        ref={ref}
        className="flexCenter gap-[10px] border-b border-primary p-[10px] capitalize"
        onClick={toggleMenu}
      >
        {navigation}
        <IoIosArrowDown />
      </div>

      <div
        style={dropdownStyle}
        className="absolute bottom-[-90px] left-0 flex w-full flex-col gap-[5px] bg-bgColor text-dark transition-all"
      >
        <span
          className="p-[10px] transition-all hover:bg-primary hover:text-bgColor"
          onClick={() => setNavigation("main")}
        >
          Main
        </span>
        <span
          className="p-[10px] transition-all hover:bg-primary hover:text-bgColor"
          onClick={() => setNavigation("todo")}
        >
          To Do
        </span>
      </div>
    </div>
  );
}
