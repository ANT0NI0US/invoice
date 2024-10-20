import { useTranslation } from "react-i18next";
import Input from "@/ui/Input";
import GridContainer from "@/ui/GridContainer";

export default function StepTwoFormInputs({ inputHandle }) {
  const { t } = useTranslation();

  return (
    <>
      <GridContainer>
        <Input
          placeholder={t("newUser.formsData.country")}
          name={"country"}
          handleChange={inputHandle}
        />

        <Input
          placeholder={t("newUser.formsData.city")}
          name={"city"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.cityArabicName")}
          name={"cityArabicName"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.postalCode")}
          name={"postalCode"}
          handleChange={inputHandle}
          type="number"
        />

        <Input
          placeholder={t("newUser.formsData.provinceEnglishName")}
          name={"provinceEnglishName"}
          handleChange={inputHandle}
        />

        <Input
          placeholder={t("newUser.formsData.provinceArabicName")}
          name={"provinceArabicName"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.areaEnglishName")}
          name={"areaEnglishName"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.areaArabicName")}
          name={"areaArabicName"}
          handleChange={inputHandle}
        />

        <Input
          placeholder={t("newUser.formsData.street")}
          name={"street"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.streetArabicName")}
          name={"streetArabicName"}
          handleChange={inputHandle}
        />
      </GridContainer>

      <div className="container mx-auto my-[30px] px-4">
        <Input
          placeholder={t("newUser.formsData.buildingNumber")}
          name={"buildingNumber"}
          handleChange={inputHandle}
          type="number"
        />
      </div>

      <GridContainer columns="md:grid-cols-3">
        <Input
          placeholder={t("newUser.formsData.additionalNumber")}
          name={"additionalNumber"}
          handleChange={inputHandle}
          type="number"
        />

        <Input
          placeholder={t("newUser.formsData.unitEnglishNumber")}
          name={"unitEnglishNumber"}
          handleChange={inputHandle}
        />
        <Input
          placeholder={t("newUser.formsData.unitArabicNumber")}
          name={"unitArabicNumber"}
          handleChange={inputHandle}
        />
      </GridContainer>
    </>
  );
}
