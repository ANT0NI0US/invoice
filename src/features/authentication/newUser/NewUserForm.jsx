import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FormHead from "./FormHead";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const formArray = [
  {
    number: 1,
    title: "stepOneTitle",
  },
  {
    number: 2,
    title: "stepTwoTitle",
  },
  {
    number: 3,
    title: "stepThreeTitle",
  },
  {
    number: 4,
    title: "stepFourTitle",
  },
];

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

  normalInvoiceFooterLineOne: "",
  normalInvoiceFooterLineTwo: "",
  englishEpaymenyNumber: "",
  arabicEpaymenyNumber: "",
  englishPurchaseOrderRef: "",
  arabicPurchaseOrderRef: "",
  defaultOutwardServiceDetails: "",
  invoiceLayoutPostalCode: "",

  purchaseExeption: "",
  sellExeption: "",
  defaultPaymentTerms: "",
  minInvoiceItems: "",
  maxInvoiceItems: "",
  currencies: "",
  acceptedFractuonsRoundingUpTi: "",
};

export default function NewUserForm({ toggleIsLogin }) {
  const [formStep, setFormStep] = useState(formArray[0].number);
  const [state, setState] = useState(initialstate);
  const [error, setError] = useState("");

  const {
    englishName,
    arabicName,
    category,
    identificationNumber,
    schemeType,
    mobileNumber,
    faxNumber,
    email,
    website,
    vatNumber,
    crNumber,

    country,
    city,
    cityArabicName,
    postalCode,
    provinceEnglishName,
    provinceArabicName,
    areaEnglishName,
    areaArabicName,
    street,
    streetArabicName,
    buildingNumber,
    additionalNumber,
    unitEnglishNumber,
    unitArabicNumber,

    normalInvoiceFooterLineOne,
    normalInvoiceFooterLineTwo,
    englishEpaymenyNumber,
    arabicEpaymenyNumber,
    englishPurchaseOrderRef,
    arabicPurchaseOrderRef,
    defaultOutwardServiceDetails,
    invoiceLayoutPostalCode,

    purchaseExeption,
    sellExeption,
    defaultPaymentTerms,
    minInvoiceItems,
    maxInvoiceItems,
    currencies,
    acceptedFractuonsRoundingUpTi,
  } = state;

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
      englishName &&
      arabicName &&
      category &&
      identificationNumber &&
      schemeType &&
      mobileNumber &&
      faxNumber &&
      email &&
      website &&
      vatNumber &&
      crNumber
    ) {
      setFormStep((prev) => prev + 1);
      setError("");
    } else if (
      formStep === 2 &&
      country &&
      city &&
      cityArabicName &&
      postalCode &&
      provinceEnglishName &&
      provinceArabicName &&
      areaEnglishName &&
      areaArabicName &&
      street &&
      streetArabicName &&
      buildingNumber &&
      additionalNumber &&
      unitEnglishNumber &&
      unitArabicNumber
    ) {
      setFormStep((prev) => prev + 1);
      setError("");
    } else if (
      formStep === 3 &&
      normalInvoiceFooterLineOne &&
      normalInvoiceFooterLineTwo &&
      englishEpaymenyNumber &&
      arabicEpaymenyNumber &&
      englishPurchaseOrderRef &&
      arabicPurchaseOrderRef &&
      defaultOutwardServiceDetails &&
      invoiceLayoutPostalCode
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
    if (
      purchaseExeption &&
      sellExeption &&
      defaultPaymentTerms &&
      minInvoiceItems &&
      maxInvoiceItems &&
      currencies &&
      acceptedFractuonsRoundingUpTi
    ) {
      navigate("/");
      setFormStep((prev) => prev + 1);
    } else {
      setError(`${t("newUser.formsData.error")}`);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-screen w-[90%] flex-col justify-between gap-[50px] py-[70px] md:justify-around ">
        {/* Form Head */}
        <FormHead formArray={formArray} formStep={formStep} />

        {/* Form Currently Desplayed */}
        <div>
          {formStep === 1 && (
            <StepOne
              toggleIsLogin={toggleIsLogin}
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
          <div className="my-[20px]">
            <p className={`text-center text-red-500 ${!error && "opacity-0"}`}>
              {error}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
