import Table from "../../../../ui/Table";

const columns = [
  "invoice Number",
  "Credit Number",
  "Note Reference",
  "Refunded Amount",
  "Refund Date",
  "status",
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
