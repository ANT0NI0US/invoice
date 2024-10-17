import { useState } from "react";
import { useTranslation } from "react-i18next";
import StepOneFormInputs from "@/features/authentication/newUser/StepOneFormInputs";
import Button from "@/ui/Button";

const initialState = {
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

export default function IdentityDetails() {
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
      <StepOneFormInputs inputHandle={inputHandle} />
      <div className="flex w-full items-center justify-end gap-5">
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
