export default function GridContainer({
  children,
  columns = "md:grid-cols-2",
}) {
  return (
    <div
      className={`container mx-auto flex flex-col gap-[30px] px-4 md:grid ${columns}`}
    >
      {children}
    </div>
  );
}
