import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.authorization.designWorkflow.id",
  "sidebar.authorization.designWorkflow.process",
  "sidebar.authorization.designWorkflow.processId",
];
const data = [];

const designWorkFlow = () => {
  return (
    <Fragment>
      <Header title="sidebar.authorization.designWorkflow.designWorkflow" />
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </Fragment>
  );
};

export default designWorkFlow;
