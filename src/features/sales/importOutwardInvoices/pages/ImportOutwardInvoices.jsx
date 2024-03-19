import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

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
  return (
    <Fragment>
      <Header title="Import Outward Invoices" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ImportOutwardInvoices;
