import { NavLink } from "react-router-dom";

const Tabs = ({ items }) => {
  return (
    <div className="Tabs flex w-full items-center justify-start gap-10 border-b-[1px] border-lightB">
      {items.map((item, index) => (
        <div key={index}>
          <NavLink
            className={`block pb-5 text-[18px] font-medium leading-[21.78px] text-lightB `}
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
