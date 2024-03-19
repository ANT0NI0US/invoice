import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.sales.creditNotes.invoiceNumber",
  "sidebar.sales.creditNotes.creditNumber",
  "sidebar.sales.creditNotes.noteReference",
  "sidebar.sales.creditNotes.refundedAmount",
  "sidebar.sales.creditNotes.refundDate",
  "sidebar.sales.creditNotes.status",
];
const data = [
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Refunded Amount",
    "Refund Date",
    "Active",
  ],
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Refunded Amount",
    "Refund Date",
    "Active",
  ],
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Refunded Amount",
    "Refund Date",
    "Active",
  ],
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Refunded Amount",
    "Refund Date",
    "Active",
  ],
];
const CreditNotes = () => {
  return (
    <Fragment>
      <Header title="sidebar.sales.creditNotes.creditNotes" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default CreditNotes;
