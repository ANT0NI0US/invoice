import { NavLink } from "react-router-dom";

const Tabs = ({ items }) => {
  return (
    <div className="Tabs flex w-full items-center justify-start gap-[10px]  border-b-[1px] border-lightB sm:gap-10">
      {items.map((item, index) => (
        <div key={index} className="self-end">
          <NavLink
            className={`block pb-3 text-[14px] font-medium leading-[21.78px] text-lightB sm:pb-5 sm:text-[18px] `}
            to={`/${item.path}`}
          >
            {item.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
