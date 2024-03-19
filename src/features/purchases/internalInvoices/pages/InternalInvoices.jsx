import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.purchases.internalInvoices.invoiceNumber",
  "sidebar.purchases.internalInvoices.vender",
  "sidebar.purchases.internalInvoices.invoiceAmount",
  "sidebar.purchases.internalInvoices.netInvoiceAmount",
  "sidebar.purchases.internalInvoices.dueDate",
  "sidebar.purchases.internalInvoices.notes",
  "sidebar.purchases.internalInvoices.status",
];
const data = [];
const InternalInvoices = () => {
  return (
    <Fragment>
      <Header title="Internal Invoices" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default InternalInvoices;
