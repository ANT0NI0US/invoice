import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";

function Logo() {
  return (
    <Link to={"/dashboard"}>
      <div className="flex w-[100px] items-center justify-center sm:w-[257px]">
        <img
          src={logoImage}
          alt="logo"
          className="w-[50px] sm:h-[76px] sm:w-[78px]"
        />
      </div>
    </Link>
  );
}

export default Logo;
