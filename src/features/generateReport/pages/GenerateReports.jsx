import Header from "@/ui/Header";
import Table from "@/ui/Table";

const columns = [
  "sidebar.generateReport.title",
  "sidebar.generateReport.requestedOn",
  "sidebar.generateReport.status",
];
const data = [];

export default function GenerateReports() {
  return (
    <>
      <Header title="sidebar.generateReport.reportRequests" />
      <Table columns={columns} data={data} />
    </>
  );
}
