export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`h-[45px] w-full rounded-md ${variation === "secondary" ? "bg-bgColor text-primary hover:bg-primary hover:text-bgColor" : "bg-primary hover:bg-opacity-[0.8]"} 
      border border-primary font-bold text-bgColor transition-all`}
    >
      {children}
    </button>
  );
}
