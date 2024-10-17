import Table from "@/ui/Table";
import Header from "@/ui/Header";

const columns = [
  "sidebar.settings.notifications.subject",
  "sidebar.settings.notifications.to",
  "sidebar.settings.notifications.ccStatus",
];
const data = [];

export default function Notifications() {
  return (
    <>
      <Header title="sidebar.settings.notifications.notifications" />
      <Table columns={columns} data={data} />
    </>
  );
}
