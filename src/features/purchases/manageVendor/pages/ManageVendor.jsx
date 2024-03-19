import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.purchases.manageVendor.code",
  "sidebar.purchases.manageVendor.englishName",
  "sidebar.purchases.manageVendor.email",
  "sidebar.purchases.manageVendor.mobile",
  "sidebar.purchases.manageVendor.status",
];
const data = [];

const ManageVendor = () => {
  return (
    <Fragment>
      <Header title="Manage Vendor" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ManageVendor;
