import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../../ui/Button";
import GridContainer from "../../../ui/GridContainer";
import StepOneFormInputs from "./StepOneFormInputs";

export default function StepOne({ inputHandle, next, toggleIsLogin }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      {/* Inputs */}
      <StepOneFormInputs inputHandle={inputHandle} />

      {/* Next Btn */}
      <div className="ml-auto flex items-center justify-between">
        <div className="w-[100px]">
          <Button onClick={toggleIsLogin}>{t("newUser.formsData.back")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={next}>{t("newUser.formsData.next")}</Button>
        </div>
      </div>
    </Fragment>
  );
}
