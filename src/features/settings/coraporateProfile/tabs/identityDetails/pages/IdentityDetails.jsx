import { Fragment, useState } from "react";
import StepOneFormInputs from "../../../../../authentication/newUser/StepOneFormInputs";
import Button from "../../../../../../ui/Button";
import { useTranslation } from "react-i18next";
const initialstate = {
  englishName: "",
  arabicName: "",
  category: "",
  identificationNumber: "",
  schemeType: "",
  mobileNumber: "",
  faxNumber: "",
  email: "",
  website: "",
  vatNumber: "",
  crNumber: "",
};
const IdentityDetails = () => {
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
      <StepOneFormInputs inputHandle={inputHandle} />
      <div className="flex w-full items-center justify-end gap-5">
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

export default IdentityDetails;
