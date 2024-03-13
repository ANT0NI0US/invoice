export default function Button({
  children,
  type = "button",
  onClick,
  rounded = "rounded-md",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[45px] w-[163px]  bg-primary font-bold text-bgColor transition-all hover:bg-opacity-[0.8] ${rounded}`}
    >
      {children}
    </button>
  );
}
