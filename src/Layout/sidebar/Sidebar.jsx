import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ImFilesEmpty } from "react-icons/im";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineHome } from "react-icons/md";
import SidebarLinks from "./SidebarLinks";
import Logo from "./Logo";
import MainTitle from "./MainTitle";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export default function Sidebar({ openSidebar, closeSidebar }) {
  const [navigation, setNavigation] = useState("main");
  const { t } = useTranslation();
  const ref = useOutsideClick(() => closeSidebar());

  return (
    <div>
      {/* Overlay for the sidebar */}
      {openSidebar && (
        <div className="absolute left-0 top-0 z-[100] h-full w-full bg-[#00000080] md:hidden"></div>
      )}

      <nav
        ref={ref}
        className={`links-list absolute top-0 z-[101] h-[100vh] w-[270px] overflow-y-auto bg-lightRed transition-all md:static md:w-[300px] 
        ${openSidebar ? "ltr:left-0 rtl:right-0" : "ltr:left-[-300px] rtl:right-[-300px]"} shadow-[0_0_1.5px_#576E7E] `}
        style={{
          scrollbarWidth: "none",
          scrollbarColor: "transparent transparent",
        }}
      >
        {/* Logo Image */}
        <Logo />

        {/* Main Title (Main or To Do) */}
        <MainTitle setNavigation={setNavigation} navigation={navigation} />

        {/* Dashboard Icon */}
        {navigation !== "todo" && (
          <div
            onClick={closeSidebar}
            className="flexBetween w-full cursor-pointer rounded-md p-[10px] font-medium"
          >
            <NavLink
              to={"/dashboard"}
              className="flex w-full items-center gap-[10px] rounded-md p-[10px] font-medium"
            >
              <MdOutlineHome />
              {t("sidebar.dashboard.dashboard")}
            </NavLink>
          </div>
        )}

        {/* Sidebar Links */}
        <SidebarLinks navigation={navigation} closeSidebar={closeSidebar} />

        {/* Generate Report Icon */}
        {navigation !== "todo" && (
          <div
            onClick={closeSidebar}
            className="flexBetween w-full cursor-pointer rounded-md p-[10px] font-medium"
          >
            <NavLink
              to={"/generateReport"}
              className="flexBetween w-full rounded-md p-[10px] font-medium"
            >
              <div className="flex  gap-[10px]">
                <ImFilesEmpty />
                {t("sidebar.generateReport.generateReport")}
              </div>

              {/* Arrows For ltr and Rtl directions */}
              <IoIosArrowForward className={`transition-all rtl:hidden`} />

              <IoIosArrowBack className={`transition-all ltr:hidden`} />
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
