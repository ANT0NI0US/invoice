import Table from "../../../../ui/Table";

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
  return <Table columns={columns} data={data} />;
};

export default IntegrationFailure;
