import Table from "../../../../ui/Table";

const columns = [
  "invoice Number",
  "Debit Number",
  "Note Reference",
  "Debit Note Amount",
  "Debit Note Date",
  "status",
];
const data = [
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Debit Note Amount",
    "Debit Note Date",
    "Active",
  ],
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Debit Note Amount",
    "Debit Note Date",
    "Active",
  ],
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Debit Note Amount",
    "Debit Note Date",
    "Active",
  ],
  [
    "5",
    "8451651516546545",
    "Note Reference",
    "Debit Note Amount",
    "Debit Note Date",
    "Active",
  ],

];

const DebitNotes = () => {
  return <Table columns={columns} data={data} />;
};

export default DebitNotes;
