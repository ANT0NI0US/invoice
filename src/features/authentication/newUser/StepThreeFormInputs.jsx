import { useTranslation } from "react-i18next";
import Button from "@/ui/Button";
import GridContainer from "@/ui/GridContainer";
import Input from "@/ui/Input";

export default function StepThreeFormInputs({ inputHandle }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto mb-[30px] flex flex-col gap-[30px] px-4">
        <Button variation="secondary">
          {t("newUser.formsData.previewInvoiceLogo")}
        </Button>
        <Button variation="secondary">
          {t("newUser.formsData.previewInvoiceFooter")}
        </Button>
        <Button variation="secondary">
          {t("newUser.formsData.previewInvoiceStamp")}
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
          placeholder={t("newUser.formsData.englishPaymentNumber")}
          name={"englishPaymentNumber"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.arabicPaymentNumber")}
          name={"arabicPaymentNumber"}
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
            id="inwardInvoiceItemsRequired"
            name="inwardInvoiceItemsRequired"
          />
          <label
            htmlFor="inwardInvoiceItemsRequired"
            className="text-sm sm:text-base"
          >
            {"  "} {t("newUser.formsData.inwardInvoiceItemsRequired")}
          </label>
        </div>
        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="showWatermarkOnPreview"
            name="showWatermarkOnPreview"
          />
          <label
            htmlFor="showWatermarkOnPreview"
            className="text-sm sm:text-base"
          >
            {"  "}
            {t("newUser.formsData.showWatermarkOnPreview")}
          </label>
        </div>
      </div>
    </>
  );
}
