import Table from "../../../../ui/Table";

const columns = [
  "sidebar.sales.importCreditNotes.description",
  "sidebar.sales.importCreditNotes.uploadDate",
  "sidebar.sales.importCreditNotes.importDate",
  "sidebar.sales.importCreditNotes.status",
];
const data = [];

const ImportCreditNotes = () => {
  return <Table columns={columns} data={data} />;
};

export default ImportCreditNotes;
