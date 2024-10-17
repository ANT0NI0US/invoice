import { useTranslation } from "react-i18next";
import StepOneFormInputs from "./StepOneFormInputs";
import Button from "@/ui/Button";

export default function StepOne({ inputHandle, next, toggleIsLogin }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Inputs */}
      <StepOneFormInputs inputHandle={inputHandle} />

      {/* Next Btn */}
      <div className="flexBetween ml-auto">
        <div className="w-[100px]">
          <Button onClick={toggleIsLogin}>{t("newUser.formsData.back")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={next}>{t("newUser.formsData.next")}</Button>
        </div>
      </div>
    </>
  );
}
