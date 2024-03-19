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
    label: "sidebar.purchases.purchases",
    submenuOpenState: "isPurchasesSubMenuOpen",
    icon: LiaMoneyBillWaveSolid,
    submenuItems: [
      {
        text: "sidebar.purchases.inwardInvoices.inwardInvoices",
        path: routes.inwardInvoices,
      },
      {
        text: "sidebar.purchases.manageVendor.manageVendor",
        path: routes.manageVendor,
      },
      {
        text: "sidebar.purchases.internalInvoices.internalInvoices",
        path: routes.internalInvoices,
      },
    ],
    href: "purchases",
    cetegory: "todo",
  },

  {
    label: "sidebar.payment.payment",
    submenuOpenState: "isPaymentSubMenuOpen",
    icon: RiMoneyDollarCircleLine,
    submenuItems: [
      {
        text: "sidebar.payment.collectedInvoices.collectedInvoices",
        path: routes.collectedInvoices,
      },
    ],
    href: "payment",
  },

  {
    label: "sidebar.reports.reports",
    submenuOpenState: "isReportsSubMenuOpen",
    icon: GrDocumentText,
    submenuItems: [
      {
        text: "sidebar.reports.salesReports.salesReports",
        path: routes.salesReports,
      },
    ],
    href: "reports",
  },

  {
    label: "sidebar.authorization.authorization",
    submenuOpenState: "isAuthorizationSubMenuOpen",
    icon: IoShieldCheckmarkSharp,
    submenuItems: [
      {
        text: "sidebar.authorization.manageUser.manageUser",
        path: routes.manageUser,
      },
      {
        text: "sidebar.authorization.manageGroups.manageGroups",
        path: routes.mangeDepartment,
      },
      {
        text: "sidebar.authorization.designWorkflow.designWorkflow",
        path: routes.designWorkflow,
      },
      {
        text: "sidebar.authorization.manageDepartments.manageDepartments",
        path: routes.manageDepartments,
      },
    ],
    href: "authorization",
    cetegory: "todo",
  },
  {
    label: "sidebar.settings.settings",
    submenuOpenState: "isSettingsSubMenuOpen",
    icon: IoMdSettings,
    submenuItems: [
      {
        text: "sidebar.settings.products.products",
        path: routes.products,
      },
      {
        text: "sidebar.settings.corporateProfile.corporateProfile",
        path: routes.corporateProfile,
      },
      {
        text: "sidebar.settings.customFields.customFields",
        path: routes.customFields,
      },
      {
        text: "sidebar.settings.zatcaConfigurations.zatcaConfigurations",
        path: routes.zatcaConfigurations,
      },
      {
        text: "sidebar.settings.sequenceGenerator.sequenceGenerator",
        path: routes.sequenceGenerator,
      },
      {
        text: "sidebar.settings.notifications.notifications",
        path: routes.notifications,
      },
    ],
    href: "settings",
  },
  {
    label: "sidebar.generateReport.generateReport",
    submenuOpenState: "isGenerateReportSubMenuOpen",
    icon: ImFilesEmpty,
    submenuItems: [],
    href: "generateReport",
  },
];

export default links;
