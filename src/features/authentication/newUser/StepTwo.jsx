import { useTranslation } from "react-i18next";
import StepTwoFormInputs from "./StepTwoFormInputs";
import Button from "@/ui/Button";

export default function StepTwo({ inputHandle, next, pre }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Inputs */}
      <StepTwoFormInputs inputHandle={inputHandle} />

      {/* Buttons */}
      <div className="ml-auto mt-[30px] flex items-center justify-between">
        <div className="w-[100px]">
          <Button onClick={pre}>{t("newUser.formsData.previous")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={next}>{t("newUser.formsData.next")}</Button>
        </div>
      </div>
    </>
  );
}
