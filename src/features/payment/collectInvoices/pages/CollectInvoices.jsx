import Table from "@/ui/Table";
import Header from "@/ui/Header";

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

export default function CollectInvoices() {
  return (
    <>
      <Header title="sidebar.payment.collectedInvoices.collectedInvoices" />
      <Table columns={columns} data={data} />
    </>
  );
}
