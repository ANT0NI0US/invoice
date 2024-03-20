import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

const columns = [
  "sidebar.settings.customFields.code",
  "sidebar.settings.customFields.attributeName",
  "sidebar.settings.customFields.attributeType",
  "sidebar.settings.customFields.attributeValue",
  "sidebar.settings.customFields.required",
  "sidebar.settings.customFields.printLabel",
  "sidebar.settings.customFields.isShare",
  "sidebar.settings.customFields.channelId",
];
const data = [];

const CustomFields = () => {
  return (
    <Fragment>
      <Header title="sidebar.settings.customFields.customFields" />
      <Table
        textColor="text-white"
        backColor="bg-primary"
        columns={columns}
        data={data}
      />
    </Fragment>
  );
};

export default CustomFields;
