import { Fragment } from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function FormHead({ formArray, formStep }) {
  // Calc the percentage to desplay line progress
  const percentageCompleted = (formStep / formArray.length) * 100;
  const [t] = useTranslation();

  return (
    <div>
      <h1 className="text-3xl">{t("newUser.title")}</h1>
      <div className="relative mt-[30px] flex items-center justify-around">
        {formArray.map((v, i) => (
          <Fragment key={i}>
            <div
              className={`z-[100] h-[64px] w-[64px] rounded-full text-bgColor
              ${formStep === v ? "bg-lightGray" : formStep > v ? "bg-primary" : "bg-lightGray"} flex h-[35px] items-center
              justify-center`}
            >
              <FaCheck
                className={`text-2xl ${formStep > v ? "text-bgColor" : "text-black"}`}
              />
            </div>

            {i !== formArray.length - 1 && (
              <div
                style={{ width: `${percentageCompleted}%` }}
                className={`absolute z-[95] h-[2px] bg-darkB ltr:left-0 rtl:right-0`}
              ></div>
            )}

            {i !== formArray.length - 1 && (
              <div
                className={`absolute z-[90] h-[2px] w-[90%] bg-lightGray`}
              ></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
