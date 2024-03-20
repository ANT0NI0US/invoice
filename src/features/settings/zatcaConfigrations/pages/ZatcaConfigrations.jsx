import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";

const columns = [
  "sidebar.settings.zatcaConfigurations.otp",
  "sidebar.settings.zatcaConfigurations.egsCode",
  "sidebar.settings.zatcaConfigurations.egsAlias",
  "sidebar.settings.zatcaConfigurations.invoiceType",
  "sidebar.settings.zatcaConfigurations.channelId",
  "sidebar.settings.zatcaConfigurations.sequenceFormatter",
  "sidebar.settings.zatcaConfigurations.seperator",
];
const data = [];

const ZatcaConfigrations = () => {
  return (
    <Fragment>
      <Header title="sidebar.settings.zatcaConfigurations.zatcaConfigurations" />
      <div className="my-10 w-full">
        <div className="w-[150px]">
          <Button>Enable ZATCA</Button>
        </div>

        <div className="my-10 flex items-center gap-2">
          <input type="checkbox" id="zatca" />
          <label
            className="cursor-pointer text-lg font-medium text-lightB"
            htmlFor="zatca"
          >
            ZATCA Enabled
          </label>
        </div>

        <div className="my-5 flex flex-col gap-10">
          <Input placeholder="English Name" />
          <div className="flexBetween flex-col gap-10 sm:flex-row sm:gap-5 ">
            <div className="relative w-full">
              <select className="input p-[12px]" id="identy-type">
                <option value="crn">CRN</option>
                <option value="crn">CRN</option>
                <option value="crn">CRN</option>
                <option value="crn">CRN</option>
              </select>
              <label
                htmlFor="identy-type"
                className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
              >
                Identification Type *
              </label>
            </div>
            <Input placeholder="Identification Number" type="number" />
          </div>
          <Input placeholder="Tax Identification Number" type="number" />
        </div>

        <div className=" flex items-center justify-end gap-5">
          <div className="w-[150px]">
            <Button>Cancel</Button>
          </div>
          <div className="w-[150px]">
            <Button>Save</Button>
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

export default ZatcaConfigrations;
