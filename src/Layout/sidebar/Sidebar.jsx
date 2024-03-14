import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { IoMdHome } from "react-icons/io";
import { useOutsideClick } from "../../hooks/useOutesideClick";
import logoImage from "/public/logo.png";

function Sidebar({ openSidebar, closeSidebar }) {
  const [t] = useTranslation();

  const [menuItems, setMenuItems] = useState([
    {
      label: `${t("sidebar.Home")}`,
      submenuOpenState: "isHomeSubMenuOpen",
      submenuItems: ["One", "Two", "Three"],
    },
    {
      label: "New Option",
      submenuOpenState: "isNewOptionSubMenuOpen",
      submenuItems: ["Four", "Five", "Six"],
    },
  ]);

  const toggleSubMenu = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index][menuItems[index].submenuOpenState] =
      !updatedMenuItems[index][menuItems[index].submenuOpenState];
    setMenuItems(updatedMenuItems);
  };

  const ref = useOutsideClick(() => closeSidebar());

  // shadow-[1px_0px_7px_rgb(0,0,0,0.5)]

  return (
    <>
      {/* Overlay for the sidebar */}
      {openSidebar && (
        <div className="absolute left-0 top-0 h-full w-full bg-[#00000080] sm:hidden"></div>
      )}

      <nav
        ref={ref}
        className={`links-list absolute top-0 h-[100vh]  w-[250px] bg-bgColor transition-all sm:static
        sm:h-[calc(100vh-113px)] sm:w-[300px] ${openSidebar ? "ltr:left-0 rtl:right-0" : "ltr:left-[-300px] rtl:right-[-300px]"}`}
      >
        <div className="block sm:hidden">
          <img
            src={logoImage}
            alt="logo"
            className="mx-auto my-[20px] w-[150px]"
          />
        </div>

        {menuItems.map((item, index) => (
          <div className="mb-[3px]" key={index}>
            <div
              className="flex w-full cursor-pointer items-center justify-between bg-[#ccc] p-[10px]"
              onClick={() => toggleSubMenu(index)}
            >
              <div className="flex items-center gap-[10px]">
                <IoMdHome />
                {item.label}
              </div>

              <IoIosArrowDown
                className={`${menuItems[index][item.submenuOpenState] && "rotate-[180deg]"} transition-all `}
              />
            </div>

            {menuItems[index][item.submenuOpenState] && (
              <ul
                className="text-gray-200 mx-auto mt-3 w-[90%] border-l bg-[#eee] text-left text-sm font-bold transition-all "
                id={`submenu-${index}`}
              >
                {item.submenuItems.map((submenuItem, subIndex) => (
                  <li
                    className="hover:bg-blue-600 mt-1 cursor-pointer rounded-md p-2"
                    key={subIndex}
                  >
                    {submenuItem}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

export default Sidebar;
