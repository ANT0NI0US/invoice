import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Input from "../../../ui/Input";
import GridContainer from "../../../ui/GridContainer";

export default function StepFourFormInputs({ inputHandle }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      {/* Three Check boxes */}
      <div className="container my-[40px] flex flex-col gap-[10px] px-4 md:flex-row">
        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="inwardInvoiceItemsRequird"
            name="inwardInvoiceItemsRequird"
          />
          <label
            htmlFor="inwardInvoiceItemsRequird"
            className="text-sm sm:text-base"
          >
            {"  "} {t("newUser.formsData.inwardInvoiceItemsRequird")}
          </label>
        </div>
        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="showWarkmarkOnPreview"
            name="showWarkmarkOnPreview"
          />
          <label
            htmlFor="showWarkmarkOnPreview"
            className="text-sm sm:text-base"
          >
            {"  "}
            {t("newUser.formsData.showWarkmarkOnPreview")}
          </label>
        </div>

        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="showWarkmarkOnPreview"
            name="showWarkmarkOnPreview"
          />
          <label
            htmlFor="showWarkmarkOnPreview"
            className="text-sm sm:text-base"
          >
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
    </Fragment>
  );
}
