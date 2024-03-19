import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";

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
      <Header title="Zatca Configrations" />
      <Table columns={columns} data={data} />
    </Fragment>
  );
};

export default ZatcaConfigrations;
