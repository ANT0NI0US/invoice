import React, { Fragment } from "react";
import Header from "../../../../ui/Header";
import { useTranslation } from "react-i18next";

const SequenceGenerator = () => {
  const [t] = useTranslation();

  const sequences = [
    {
      text: t(
        "sidebar.settings.sequenceGenerator.vendorsManagementErpRefrenece",
      ),
      status: t("sidebar.settings.sequenceGenerator.active"),
    },
    {
      text: t("sidebar.settings.sequenceGenerator.outwardInvoicesInvoice#"),
      status: t("sidebar.settings.sequenceGenerator.active"),
    },
    {
      text: t("sidebar.settings.sequenceGenerator.outwardInvoicesEPayment#"),
      status: t("sidebar.settings.sequenceGenerator.active"),
    },
    {
      text: t(
        "sidebar.settings.sequenceGenerator.customersManagementErpRefrenece",
      ),
      status: t("sidebar.settings.sequenceGenerator.active"),
    },
  ];
  return (
    <Fragment>
      <Header title="sidebar.settings.sequenceGenerator.sequenceGenerator" />
      <div className="flex flex-col gap-6">
        {sequences.map((sequence, index) => (
          <div
            key={index}
            className="flexBetween border-b-[0.5px]  border-lightB pb-[18px]"
          >
            <p className="text-dark">{sequence.text}</p>
            <span className="rounded-[72px] bg-[#09F42E] bg-opacity-[24%] px-[18px] py-2 font-medium text-[#018F0F]">
              {sequence.status}
            </span>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SequenceGenerator;
