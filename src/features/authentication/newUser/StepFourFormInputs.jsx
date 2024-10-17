import { useTranslation } from "react-i18next";
import Input from "@/ui/Input";
import GridContainer from "@/ui/GridContainer";

export default function StepFourFormInputs({ inputHandle }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Three Check boxes */}
      <div className="container my-[40px] flex flex-col gap-[10px] px-4 md:flex-row">
        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="enableFlyInCustomer"
            name="enableFlyInCustomer"
          />
          <label htmlFor="enableFlyInCustomer" className="text-sm sm:text-base">
            {"  "} {t("newUser.formsData.enableFlyInCustomer")}
          </label>
        </div>
        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="enableFlyInProduct"
            name="enableFlyInProduct"
          />
          <label htmlFor="enableFlyInProduct" className="text-sm sm:text-base">
            {"  "}
            {t("newUser.formsData.enableFlyInProduct")}
          </label>
        </div>

        <div className="flex items-center gap-[3px]">
          <input
            type="checkbox"
            id="enableDeleteAttachmentsByUploader"
            name="enableDeleteAttachmentsByUploader"
          />
          <label
            htmlFor="enableDeleteAttachmentsByUploader"
            className="text-sm sm:text-base"
          >
            {"  "}
            {t("newUser.formsData.enableDeleteAttachmentsByUploader")}
          </label>
        </div>
      </div>
      {/* Start Inputs */}
      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.purchaseException")}
          name={"purchaseException"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.sellException")}
          name={"sellException"}
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
          placeholder={t("newUser.formsData.acceptedFractionsRoundingUpTi")}
          name={"acceptedFractionsRoundingUpTi"}
          handleChange={inputHandle}
        />
      </div>
      {/* End Inputs */}
    </>
  );
}
