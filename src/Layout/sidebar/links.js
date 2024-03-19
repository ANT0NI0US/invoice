import routes from "../../navigations/routes";
import { IoMdSettings } from "react-icons/io";
import { IoStatsChartSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { ImFilesEmpty } from "react-icons/im";

const links = [
  {
    label: "sidebar.sales.sales",
    submenuOpenState: "isSalesSubMenuOpen",
    icon: IoStatsChartSharp,
    submenuItems: [
      {
        text: "sidebar.sales.outwardInvoice.outwardInvoice",
        path: routes.outwardInvoice,
      },
      {
        text: "sidebar.sales.manageCustomer.manageCustomer",
        path: routes.manageCustomer,
      },
      {
        text: "sidebar.sales.creditNotes.creditNotes",
        path: routes.creditNotes,
      },
      {
        text: "sidebar.sales.debitNotes.debitNotes",
        path: routes.debitNotes,
      },
      {
        text: "sidebar.sales.importOutwardInvoices.importOutwardInvoices",
        path: routes.importOutwardInvoices,
      },
      {
        text: "sidebar.sales.importCreditNotes.importCreditNotes",
        path: routes.importCreditNotes,
      },
      {
        text: "sidebar.sales.integrationFaliure.integrationFaliure",
        path: routes.integrationFaliure,
      },
    ],
    href: "sales",
    cetegory: "todo",
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
    cetegory: "todo",
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
    cetegory: "todo",
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
