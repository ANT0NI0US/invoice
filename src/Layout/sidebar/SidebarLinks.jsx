import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward, IoMdSettings } from "react-icons/io";
import { IoStatsChartSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { ImFilesEmpty } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function SidebarLinks() {
  const [t] = useTranslation();

  const [menuItems, setMenuItems] = useState([
    {
      label: `${t("sidebar.sales")}`,
      submenuOpenState: "isSalesSubMenuOpen",
      icon: IoStatsChartSharp,
      submenuItems: [
        t("sidebar.outwardInvoice"),
        t("sidebar.manageCustomer"),
        t("sidebar.creditNotes"),
        t("sidebar.debitNotes"),
        t("sidebar.importOutwardInvoices"),
        t("sidebar.importCreditNotes"),
      ],
      href: "sales",
    },
    {
      label: `${t("sidebar.purchases")}`,
      submenuOpenState: "isPurchasesSubMenuOpen",
      icon: LiaMoneyBillWaveSolid,
      submenuItems: [
        t("sidebar.inwardInvoices"),
        t("sidebar.manageVendor"),
        t("sidebar.internalInvoices"),
      ],
      href: "purchases",
    },

    {
      label: `${t("sidebar.payment")}`,
      submenuOpenState: "isPaymentSubMenuOpen",
      icon: RiMoneyDollarCircleLine,
      submenuItems: [t("sidebar.collectedInvoices")],
      href: "payment",
    },

    {
      label: `${t("sidebar.reports")}`,
      submenuOpenState: "isReportsSubMenuOpen",
      icon: GrDocumentText,
      submenuItems: [t("sidebar.salesReports")],
      href: "reports",
    },

    {
      label: `${t("sidebar.authorization")}`,
      submenuOpenState: "isAuthorizationSubMenuOpen",
      icon: IoShieldCheckmarkSharp,
      submenuItems: [
        t("sidebar.manageUser"),
        t("sidebar.mangeDepartment"),
        t("sidebar.designWorkflow"),
        t("sidebar.manageDepartments"),
      ],
      href: "authorization",
    },
    {
      label: `${t("sidebar.settings")}`,
      submenuOpenState: "isSettingsSubMenuOpen",
      icon: IoMdSettings,
      submenuItems: [
        t("sidebar.products"),
        t("sidebar.corporateProfile"),
        t("sidebar.customFields"),
        t("sidebar.zatcaConfigurations"),
        t("sidebar.sequenceGenerator"),
        t("sidebar.notifications"),
      ],
      href: "settings",
    },
    {
      label: `${t("sidebar.generateReport")}`,
      submenuOpenState: "isGenerateReportSubMenuOpen",
      icon: ImFilesEmpty,
      submenuItems: [],
      href: "generateReport",
    },
  ]);

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
                {item.label}
              </div>

              <IoIosArrowForward
                className={`${menuItems[index][item.submenuOpenState] && item.submenuItems.length > 0 ? "rotate-[90deg]" : ""} transition-all`}
              />
            </NavLink>

            {menuItems[index][item.submenuOpenState] && (
              <div
                className="mx-auto mt-3 w-[90%] border-l text-left text-sm font-bold transition-all"
                id={`submenu-${index}`}
              >
                {item.submenuItems.map((submenuItem, subIndex) => (
                  <li
                    className="mt-1 cursor-pointer rounded-md p-2"
                    key={subIndex}
                  >
                    {submenuItem}
                  </li>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
