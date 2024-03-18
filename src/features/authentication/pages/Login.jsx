import { useState } from "react";
import logo from "../assets/logo2.png";
import image from "../assets/loginImage.png";
import billImage from "../assets/billImage.png";
import LoginForm from "../LoginForm";
import NewUserForm from "../newUser/NewUserForm";
import TranslateButton from "../../../ui/TranslateButton";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => setIsLogin((prev) => !prev);

  return (
    <div className="relative h-screen md:flex">
      <div className=" absolute top-[30px] ltr:left-[50px] rtl:right-[50px]">
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
      <div className="relative hidden w-[563px] flex-col items-center justify-around overflow-hidden bg-primary bg-gradient-to-tr md:flex ">
        {/* Logo container */}
        <div className=" flex w-full items-center justify-between px-[10px]">
          <img src={image} alt="login Image" className="h-[83px] w-[303px]" />
          <img src={logo} alt="logo" className="h-[68px] w-[70px]" />
        </div>

        {/* Text Container*/}
        <div className="text-center text-3xl text-white">
          <h1>الفاتوره الالكترونيه</h1>
          <p className="mt-1">E-Invoice</p>
        </div>
        {/* Bill Image */}
        <div>
          <img
            src={billImage}
            alt="bill image"
            className="h-[323px] w-[370px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
