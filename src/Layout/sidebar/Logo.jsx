import { Link } from "react-router-dom";
import logoImage from "/public/logo.png";

export default function Logo() {
  return (
    <Link to={"/dashboard"}>
      <div className="flex h-[113px] items-center justify-center">
        <img src={logoImage} alt="logo" className=" w-[100px]" />
      </div>
    </Link>
  );
}
