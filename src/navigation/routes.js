const routes = {
  dashboard: "dashboard",

  outwardInvoice: "sales/OutwardInvoice",
  manageCustomer: "sales/ManageCustomer",
  creditNotes: "sales/CreditNotes",
  debitNotes: "sales/DebitNotes",
  importOutwardInvoices: "sales/ImportOutwardInvoices",
  importCreditNotes: "sales/ImportCreditNotes",
  integrationFailure: "sales/IntegrationFaliure",

  inwardInvoices: "purchases/inwardInvoices",
  manageVendor: "purchases/manageVendor",
  internalInvoices: "purchases/internalInvoices",

  collectedInvoices: "payment/collectedInvoices",

  salesReports: "reports/salesReports",

  manageUser: "authorization/manageUser",
  mangeDepartment: "authorization/mangeDepartment",
  designWorkflow: "authorization/designWorkflow",
  manageDepartments: "authorization/manageDepartments",

  products: "settings/products",
  corporateProfile: "settings/corporateProfile",
  identityDetails: "settings/corporateProfile/identityDetails",
  addressDetails: "settings/corporateProfile/addressDetails",
  invoiceLayout: "settings/corporateProfile/invoiceLayout",
  configurations: "settings/corporateProfile/configurations",
  customFields: "settings/customFields",
  zatcaConfigurations: "settings/zatcaConfigurations",
  sequenceGenerator: "settings/sequenceGenerator",
  notifications: "settings/notifications",

  generateReport: "generateReport",
};

export default routes;
