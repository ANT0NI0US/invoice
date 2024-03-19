import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.reports.salesReports.invoiceNumber",
  "sidebar.reports.salesReports.issueDate",
  "sidebar.reports.salesReports.customer",
  "sidebar.reports.salesReports.invoiceAmount",
  "sidebar.reports.salesReports.paidAmount",
  "sidebar.reports.salesReports.status",
];
const data = [];

const SalesReports = () => {
  return (
    <Fragment>
      <Header title="sidebar.reports.salesReports.salesReports" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default SalesReports;
