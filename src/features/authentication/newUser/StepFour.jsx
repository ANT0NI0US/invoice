import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../ui/Button";
import GridContainer from "../../../ui/GridContainer";
import Input from "../../../ui/Input";

export default function StepFour({ inputHandle, pre, finalSubmit }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      {/* Three Check boxes */}
      <div className="container my-[30px] flex gap-[10px] px-4">
        <div>
          <input
            type="checkbox"
            id="inwardInvoiceItemsRequird"
            name="inwardInvoiceItemsRequird"
          />
          <label htmlFor="inwardInvoiceItemsRequird">
            {"  "} {t("newUser.formsData.inwardInvoiceItemsRequird")}
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="showWarkmarkOnPreview"
            name="showWarkmarkOnPreview"
          />
          <label htmlFor="showWarkmarkOnPreview">
            {"  "}
            {t("newUser.formsData.showWarkmarkOnPreview")}
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            id="showWarkmarkOnPreview"
            name="showWarkmarkOnPreview"
          />
          <label htmlFor="showWarkmarkOnPreview">
            {"  "}
            {t("newUser.formsData.showWarkmarkOnPreview")}
          </label>
        </div>
      </div>
      {/* Start Inputs */}
      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.purchaseExeption")}
          name={"purchaseExeption"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.sellExeption")}
          name={"sellExeption"}
          handleChange={inputHandle}
          type="number"
        />
      </GridContainer>

      <div className="container mx-auto my-[30px] px-4">
        <Input
          placeholder={t("newUser.formsData.defaultPaymentTerms")}
          name={"defaultPaymentTerms"}
          handleChange={inputHandle}
        />
      </div>

      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.minInvoiceItems")}
          name={"minInvoiceItems"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.maxInvoiceItems")}
          name={"maxInvoiceItems"}
          handleChange={inputHandle}
          type="number"
        />
      </GridContainer>

      <div className="container mx-auto my-[30px] px-4">
        <Input
          placeholder={t("newUser.formsData.currencies")}
          name={"currencies"}
          handleChange={inputHandle}
        />
      </div>

      <div className="container mx-auto px-4">
        <Input
          placeholder={t("newUser.formsData.acceptedFractuonsRoundingUpTi")}
          name={"acceptedFractuonsRoundingUpTi"}
          handleChange={inputHandle}
        />
      </div>
      {/* End Inputs */}

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
