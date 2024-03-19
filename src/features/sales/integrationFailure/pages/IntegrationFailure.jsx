import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.sales.integrationFaliure.id",
  "sidebar.sales.integrationFaliure.subReference",
  "sidebar.sales.integrationFaliure.dueAmount",
  "sidebar.sales.integrationFaliure.integrationTarget",
  "sidebar.sales.integrationFaliure.invoiceType",
  "sidebar.sales.integrationFaliure.invoiceModel",
  "sidebar.sales.integrationFaliure.retryCounts",
];
const data = [];
const IntegrationFailure = () => {
  return (
    <Fragment>
      <Header title="Integration Failure" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default IntegrationFailure;
