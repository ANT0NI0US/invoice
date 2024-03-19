import { IoIosArrowDown } from "react-icons/io";

export default function MainTitle({ setNavigations }) {
  return (
    <div className="relative">
      <select
        onChange={(e) => setNavigations(e.target.value)}
        className="mb-[15px] w-full appearance-none border-b border-primary bg-bgColor p-[10px] indent-[5px] font-medium text-primary outline-none"
      >
        <option value="main" className="text-dark">
          Main
        </option>
        <option value="todo" className="text-dark">
          To Do
        </option>
      </select>
      <IoIosArrowDown className=" absolute right-[10px] top-[35%] translate-y-[-35%] text-xl text-primary" />
    </div>
  );
}
