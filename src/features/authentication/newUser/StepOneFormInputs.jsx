import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import GridContainer from "../../../ui/GridContainer";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

export default function StepOneFormInputs({ inputHandle }) {
  const [t] = useTranslation();

  return (
    <Fragment>
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

      <div className="my-[30px]">
        <GridContainer>
          <Button variation="secondary">
            {t("newUser.formsData.uploadIdentityDocument")}
          </Button>
          <Button variation="secondary">
            {t("newUser.formsData.addLogo")}
          </Button>
        </GridContainer>
      </div>
    </Fragment>
  );
}
