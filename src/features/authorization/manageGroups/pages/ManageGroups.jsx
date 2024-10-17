import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.authorization.manageGroups.id",
  "sidebar.authorization.manageGroups.name",
  "sidebar.authorization.manageGroups.status",
];
const data = [];

export default function ManageGroups() {
  return (
    <>
      <Header title="sidebar.authorization.manageGroups.manageGroups" />
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </>
  );
}
