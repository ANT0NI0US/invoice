import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.authorization.manageUser.id",
  "sidebar.authorization.manageUser.displayName",
  "sidebar.authorization.manageUser.userName",
  "sidebar.authorization.manageUser.department",
];
const data = [];

const ManageUser = () => {
  return (
    <Fragment>
      <Header title="Manage User" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ManageUser;
