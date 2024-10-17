import { useTranslation } from "react-i18next";
import Table from "@/ui/Table";
import Header from "@/ui/Header";
import Input from "@/ui/Input";
import Button from "@/ui/Button";

const columns = [
  "sidebar.reports.salesReports.invoiceNumber",
  "sidebar.reports.salesReports.issueDate",
  "sidebar.reports.salesReports.customer",
  "sidebar.reports.salesReports.invoiceAmount",
  "sidebar.reports.salesReports.paidAmount",
  "sidebar.reports.salesReports.status",
];

const data = [];

export default function SalesReports() {
  const { t } = useTranslation();
  return (
    <>
      <Header title="sidebar.reports.salesReports.salesReports" />
      <div className="my-10 w-full">
        <div className="my-10 flex flex-col gap-10">
          <div className="flexBetween flex-col gap-10 sm:flex-row sm:gap-5 ">
            <div className="relative w-full">
              <select className="input p-[12px]" id="customer">
                <option value="allCustomer">
                  {t("sidebar.reports.salesReports.allCustomers")}
                </option>
                <option value="chessStore">
                  {t("sidebar.reports.salesReports.chessStore")}
                </option>
                <option value="grandLibrary">
                  {t("sidebar.reports.salesReports.grandLibrary")}
                </option>
                <option value="xStore">
                  {t("sidebar.reports.salesReports.xStore")}
                </option>
              </select>
              <label
                htmlFor={t("sidebar.reports.salesReports.customer")}
                className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
              >
                {t("sidebar.reports.salesReports.customers")}
              </label>
            </div>
            <div className="relative w-full">
              <select className="input p-[12px]" id="report-type">
                <option value="outwardInvoices">
                  {t("sidebar.reports.salesReports.outwardInvoices")}
                </option>
                <option value="collections">
                  {t("sidebar.reports.salesReports.collections")}
                </option>
                <option value="outwardInvoicesReport">
                  {t(
                    "sidebar.reports.salesReports.outwardInvoicesWithNotesReport",
                  )}
                </option>
              </select>
              <label
                htmlFor={t("sidebar.reports.salesReports.reportType")}
                className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
              >
                {t("sidebar.reports.salesReports.reportType")}
              </label>
            </div>
          </div>

          <div className="flexBetween flex-col gap-10 sm:flex-row sm:gap-5 ">
            <Input
              placeholder={t("sidebar.reports.salesReports.fromIssueDate")}
              type="date"
            />
            <Input
              placeholder={t("sidebar.reports.salesReports.toIssueDate")}
              type="date"
            />
          </div>
        </div>

        <div className="my-10 flex items-center gap-2">
          <input type="checkbox" id="details" />
          <label
            className="cursor-pointer text-lg font-medium text-lightB"
            htmlFor="details"
          >
            {t("sidebar.reports.salesReports.moreDetails")}
          </label>
        </div>

        <div className="flexCenter mr-0 flex-col gap-5 sm:mr-[30px] sm:items-end sm:justify-end">
          <div className="w-[300px]">
            <Button>{t("sidebar.reports.salesReports.generate")}</Button>
          </div>
          <div className="w-[300px]">
            <Button variation="secondary">
              {t("sidebar.reports.salesReports.extract")}
            </Button>
          </div>
        </div>
      </div>
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </>
  );
}
