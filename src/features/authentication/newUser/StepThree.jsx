import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import GridContainer from "../../../ui/GridContainer";
import Button from "../../../ui/Button";

export default function StepThree({ state, inputHandle, next, pre }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <GridContainer>
        <div className="mb-2 flex flex-col">
          <label htmlFor="userName">{t("newUser.formsData.userName")}</label>
          <input
            value={state.userName}
            onChange={inputHandle}
            className="input"
            type="text"
            name="userName"
            placeholder={t("newUser.formsData.userName")}
            id="userName"
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label htmlFor="phoneNumber">
            {t("newUser.formsData.phoneNumber")}
          </label>
          <input
            value={state.phoneNumber}
            onChange={inputHandle}
            className="input"
            type="number"
            name="phoneNumber"
            placeholder={t("newUser.formsData.phoneNumber")}
            id="phoneNumber"
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label htmlFor="email2">{t("newUser.formsData.email")}</label>
          <input
            value={state.email2}
            onChange={inputHandle}
            row="10"
            className="input"
            type="text"
            name="email2"
            placeholder={t("newUser.formsData.email")}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label className="text-slate-500" htmlFor="password">
            {t("newUser.formsData.password")}
          </label>
          <input
            value={state.password}
            onChange={inputHandle}
            row="10"
            className="input"
            type="number"
            name="password"
            placeholder={t("newUser.formsData.password")}
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label className="text-slate-500" htmlFor="confirmPassword">
            {t("newUser.formsData.confirmPassword")}
          </label>
          <input
            value={state.confirmPassword}
            onChange={inputHandle}
            row="10"
            className="input"
            type="number"
            name="confirmPassword"
            placeholder={t("newUser.formsData.confirmPassword")}
          />
        </div>
      </GridContainer>

      {/* Buttons */}
      <div className="mt-[30px] flex items-center justify-between gap-3">
        <Button rounded="rounded-full" onClick={pre}>
          {t("newUser.formsData.previous")}
        </Button>
        <Button rounded="rounded-full" onClick={next}>
          {t("newUser.formsData.next")}
        </Button>
      </div>
    </Fragment>
  );
}
