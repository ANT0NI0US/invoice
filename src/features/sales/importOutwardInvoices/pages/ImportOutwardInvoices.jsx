import Table from "../../../../ui/Table";

const columns = [
  "invoice Number",
  "Debit Number",
  "Note Reference",
  "Debit Note Amount",
  "Debit Note Date",
  "status",
];
const data = [];
const ImportOutwardInvoices = () => {
  return <Table columns={columns} data={data} />;
};

export default ImportOutwardInvoices;
