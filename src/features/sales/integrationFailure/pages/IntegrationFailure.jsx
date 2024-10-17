import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.sales.integrationFailure.id",
  "sidebar.sales.integrationFailure.subReference",
  "sidebar.sales.integrationFailure.majorReference",
  "sidebar.sales.integrationFailure.dueAmount",
  "sidebar.sales.integrationFailure.integrationTarget",
  "sidebar.sales.integrationFailure.invoiceType",
  "sidebar.sales.integrationFailure.invoiceModel",
  "sidebar.sales.integrationFailure.retryCounts",
];
const data = [];

export default function IntegrationFailure() {
  return (
    <>
      <Header title="sidebar.sales.integrationFailure.integrationFailure" />
      <Table columns={columns} data={data} />
    </>
  );
}
