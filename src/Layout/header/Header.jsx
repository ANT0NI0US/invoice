import { BsFillGridFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import TranslateButton from "../../ui/TranslateButton";
import Logo from "./Logo";
import userImage from "../../assets/user.png";

function Header({ tggleSidebar }) {
  return (
    <div className="flex h-[113px] items-center justify-between">
      <Logo />

      <div className="flex w-full items-center justify-between  p-[10px]">
        <div>
          <BsFillGridFill
            onClick={tggleSidebar}
            className="block text-primary sm:hidden"
          />
        </div>

        <div className="flex items-center gap-[20px]">
          <TranslateButton />
          <img src={userImage} alt="user photo" className="h-[43px] w-[43px]" />
          <IoMdNotificationsOutline />
        </div>
      </div>
    </div>
  );
}
export default Header;
