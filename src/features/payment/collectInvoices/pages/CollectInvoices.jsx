import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.payment.collectedInvoices.invoiceNumber",
  "sidebar.payment.collectedInvoices.customer",
  "sidebar.payment.collectedInvoices.paymentDate",
  "sidebar.payment.collectedInvoices.invoiceAmount",
  "sidebar.payment.collectedInvoices.paymentAmount",
  "sidebar.payment.collectedInvoices.dueAmount",
  "sidebar.payment.collectedInvoices.channel",
  "sidebar.payment.collectedInvoices.status",
];
const data = [];

const CollectInvoices = () => {
  return (
    <Fragment>
      <Header title="Collect Invoices" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default CollectInvoices;
