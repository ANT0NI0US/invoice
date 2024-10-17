import { useTranslation } from "react-i18next";

export default function Header({ title }) {
  const { t } = useTranslation();

  return (
    <div className="mb-5 text-xl font-semibold leading-[24.2px] text-dark">
      {t(`${title}`)}
    </div>
  );
}
