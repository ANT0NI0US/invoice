import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../../ui/Button";
import StepThreeFormInputs from "./StepThreeFormInputs";

export default function StepThree({ inputHandle, next, pre }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <StepThreeFormInputs inputHandle={inputHandle} />

      {/* Buttons */}
      <div className="ml-auto mt-[30px] flex items-center justify-between">
        <div className="w-[100px]">
          <Button onClick={pre}>{t("newUser.formsData.previous")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={next}>{t("newUser.formsData.next")}</Button>
        </div>
      </div>
    </Fragment>
  );
}
