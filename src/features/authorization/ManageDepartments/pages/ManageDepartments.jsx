import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.authorization.manageDepartments.id",
  "sidebar.authorization.manageDepartments.departmentName",
  "sidebar.authorization.manageDepartments.manager",
];
const data = [];

export default function ManageDepartments() {
  return (
    <>
      <Header title="sidebar.authorization.manageDepartments.manageDepartments" />
      <Table columns={columns} data={data} />
    </>
  );
}
