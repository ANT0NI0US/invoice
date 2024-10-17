import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.sales.debitNotes.invoiceNumber",
  "sidebar.sales.debitNotes.debitNumber",
  "sidebar.sales.debitNotes.noteReference",
  "sidebar.sales.debitNotes.debitNoteAmount",
  "sidebar.sales.debitNotes.debitNoteDate",
  "sidebar.sales.debitNotes.status",
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

export default function DebitNotes() {
  return (
    <>
      <Header title="sidebar.sales.debitNotes.debitNotes" />
      <Table columns={columns} data={data} />
    </>
  );
}
