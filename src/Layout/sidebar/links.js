import routes from "@/navigation/routes";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { SlChart } from "react-icons/sl";
import { BsShieldCheck } from "react-icons/bs";

const links = [
  {
    label: "sidebar.sales.sales",
    submenuOpenState: "isSalesSubMenuOpen",
    icon: SlChart,
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
        text: "sidebar.sales.integrationFailure.integrationFailure",
        path: routes.integrationFailure,
      },
    ],
    href: "sales",
    category: "todo",
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
    category: "todo",
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
    icon: BsShieldCheck,
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
    category: "todo",
  },
  {
    label: "sidebar.settings.settings",
    submenuOpenState: "isSettingsSubMenuOpen",
    icon: IoSettingsOutline,
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
];

export default links;
