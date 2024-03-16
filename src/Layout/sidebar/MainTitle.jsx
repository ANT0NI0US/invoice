import { IoMdArrowDropdown } from "react-icons/io";

export default function MainTitle({ navigations }) {
  return (
    <div
      className={`mb-[10px] flex cursor-pointer items-center justify-center border-b border-primary bg-bgColor p-[10px]`}
    >
      <h3>{navigations}</h3>
      <IoMdArrowDropdown />
    </div>
  );
}
