import Table from "../../../../ui/Table";

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
  return <Table columns={columns} data={data} />;
};

export default CreditNotes;
