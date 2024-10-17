import { useTranslation } from "react-i18next";
import StepFourFormInputs from "./StepFourFormInputs";
import Button from "@/ui/Button";

export default function StepFour({ inputHandle, pre, finalSubmit }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Inputs */}
      <StepFourFormInputs inputHandle={inputHandle} />

      {/* Buttons */}
      <div className="flexBetween ml-auto mt-[30px]">
        <div className="w-[100px]">
          <Button onClick={pre}>{t("newUser.formsData.previous")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={finalSubmit}>{t("newUser.formsData.submit")}</Button>{" "}
        </div>
      </div>
    </>
  );
}
