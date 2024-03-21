import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.sales.importOutwardInvoices.description",
  "sidebar.sales.importOutwardInvoices.uploadDate",
  "sidebar.sales.importOutwardInvoices.importDate",
  "sidebar.sales.importOutwardInvoices.status",
];
const data = [];
const ImportOutwardInvoices = () => {
  return (
    <Fragment>
      <Header title="sidebar.sales.importOutwardInvoices.importOutwardInvoices" />
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </Fragment>
  );
};

export default ImportOutwardInvoices;
