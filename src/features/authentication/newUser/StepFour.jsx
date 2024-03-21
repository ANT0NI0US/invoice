import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../ui/Button";
import StepFourFormInputs from "./StepFourFormInputs";

export default function StepFour({ inputHandle, pre, finalSubmit }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      {/* Inputs */}
      <StepFourFormInputs inputHandle={inputHandle} />

      {/* Buttons */}
      <div className="ml-auto mt-[30px] flex items-center justify-between">
        <div className="w-[100px]">
          <Button onClick={pre}>{t("newUser.formsData.previous")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={finalSubmit}>{t("newUser.formsData.submit")}</Button>{" "}
        </div>
      </div>
    </Fragment>
  );
}
