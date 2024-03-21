import { Fragment, useState } from "react";
import StepFourFormInputs from "../../../../../authentication/newUser/StepFourFormInputs";
import Button from "../../../../../../ui/Button";
import { useTranslation } from "react-i18next";

const initialstate = {
  purchaseExeption: "",
  sellExeption: "",
  defaultPaymentTerms: "",
  minInvoiceItems: "",
  maxInvoiceItems: "",
  currencies: "",
  acceptedFractuonsRoundingUpTi: "",
};
const Configurations = () => {
  const [t] = useTranslation();

  const [state, setState] = useState(initialstate);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Fragment>
      <StepFourFormInputs inputHandle={inputHandle} />
      <div className="mt-8 flex w-full items-center justify-end gap-5">
        <div className="w-[150px]">
          <Button variation="secondary">{t("general.cancel")}</Button>
        </div>
        <div className="w-[150px]">
          <Button>{t("general.save")}</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Configurations;
