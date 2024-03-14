import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FormHead from "./FormHead";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const formArray = [1, 2, 3, 4];
const initialstate = {
  facilityName: "",
  facilityAddress: "",
  theCommercialRegistrationNumberOfTheEstablishment: "",
  facilityTaxRegistrationNumber: "",
  email: "",
  contactNumber: "",
  name: "",
  IDNumber: "",
  personEmail: "",
  phone: "",
  userName: "",
  phoneNumber: "",
  email2: "",
  password: "",
  confirmPassword: "",
  enterTheActivationCode: "",
};

export default function NewUserForm({ toggleIsLogin }) {
  const [formStep, setFormStep] = useState(formArray[0]);
  const [state, setState] = useState(initialstate);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [t] = useTranslation();

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (
      formStep === 1 &&
      state.facilityName &&
      state.facilityAddress &&
      state.theCommercialRegistrationNumberOfTheEstablishment &&
      state.facilityTaxRegistrationNumber &&
      state.email &&
      state.contactNumber
    ) {
      setFormStep((prev) => prev + 1);
      setError("");
    } else if (
      formStep === 2 &&
      state.name &&
      state.IDNumber &&
      state.personEmail &&
      state.phone
    ) {
      setFormStep((prev) => prev + 1);
      setError("");
    } else if (
      formStep === 3 &&
      state.userName &&
      state.phoneNumber &&
      state.email2 &&
      state.password &&
      state.confirmPassword
    ) {
      setFormStep((prev) => prev + 1);
      setError(``);
    } else {
      setError(`${t("newUser.formsData.error")}`);
    }
  };

  const pre = () => {
    setFormStep((prev) => prev - 1);
  };

  const finalSubmit = () => {
    if (state.enterTheActivationCode) {
      navigate("/");
      setFormStep((prev) => prev + 1);
    } else {
      setError(`${t("newUser.formsData.error")}`);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-screen w-[90%] flex-col justify-around">
        {/* Form Head */}
        <FormHead formArray={formArray} formStep={formStep} />

        {/* Form Currently Desplayed */}
        <div>
          {formStep === 1 && (
            <StepOne
              toggleIsLogin={toggleIsLogin}
              state={state}
              inputHandle={inputHandle}
              next={next}
            />
          )}

          {formStep === 2 && (
            <StepTwo
              state={state}
              inputHandle={inputHandle}
              next={next}
              pre={pre}
            />
          )}

          {formStep === 3 && (
            <StepThree
              state={state}
              inputHandle={inputHandle}
              next={next}
              pre={pre}
            />
          )}

          {formStep === 4 && (
            <StepFour
              state={state}
              inputHandle={inputHandle}
              pre={pre}
              finalSubmit={finalSubmit}
            />
          )}

          {/* Error */}
          <div className="mt-[20px]">
            <p className={`text-center text-red-500 ${!error && "opacity-0"}`}>
              {error}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
