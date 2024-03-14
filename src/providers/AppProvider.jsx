import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StoreProvider from "./StoreProvider";
import RoutesProvider from "./RoutesProvider";
import Navigations from "../navigations/Navigations";

const AppProvider = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigations />
      </RoutesProvider>
    </StoreProvider>
  );
};

export default AppProvider;
