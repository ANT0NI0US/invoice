import Table from "../../../../ui/Table";

const columns = [
  "sidebar.sales.manageCustomer.code",
  "sidebar.sales.manageCustomer.englishName",
  "sidebar.sales.manageCustomer.taxNumber",
  "sidebar.sales.manageCustomer.email",
  "sidebar.sales.manageCustomer.mobile",
  "sidebar.sales.manageCustomer.status",
];
const data = [
  [
    "4",
    "antonious nasr",
    "165115853156",
    "tony3@gmail.com",
    "01285551479",
    "Active",
  ],
  [
    "4",
    "antonious nasr",
    "165115853156",
    "tony3@gmail.com",
    "01285551479",
    "Active",
  ],
  [
    "4",
    "antonious nasr",
    "165115853156",
    "tony3@gmail.com",
    "01285551479",
    "Active",
  ],
  [
    "4",
    "antonious nasr",
    "165115853156",
    "tony3@gmail.com",
    "01285551479",
    "Active",
  ],
];

const ManageCustomer = () => {
  return <Table columns={columns} data={data} />;
};

export default ManageCustomer;
