import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import GridContainer from "../../../ui/GridContainer";
import Button from "../../../ui/Button";

export default function StepTwo({ state, inputHandle, next, pre }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <div>
        <h1 className="mb-[20px] text-2xl">
          {t("newUser.formsData.formTwoTitle")}
        </h1>

        <GridContainer>
          <div className="mb-2 flex flex-col">
            <label htmlFor="name">{t("newUser.formsData.name")}</label>
            <input
              value={state.name}
              onChange={inputHandle}
              className="input"
              type="text"
              name="name"
              placeholder={t("newUser.formsData.name")}
              id="name"
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="IDNumber">{t("newUser.formsData.IDNumber")}</label>
            <input
              value={state.IDNumber}
              onChange={inputHandle}
              className="input"
              type="number"
              name="IDNumber"
              placeholder={t("newUser.formsData.IDNumber")}
              id="IDNumber"
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label className="text-slate-500" htmlFor="personEmail">
              {t("newUser.formsData.personEmail")}
            </label>
            <input
              value={state.personEmail}
              onChange={inputHandle}
              row="10"
              className="input"
              type="email"
              name="personEmail"
              placeholder={t("newUser.formsData.personEmail")}
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label className="text-slate-500" htmlFor="phone">
              {t("newUser.formsData.phone")}
            </label>
            <input
              value={state.phone}
              onChange={inputHandle}
              row="10"
              className="input"
              type="number"
              name="phone"
              placeholder={t("newUser.formsData.phone")}
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
      </div>
    </Fragment>
  );
}
