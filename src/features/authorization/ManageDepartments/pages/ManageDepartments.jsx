import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.authorization.manageDepartments.id",
  "sidebar.authorization.manageDepartments.departmentName",
  "sidebar.authorization.manageDepartments.manager",
];
const data = [];

const ManageDepartments = () => {
  return (
    <Fragment>
      <Header title="Manage Departments" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ManageDepartments;
