import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import links from "./links";

export default function SidebarLinks() {
  const [t] = useTranslation();

  const [menuItems, setMenuItems] = useState(links);

  const toggleSubMenu = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index][menuItems[index].submenuOpenState] =
      !updatedMenuItems[index][menuItems[index].submenuOpenState];
    setMenuItems(updatedMenuItems);
  };

  return (
    <div>
      {menuItems?.map((item, index) => {
        const { icon: Icon } = item;

        return (
          <div key={index} className="p-[10px]">
            <NavLink
              to={"/"}
              className="flex w-full cursor-pointer items-center justify-between rounded-md p-[10px] font-medium"
              onClick={() => toggleSubMenu(index)}
            >
              <div className="flex items-center gap-[10px]">
                {Icon && <Icon />}
                {t(`${item.label}`)}
              </div>

              <IoIosArrowForward
                className={`${menuItems[index][item.submenuOpenState] && item.submenuItems.length > 0 ? "rotate-[90deg]" : ""} transition-all`}
              />
            </NavLink>

            {menuItems[index][item.submenuOpenState] && (
              <div
                className=" mx-auto mr-[2px] mt-3 w-[90%] border-l-2 border-gray pl-3 text-left text-sm font-bold transition-all"
                id={`submenu-${index}`}
              >
                {item.submenuItems.map((submenuItem, subIndex) => (
                  <Link
                    to={submenuItem.path}
                    className="block mt-1 cursor-pointer list-none rounded-md p-2 text-[16px] text-lightB"
                    key={subIndex}
                  >
                    {t(`${submenuItem.text}`)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
