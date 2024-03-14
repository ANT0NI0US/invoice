import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { IoMdHome } from "react-icons/io";

function Sidebar({ openSidebar }) {
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

  return (
    <>
      <nav
        className={`links-list transition-all ${openSidebar ? "w-[50px]" : "sm:w-[257px]"}`}
      >
        {menuItems.map((item, index) => (
          <div className="mb-[20px]" key={index}>
            <div
              className="flex w-full cursor-pointer items-center justify-between bg-[#ccc] p-[10px]"
              onClick={() => toggleSubMenu(index)}
            >
              <div className="flex items-center gap-[10px]">
                <IoMdHome />
                {!openSidebar && item.label}
              </div>

              {!openSidebar && (
                <IoIosArrowDown
                  className={`${menuItems[index][item.submenuOpenState] && "rotate-[180deg]"} transition-all `}
                />
              )}
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
