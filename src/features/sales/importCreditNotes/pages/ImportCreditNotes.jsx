import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.sales.importCreditNotes.description",
  "sidebar.sales.importCreditNotes.uploadDate",
  "sidebar.sales.importCreditNotes.importDate",
  "sidebar.sales.importCreditNotes.status",
];
const data = [];

const ImportCreditNotes = () => {
  return (
    <Fragment>
      <Header title="Import Credit Notes" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ImportCreditNotes;
