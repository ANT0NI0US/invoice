import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../../ui/Button";
import GridContainer from "../../../ui/GridContainer";
import Input from "../../../ui/Input";

export default function StepThreeFormInputs({ inputHandle }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <div className="container mx-auto mb-[30px] flex flex-col gap-[30px] px-4">
        <Button variation="secondary">
          {t("newUser.formsData.previewOnvoiceLogo")}
        </Button>
        <Button variation="secondary">
          {t("newUser.formsData.previewOnvoiceFooter")}
        </Button>
        <Button variation="secondary">
          {t("newUser.formsData.previewOnvoiceStamp")}
        </Button>
      </div>

      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.normalInvoiceFooterLineOne")}
          name={"normalInvoiceFooterLineOne"}
          handleChange={inputHandle}
        />

        <Input
          placeholder={t("newUser.formsData.normalInvoiceFooterLineTwo")}
          name={"normalInvoiceFooterLineTwo"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.englishEpaymenyNumber")}
          name={"englishEpaymenyNumber"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.arabicEpaymenyNumber")}
          name={"arabicEpaymenyNumber"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.englishPurchaseOrderRef")}
          name={"englishPurchaseOrderRef"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.arabicPurchaseOrderRef")}
          name={"arabicPurchaseOrderRef"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.defaultOutwardServiceDetails")}
          name={"defaultOutwardServiceDetails"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.invoiceLayoutPostalCode")}
          name={"invoiceLayoutPostalCode"}
          handleChange={inputHandle}
          type="number"
        />
      </GridContainer>

      {/* Two Check boxes */}
      <div className="container my-[30px] flex flex-col gap-[10px] px-4 sm:flex-row">
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
      </div>
    </Fragment>
  );
}
