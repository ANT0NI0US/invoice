import routes from "../../navigations/routes";
import { IoMdSettings } from "react-icons/io";
import { IoStatsChartSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { ImFilesEmpty } from "react-icons/im";

const links = [
  {
    label: "sidebar.sales",
    submenuOpenState: "isSalesSubMenuOpen",
    icon: IoStatsChartSharp,
    submenuItems: [
      {
        text: "sidebar.outwardInvoice",
        path: routes.outwardInvoice,
      },
      {
        text: "sidebar.manageCustomer",
        path: routes.manageCustomer,
      },
      {
        text: "sidebar.creditNotes",
        path: routes.creditNotes,
      },
      {
        text: "sidebar.debitNotes",
        path: routes.debitNotes,
      },
      {
        text: "sidebar.importOutwardInvoices",
        path: routes.importOutwardInvoices,
      },
      {
        text: "sidebar.importCreditNotes",
        path: routes.importCreditNotes,
      },
    ],
    href: "sales",
  },
  {
    label: "sidebar.purchases",
    submenuOpenState: "isPurchasesSubMenuOpen",
    icon: LiaMoneyBillWaveSolid,
    submenuItems: [
      {
        text: "sidebar.inwardInvoices",
        path: routes.inwardInvoices,
      },
      {
        text: "sidebar.manageVendor",
        path: routes.manageVendor,
      },
      {
        text: "sidebar.internalInvoices",
        path: routes.internalInvoices,
      },
    ],
    href: "purchases",
  },

  {
    label: "sidebar.payment",
    submenuOpenState: "isPaymentSubMenuOpen",
    icon: RiMoneyDollarCircleLine,
    submenuItems: [
      {
        text: "sidebar.collectedInvoices",
        path: routes.collectedInvoices,
      },
    ],
    href: "payment",
  },

  {
    label: "sidebar.reports",
    submenuOpenState: "isReportsSubMenuOpen",
    icon: GrDocumentText,
    submenuItems: [
      {
        text: "sidebar.salesReports",
        path: routes.salesReports,
      },
    ],
    href: "reports",
  },

  {
    label: "sidebar.authorization",
    submenuOpenState: "isAuthorizationSubMenuOpen",
    icon: IoShieldCheckmarkSharp,
    submenuItems: [
      {
        text: "sidebar.manageUser",
        path: routes.manageUser,
      },
      {
        text: "sidebar.mangeDepartment",
        path: routes.mangeDepartment,
      },
      {
        text: "sidebar.designWorkflow",
        path: routes.designWorkflow,
      },
      {
        text: "sidebar.manageDepartments",
        path: routes.manageDepartments,
      },
    ],
    href: "authorization",
  },
  {
    label: "sidebar.settings",
    submenuOpenState: "isSettingsSubMenuOpen",
    icon: IoMdSettings,
    submenuItems: [
      {
        text: "sidebar.products",
        path: routes.products,
      },
      {
        text: "sidebar.corporateProfile",
        path: routes.corporateProfile,
      },
      {
        text: "sidebar.customFields",
        path: routes.customFields,
      },
      {
        text: "sidebar.zatcaConfigurations",
        path: routes.zatcaConfigurations,
      },
      {
        text: "sidebar.sequenceGenerator",
        path: routes.sequenceGenerator,
      },
      {
        text: "sidebar.notifications",
        path: routes.notifications,
      },
    ],
    href: "settings",
  },
  {
    label: "sidebar.generateReport",
    submenuOpenState: "isGenerateReportSubMenuOpen",
    icon: ImFilesEmpty,
    submenuItems: [],
    href: "generateReport",
  },
];

export default links;
