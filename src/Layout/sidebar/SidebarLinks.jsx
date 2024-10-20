import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import links from "./links";

export default function SidebarLinks({ navigation, closeSidebar }) {
  const [menuItems, setMenuItems] = useState([]);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    let filteredLinks = links;
    if (navigation === "todo") {
      filteredLinks = links.filter((link) => link?.category === "todo");
    }
    setMenuItems(filteredLinks);
  }, [navigation]);

  const toggleSubMenu = (index) => {
    const updatedMenuItems = menuItems.map((item, idx) => {
      if (idx === index) {
        // Toggle the submenu of the clicked item
        return {
          ...item,
          [item.submenuOpenState]: !item[item.submenuOpenState],
        };
      } else {
        // Close the submenu of other items
        return {
          ...item,
          [item.submenuOpenState]: false,
        };
      }
    });
    setMenuItems(updatedMenuItems);
  };

  return (
    <div>
      {menuItems?.map((item, index) => {
        const { icon: Icon } = item;

        // Check if the current route matches the item's href
        const isActive =
          location.pathname?.split("/")?.[1] ===
          item?.href?.toLocaleLowerCase();

        return (
          <div key={index} className={`p-[10px] `}>
            <div
              className={`flexBetween w-full cursor-pointer rounded-md p-[10px] font-medium ${isActive ? "active" : ""}`}
              onClick={() => toggleSubMenu(index)}
            >
              <div className="flex items-center gap-[10px]">
                {Icon && <Icon />}
                {t(`${item.label}`)}
              </div>

              {/* Arrows For ltr and Rtl directions */}
              <IoIosArrowForward
                className={`${menuItems[index][item.submenuOpenState] && item.submenuItems.length > 0 ? "rotate-[90deg]" : ""} transition-all rtl:hidden`}
              />

              <IoIosArrowBack
                className={`${menuItems[index][item.submenuOpenState] && item.submenuItems.length > 0 ? "rotate-[-90deg]" : ""} transition-all ltr:hidden`}
              />
            </div>

            {menuItems[index][item.submenuOpenState] && (
              <div
                onClick={closeSidebar}
                className="mx-auto mt-3 w-[90%] border-gray px-3 text-left text-sm font-bold transition-all ltr:border-l-2 rtl:border-r-2"
                id={`submenu-${index}`}
              >
                {item.submenuItems.map((submenuItem, subIndex) => (
                  <NavLink
                    to={submenuItem.path}
                    className="mt-1 block cursor-pointer list-none rounded-md p-2 text-[16px] text-lightB ltr:text-left rtl:text-right"
                    key={subIndex}
                  >
                    {t(`${submenuItem.text}`)}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
