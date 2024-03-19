import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import logo from "../../assets/logo.png";

function LoginForm({ toggleIsLogin }) {
  const [t] = useTranslation();

  return (
    <form className="flex w-[90%] flex-col gap-[30px] bg-white px-[10px] text-darkB md:w-[80%] md:px-[30px]">
      <img src={logo} alt="logo" className="mx-auto w-[180px]" />

      {/* User Name Feiled */}
      <Input placeholder={t("login.companyId")} />
      {/* User Email Feiled */}
      <Input placeholder={t("login.email")} />
      {/* Password Feiled & Forgot Password*/}
      <div>
        <Input type="password" placeholder={t("login.password")} />
        <span className="mt-[10px] block cursor-pointer text-sm underline transition-all hover:text-primary ltr:text-right rtl:text-left">
          {t("login.forgotPassword")}
        </span>
      </div>

      {/* Submit Button */}
      <div className="w-full">
        <Button type="submit">{t("login.title")}</Button>
      </div>

      {/* Create new user form button */}
      <span className="text-center text-sm font-medium transition-all">
        {t("login.newUser")}{" "}
        <span className="cursor-pointer text-primary" onClick={toggleIsLogin}>
          {t("login.signup")}
        </span>
      </span>
    </form>
  );
}

export default LoginForm;
