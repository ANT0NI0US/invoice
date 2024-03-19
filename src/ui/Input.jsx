export default function Input({ type = "text", placeholder }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="input"
        id={placeholder}
      />
      <label
        htmlFor={placeholder}
        className="absolute top-[-15px] bg-bgColor p-[3px] text-sm ltr:left-[15px] rtl:right-[15px]"
      >
        {placeholder} *
      </label>
    </div>
  );
}
