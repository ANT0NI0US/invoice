import { useState } from "react";
import LoginForm from "../LoginForm";
import NewUserForm from "../newUser/NewUserForm";
import billImage from "@/assets/billImage.png";
import TranslateButton from "@/ui/TranslateButton";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => setIsLogin((prev) => !prev);

  return (
    <div className="relative h-screen md:flex">
      <div className="absolute top-[20px] ltr:left-[50px] rtl:right-[50px]">
        <TranslateButton />
      </div>

      {/* Form Container */}
      <div className="flex h-full w-full items-center justify-center bg-white py-10 ">
        {isLogin ? (
          <LoginForm toggleIsLogin={toggleIsLogin} />
        ) : (
          <NewUserForm toggleIsLogin={toggleIsLogin} />
        )}
      </div>

      {/* images Container */}
      <div className="relative hidden w-[40%] items-center justify-around overflow-hidden bg-primary bg-gradient-to-tr md:flex">
        <div>
          <img src={billImage} alt="bill" className="h-[323px] w-[370px]" />
        </div>
      </div>
    </div>
  );
}
