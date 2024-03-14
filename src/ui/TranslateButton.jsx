import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";
import { useOutsideClick } from "../hooks/useOutesideClick";

const TranslateButton = () => {
  const [t, i18n] = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const ref = useOutsideClick(() => setOpenMenu(false));

  const languageNow = i18n.language;

  useEffect(() => {
    if (languageNow === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [languageNow]);

  const changeLanguageAndDirection = (language) => {
    i18n.changeLanguage(language);

    if (language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else if (language === "en") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  };

  return (
    <div
      ref={ref}
      className="relative flex cursor-pointer items-center gap-[10px] rounded-full bg-blue px-[10px] py-[5px] text-dark hover:bg-opacity-[0.8]"
      onClick={toggleMenu}
    >
      <MdLanguage className="text-[20px]" />
      <p className="rounded-full bg-bgColor p-[3px] text-xs font-bold">
        {i18n.language}
      </p>

      {openMenu && (
        <div
          className={`absolute bottom-[-65px] left-[50%] w-[50px] translate-x-[-50%] rounded-md bg-bgColor p-[5px] text-center text-sm shadow-lg`}
        >
          <p
            className="rounded-md transition-all hover:bg-blue hover:text-bgColor"
            onClick={() => {
              changeLanguageAndDirection("en");
              i18n.changeLanguage("en");
            }}
          >
            EN
          </p>
          <p
            onClick={() => {
              changeLanguageAndDirection("ar");
              i18n.changeLanguage("ar");
            }}
            className="rounded-md transition-all hover:bg-blue hover:text-bgColor"
          >
            AR
          </p>
        </div>
      )}
    </div>
  );
};

export default TranslateButton;
