import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { MdAddBox } from "react-icons/md";

export default function Table({
  columns,
  data,
  backColor = "bg-[#BCD2E0] bg-opacity-[12%]",
  textColor = "text-dark",
}) {
  const { t } = useTranslation();

  return (
    <div className="max-h-[calc(100vh-150px)] overflow-x-auto rounded-tl-[12px] rounded-tr-[12px]">
      <table className="min-w-full space-y-6 ">
        <thead className={`${backColor} ${textColor}`}>
          <tr className=" rounded-[12px]">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-4 py-7 text-center text-[14px] font-medium capitalize tracking-wider`}
              >
                {t(`${column}`)}
              </th>
            ))}
          </tr>
        </thead>
        {data.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={columns.length}>
                <div className="flexCenter mt-5 gap-1 text-center">
                  {textColor === "text-dark" ? (
                    <>
                      <MdError />
                      <p className="font-semibold">{t("table.noDataFound")}</p>
                    </>
                  ) : (
                    <>
                      <MdAddBox />
                      <p className="font-semibold">
                        {t("table.addNewProduct")}
                      </p>
                    </>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody className="bg-white">
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={` border-b border-gray`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`text-gray-500 whitespace-nowrap px-6 py-4 text-center text-sm ${cell === "info" && "flexCenter"}`}
                  >
                    {cell === "info" ? <FaInfoCircle /> : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
