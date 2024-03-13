import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../../ui/Button";
import GridContainer from "../../../ui/GridContainer";

export default function StepOne({ inputHandle, next, state, toggleIsLogin }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <>
        <h1 className="mb-[20px] text-2xl">
          {t("newUser.formsData.formOneTitle")}
        </h1>
        <GridContainer>
          <div className="mb-2 flex flex-col">
            <label htmlFor="facilityName">
              {t("newUser.formsData.facilityName")}
            </label>
            <input
              value={state.facilityName}
              onChange={inputHandle}
              className="input"
              type="text"
              name="facilityName"
              placeholder={t("newUser.formsData.facilityName")}
              id="facilityName"
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="facilityAddress">
              {t("newUser.formsData.facilityAddress")}
            </label>
            <input
              value={state.facilityAddress}
              onChange={inputHandle}
              className="input"
              type="text"
              name="facilityAddress"
              placeholder={t("newUser.formsData.facilityAddress")}
              id="facilityAddress"
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="The Commercial RegistrationNumber Of The Establishment">
              {t(
                "newUser.formsData.theCommercialRegistrationNumberOfTheEstablishment",
              )}
            </label>
            <input
              value={state.theCommercialRegistrationNumberOfTheEstablishment}
              onChange={inputHandle}
              className="input"
              type="number"
              name="theCommercialRegistrationNumberOfTheEstablishment"
              placeholder={t(
                "newUser.formsData.theCommercialRegistrationNumberOfTheEstablishment",
              )}
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="facilityTaxRegistrationNumber">
              {t("newUser.formsData.facilityTaxRegistrationNumber")}
            </label>
            <input
              value={state.facilityTaxRegistrationNumber}
              onChange={inputHandle}
              className="input"
              type="number"
              name="facilityTaxRegistrationNumber"
              placeholder={t("newUser.formsData.facilityTaxRegistrationNumber")}
              id="facilityTaxRegistrationNumber"
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="email">{t("newUser.formsData.email")}</label>
            <input
              value={state.email}
              onChange={inputHandle}
              className="input"
              type="text"
              name="email"
              placeholder={t("newUser.formsData.email")}
              id="email"
            />
          </div>

          <div className="mb-2 flex flex-col">
            <label htmlFor="contactNumber">
              {t("newUser.formsData.contactNumber")}
            </label>
            <input
              value={state.contactNumber}
              onChange={inputHandle}
              className="input"
              type="number"
              name="contactNumber"
              placeholder={t("newUser.formsData.contactNumber")}
              id="contactNumber"
            />
          </div>
        </GridContainer>

        {/* Next Btn */}
        <div className="ml-auto mt-[30px] flex items-center justify-between">
          <Button rounded="rounded-full" onClick={toggleIsLogin}>
            {t("newUser.formsData.back")}
          </Button>

          <Button rounded="rounded-full" onClick={next}>
            {t("newUser.formsData.next")}
          </Button>
        </div>
      </>
    </Fragment>
  );
}
