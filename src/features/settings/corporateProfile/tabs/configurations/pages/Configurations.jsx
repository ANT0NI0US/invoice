import { useState } from "react";
import { useTranslation } from "react-i18next";
import StepFourFormInputs from "@/features/authentication/newUser/StepFourFormInputs";
import Button from "@/ui/Button";

const initialState = {
  purchaseException: "",
  sellException: "",
  defaultPaymentTerms: "",
  minInvoiceItems: "",
  maxInvoiceItems: "",
  currencies: "",
  acceptedFractionsRoundingUpTi: "",
};
export default function Configurations() {
  const { t } = useTranslation();

  const [state, setState] = useState(initialState);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <StepFourFormInputs inputHandle={inputHandle} />
      <div className="mt-8 flex w-full items-center justify-end gap-5">
        <div className="w-[150px]">
          <Button variation="secondary">{t("general.cancel")}</Button>
        </div>
        <div className="w-[150px]">
          <Button>{t("general.save")}</Button>
        </div>
      </div>
    </>
  );
}
