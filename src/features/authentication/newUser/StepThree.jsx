import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import GridContainer from "../../../ui/GridContainer";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

export default function StepThree({ inputHandle, next, pre }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      <div className="container mx-auto mb-[30px] flex flex-col gap-[30px] px-4">
        <Button>{t("newUser.formsData.previewOnvoiceLogo")}</Button>
        <Button>{t("newUser.formsData.previewOnvoiceFooter")}</Button>
        <Button>{t("newUser.formsData.previewOnvoiceStamp")}</Button>
      </div>

      {/* Start Inputs */}
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
      {/* End Inputs */}

      {/* Two Check boxes */}
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
      </div>

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
