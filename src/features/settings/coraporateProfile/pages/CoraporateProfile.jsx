import { Fragment } from "react";
import routes from "../../../../navigations/routes";
import { useTranslation } from "react-i18next";
import Tabs from "../components/Tabs";
import { Outlet } from "react-router-dom";

const CoraporateProfile = () => {
  const [t] = useTranslation();

  const items = [
    {
      text: t("sidebar.settings.corporateProfile.identityDetails"),
      path: routes.identityDetails,
    },
    {
      text: t("sidebar.settings.corporateProfile.addressDetails"),
      path: routes.addressDetails,
    },
    {
      text: t("sidebar.settings.corporateProfile.invoiceLayout"),
      path: routes.invoiceLayout,
    },
    {
      text: t("sidebar.settings.corporateProfile.configurations"),
      path: routes.configurations,
    },
  ];
  return (
    <Fragment>
      <Tabs items={items} />
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default CoraporateProfile;
