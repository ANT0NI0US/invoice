import { useTranslation } from "react-i18next";
import Button from "../../ui/Button";

function LoginForm({ toggleIsLogin }) {
  const [t] = useTranslation();

  return (
    <form className="w-[90%]  bg-white px-[10px]  text-darkB md:px-[30px]">
      <h1 className="text-gray-800 mb-[40px] text-center text-3xl font-bold">
        {t("login.title")}
      </h1>
      {/* User Name Feiled */}
      <div>
        <label htmlFor="userName" className="text-darkB">
          {t("login.userName")}
        </label>
        <div className="mb-4 mt-[5px] flex items-center border-2 border-lightB px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 h-5 w-5"
            viewBox="0 0 20 20"
            fill=""
          >
            <path
              fill="#576E7E"
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="#576E7E"
            />
          </svg>
          <input
            className="w-full border-none pl-2 outline-none placeholder:text-sm placeholder:text-lightB"
            type="text"
            name=""
            id="userName"
            placeholder={t("login.userName")}
          />
        </div>
      </div>

      {/* Password Feiled */}
      <div>
        <label htmlFor="password" className="text-darkB">
          {t("login.password")}
        </label>
        <div className="mt-[5px] flex items-center border-2 border-lightB px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill="#576E7E"
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="#576E7E"
            />
          </svg>
          <input
            className="w-full border-none pl-2 outline-none placeholder:text-sm placeholder:text-lightB"
            type="text"
            name="password"
            id="password"
            placeholder={t("login.password")}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="my-[20px]">
        <Button type="submit">{t("login.title")}</Button>
      </div>

      <span className="my-[10px] ml-2 block cursor-pointer text-sm underline transition-all hover:text-primary">
        {t("login.forgotPassword")}
      </span>

      <span
        className="ml-2 cursor-pointer text-sm underline transition-all hover:text-primary"
        onClick={toggleIsLogin}
      >
        {t("login.newUser")}
      </span>
    </form>
  );
}

export default LoginForm;
