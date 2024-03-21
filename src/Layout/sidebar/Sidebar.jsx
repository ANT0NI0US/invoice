import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useOutsideClick } from "../../hooks/useOutesideClick";
import { ImFilesEmpty } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Logo from "./Logo";
import MainTitle from "./MainTitle";
import SidebarLinks from "./SidebarLinks";

function Sidebar({ openSidebar, closeSidebar }) {
  const [navigations, setNavigations] = useState("Main");
  const [t] = useTranslation();
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
        <MainTitle setNavigations={setNavigations} />

        {/* Dashboard Icon */}
        {navigations !== "todo" && (
          <div
            onClick={closeSidebar}
            className="flex w-full cursor-pointer items-center justify-between rounded-md p-[10px] font-medium"
          >
            <NavLink
              to={"/dashboard"}
              className="flex w-full items-center gap-[10px] rounded-md p-[10px] font-medium"
            >
              <FaHome />
              {t("sidebar.dashboard.dashboard")}
            </NavLink>
          </div>
        )}

        {/* Sidebar Links */}
        <SidebarLinks navigations={navigations} closeSidebar={closeSidebar} />

        {/* Generate Report Icon */}
        {navigations !== "todo" && (
          <div
            onClick={closeSidebar}
            className="flex w-full cursor-pointer items-center justify-between rounded-md p-[10px] font-medium"
          >
            <NavLink
              to={"/generateReport"}
              className="flex w-full items-center justify-between rounded-md p-[10px] font-medium"
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

export default Sidebar;
