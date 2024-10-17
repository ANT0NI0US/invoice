import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StoreProvider from "./StoreProvider";
import RoutesProvider from "./RoutesProvider";
import Navigation from "@/navigation/Navigation";

export default function AppProvider() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <StoreProvider>
      <RoutesProvider>
        <Navigation />
      </RoutesProvider>
    </StoreProvider>
  );
}
