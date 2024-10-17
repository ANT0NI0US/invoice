import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.purchases.manageVendor.code",
  "sidebar.purchases.manageVendor.englishName",
  "sidebar.purchases.manageVendor.email",
  "sidebar.purchases.manageVendor.mobile",
  "sidebar.purchases.manageVendor.status",
];
const data = [];

export default function ManageVendor() {
  return (
    <>
      <Header title="sidebar.purchases.manageVendor.manageVendor" />
      <Table columns={columns} data={data} />
    </>
  );
}
