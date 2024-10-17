import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.authorization.manageUser.id",
  "sidebar.authorization.manageUser.displayName",
  "sidebar.authorization.manageUser.userName",
  "sidebar.authorization.manageUser.department",
];
const data = [];

export default function ManageUser() {
  return (
    <>
      <Header title="sidebar.authorization.manageUser.manageUser" />
      <Table columns={columns} data={data} />
    </>
  );
}
