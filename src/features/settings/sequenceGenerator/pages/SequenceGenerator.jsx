import React, { Fragment } from "react";
import Header from "../../../../ui/Header";

const sequences = [
  {
    text: "Vendors Management erpRefrenece",
    status: "Active",
  },
  {
    text: "Outward Invoices invoice #",
    status: "Active",
  },
  {
    text: "Outward Invoices ePayment #",
    status: "Active",
  },
  {
    text: "Customers Management erpRefrenece",
    status: "Active",
  },
];

const SequenceGenerator = () => {
  return (
    <Fragment>
      <Header title="sidebar.settings.sequenceGenerator.sequenceGenerator" />
      <div className="flex flex-col gap-6">
        {sequences.map((sequence, index) => (
          <div className="flexBetween border-b-[0.5px]  border-lightB pb-[18px]">
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
