import { BsFillGridFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import TranslateButton from "@/ui/TranslateButton";
import userImage from "@/assets/user.png";

export default function Header({ toggleSidebar }) {
  return (
    <div className="flexBetween relative z-[100] h-[113px] border-b-[0.1px] border-lightGray bg-bgColor">
      <div className="flexBetween w-full p-[15px]">
        <div>
          <BsFillGridFill
            onClick={toggleSidebar}
            className="block text-primary md:hidden"
          />
        </div>

        <div className="flex items-center gap-[20px]">
          <TranslateButton />
          <img src={userImage} alt="user" className="h-[43px] w-[43px]" />
          <IoMdNotificationsOutline />
        </div>
      </div>
    </div>
  );
}
