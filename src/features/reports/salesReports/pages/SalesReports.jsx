import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";
import Input from "../../../../ui/Input";
import Button from "../../../../ui/Button";

const columns = [
  "sidebar.reports.salesReports.invoiceNumber",
  "sidebar.reports.salesReports.issueDate",
  "sidebar.reports.salesReports.customer",
  "sidebar.reports.salesReports.invoiceAmount",
  "sidebar.reports.salesReports.paidAmount",
  "sidebar.reports.salesReports.status",
];
const data = [];

const SalesReports = () => {
  return (
    <Fragment>
      <Header title="sidebar.reports.salesReports.salesReports" />
      <div className="my-10 w-full">
        <div className="my-10 flex flex-col gap-10">
          <div className="flexBetween flex-col gap-10 sm:flex-row sm:gap-5 ">
            <div className="relative w-full">
              <select className="input p-[12px]" id="customer">
                <option value="allCustomer">All Customer</option>
                <option value="chessStore">Chess Store</option>
                <option value="grandLibrary">Grand Library</option>
                <option value="xStore">X Store</option>
              </select>
              <label
                htmlFor="customer"
                className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
              >
                Customers *
              </label>
            </div>
            <div className="relative w-full">
              <select className="input p-[12px]" id="report-type">
                <option value="outwardInvoices">Outward Invoices</option>
                <option value="collections">Collections</option>
                <option value="outwardInvoicesReport">
                  Outward Invoices with Notes Report
                </option>
              </select>
              <label
                htmlFor="report-type"
                className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
              >
                Report Type *
              </label>
            </div>
          </div>

          <div className="flexBetween flex-col gap-10 sm:flex-row sm:gap-5 ">
            <Input placeholder="From isssue date" type="date" />
            <Input placeholder="To issue date" type="date" />
          </div>
        </div>

        <div className="my-10 flex items-center gap-2">
          <input type="checkbox" id="details" />
          <label
            className="cursor-pointer text-lg font-medium text-lightB"
            htmlFor="details"
          >
            More details
          </label>
        </div>

        <div className="flexCenter mr-0 flex-col gap-5 sm:mr-[30px] sm:items-end sm:justify-end">
          <div className="w-[300px]">
            <Button>Generate</Button>
          </div>
          <div className="w-[300px]">
            <Button>Extract</Button>
          </div>
        </div>
      </div>
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </Fragment>
  );
};

export default SalesReports;
