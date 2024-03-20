import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import GridContainer from "../../../ui/GridContainer";

export default function StepOne({ inputHandle, next, toggleIsLogin }) {
  const [t] = useTranslation();

  return (
    <Fragment>
      {/* Start Inputs */}
      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.englishName")}
          name={"englishName"}
          handleChange={inputHandle}
        />

        <Input
          placeholder={t("newUser.formsData.arabicName")}
          name={"arabicName"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.category")}
          name={"category"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.identificationNumber")}
          name={"identificationNumber"}
          handleChange={inputHandle}
          type="number"
        />
      </GridContainer>

      <div className="my-[30px]">
        <GridContainer columns={"md:grid-cols-3"}>
          <Input
            placeholder={t("newUser.formsData.schemeType")}
            name={"schemeType"}
            handleChange={inputHandle}
          />
          <Input
            placeholder={t("newUser.formsData.mobileNumber")}
            name={"mobileNumber"}
            handleChange={inputHandle}
            type="number"
          />
          <Input
            placeholder={t("newUser.formsData.faxNumber")}
            name={"faxNumber"}
            handleChange={inputHandle}
            type="number"
          />
        </GridContainer>
      </div>

      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.email")}
          name={"email"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.website")}
          name={"website"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.vatNumber")}
          name={"vatNumber"}
          handleChange={inputHandle}
          type="number"
        />
        <Input
          placeholder={t("newUser.formsData.crNumber")}
          name={"crNumber"}
          handleChange={inputHandle}
          type="number"
        />
      </GridContainer>
      {/* End Inputs */}

      <div className="my-[30px]">
        <GridContainer>
          <Button>{t("newUser.formsData.uploadIdentityDocument")}</Button>
          <Button>{t("newUser.formsData.addLogo")}</Button>
        </GridContainer>
      </div>

      {/* Next Btn */}
      <div className="ml-auto flex items-center justify-between">
        <div className="w-[100px]">
          <Button onClick={toggleIsLogin}>{t("newUser.formsData.back")}</Button>
        </div>
        <div className="w-[100px]">
          <Button onClick={next}>{t("newUser.formsData.next")}</Button>
        </div>
      </div>
    </Fragment>
  );
}
