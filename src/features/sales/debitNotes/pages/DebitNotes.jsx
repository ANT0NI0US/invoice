import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

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

const DebitNotes = () => {
  return (
    <Fragment>
      <Header title="Debit Notes" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default DebitNotes;
