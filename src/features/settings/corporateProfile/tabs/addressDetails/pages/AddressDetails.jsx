import { useState } from "react";
import { useTranslation } from "react-i18next";
import StepTwoFormInputs from "@/features/authentication/newUser/StepTwoFormInputs";
import Button from "@//ui/Button";

const initialState = {
  country: "",
  city: "",
  cityArabicName: "",
  postalCode: "",
  provinceEnglishName: "",
  provinceArabicName: "",
  areaEnglishName: "",
  areaArabicName: "",
  street: "",
  streetArabicName: "",
  buildingNumber: "",
  additionalNumber: "",
  unitEnglishNumber: "",
  unitArabicNumber: "",
};

export default function AddressDetails() {
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
      <StepTwoFormInputs inputHandle={inputHandle} />
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
