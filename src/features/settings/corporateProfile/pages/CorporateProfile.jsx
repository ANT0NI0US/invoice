import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Tabs from "../components/Tabs";
import routes from "@/navigation/routes";

export default function CorporateProfile() {
  const { t } = useTranslation();

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
    <>
      <Tabs items={items} />
      <div className="mt-10">
        <Outlet />
      </div>
    </>
  );
}
