import { Fragment } from "react";
import Table from "../../../../ui/Table";
import Header from "../../../../ui/Header";
import Button from "../../../../ui/Button";
import Input from "../../../../ui/Input";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation();
  return (
    <Fragment>
      <Header title="sidebar.settings.zatcaConfigurations.zatcaConfigurations" />
      <div className="my-10 w-full">
        <div className="w-[150px]">
          <Button>
            {t("sidebar.settings.zatcaConfigurations.enableZatca")}
          </Button>
        </div>

        <div className="my-10 flex items-center gap-2">
          <input type="checkbox" id="zatca" />
          <label
            className="cursor-pointer text-lg font-medium text-lightB"
            htmlFor="zatca"
          >
            {t("sidebar.settings.zatcaConfigurations.zatcaEnabled")}
          </label>
        </div>

        <div className="my-5 flex flex-col gap-10">
          <Input
            placeholder={t("sidebar.settings.zatcaConfigurations.englishName")}
          />
          <div className="flexBetween flex-col gap-10 sm:flex-row sm:gap-5 ">
            <div className="relative w-full">
              <select className="input p-[12px]" id="identy-type">
                <option value="crn">
                  {t("sidebar.settings.zatcaConfigurations.crn")}
                </option>
                <option value="crn">
                  {t("sidebar.settings.zatcaConfigurations.crn")}
                </option>
                <option value="crn">
                  {t("sidebar.settings.zatcaConfigurations.crn")}
                </option>
                <option value="crn">
                  {t("sidebar.settings.zatcaConfigurations.crn")}
                </option>
              </select>
              <label
                htmlFor="identy-type"
                className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
              >
                {t("sidebar.settings.zatcaConfigurations.identificationtype")}
              </label>
            </div>
            <Input
              placeholder={t(
                "sidebar.settings.zatcaConfigurations.identificationNumber",
              )}
              type="number"
            />
          </div>
          <Input
            placeholder={t(
              "sidebar.settings.zatcaConfigurations.taxIdentificationNumber",
            )}
            type="number"
          />
        </div>

        <div className=" flex items-center justify-end gap-5">
          <div className="w-[150px]">
            <Button variation="secondary">{t("general.cancel")}</Button>
          </div>
          <div className="w-[150px]">
            <Button>{t("general.save")}</Button>
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
