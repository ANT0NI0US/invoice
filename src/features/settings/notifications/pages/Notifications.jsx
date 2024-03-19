import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.settings.notifications.subject",
  "sidebar.settings.notifications.to",
  "sidebar.settings.notifications.ccStatus",
];
const data = [];

const Notifications = () => {
  return (
    <Fragment>
      <Header title="Notifications"/>
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default Notifications;
