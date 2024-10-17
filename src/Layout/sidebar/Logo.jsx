import { Link } from "react-router-dom";
import logoImage from "/public/logo.png";

export default function Logo() {
  return (
    <Link to={"/dashboard"}>
      <div className="flexCenter h-[113px]">
        <img src={logoImage} alt="logo" className="w-[100px]" />
      </div>
    </Link>
  );
}
