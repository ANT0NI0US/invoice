import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.authorization.manageGroups.id",
  "sidebar.authorization.manageGroups.name",
  "sidebar.authorization.manageGroups.status",
];
const data = [];

const ManageGroups = () => {
  return (
    <Fragment>
      <Header title="sidebar.authorization.manageGroups.manageGroups" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ManageGroups;
