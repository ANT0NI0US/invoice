import Table from "../../../../ui/Table";

const columns = [
  "sidebar.sales.importOutwardInvoices.invoiceNumber",
  "sidebar.sales.importOutwardInvoices.debitNumber",
  "sidebar.sales.importOutwardInvoices.noteReference",
  "sidebar.sales.importOutwardInvoices.debitNoteAmount",
  "sidebar.sales.importOutwardInvoices.debitNoteDate",
  "sidebar.sales.importOutwardInvoices.status",
];
const data = [];
const ImportOutwardInvoices = () => {
  return <Table columns={columns} data={data} />;
};

export default ImportOutwardInvoices;
