import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../ui/Button";

export default function StepFour({ state, inputHandle, pre, finalSubmit }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <div>
        <h1 className="mb-[20px] text-center text-2xl">
          {t("newUser.formsData.formFourTitle")}
        </h1>
        <div className="mb-2 flex flex-col text-center">
          <label htmlFor="enterTheActivationCode">
            {t("newUser.formsData.enterTheActivationCode")}
          </label>
          <input
            value={state.enterTheActivationCode}
            onChange={inputHandle}
            className="input"
            type="number"
            name="enterTheActivationCode"
            placeholder="-- --- --- "
            id="enterTheActivationCode"
          />
        </div>

        <div className="mt-[30px] flex items-center justify-between gap-3">
          <Button rounded="rounded-full" onClick={pre}>
            {t("newUser.formsData.previous")}
          </Button>
          <Button rounded="rounded-full" onClick={finalSubmit}>
            {t("newUser.formsData.submit")}
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
