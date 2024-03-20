import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { FaInfoCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { MdAddBox } from "react-icons/md";

// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";

const Table = ({
  columns,
  data,
  backColor = "bg-[#BCD2E0] bg-opacity-[12%]",
  textColor = "text-dark",
}) => {
  const [t] = useTranslation();

  return (
    <div className="max-h-[calc(100vh-150px)] overflow-x-auto">
      <table className="min-w-full space-y-6 ">
        <thead className={`${backColor} ${textColor}`}>
          <tr className=" rounded-[12px]">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-4 py-7 text-center text-[14px] font-medium capitalize tracking-wider ${
                  columns.length - 1 === index && " rounded-tr-[12px]"
                } ${index === 0 && " rounded-tl-[12px]"}`}
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
                    <Fragment>
                      <MdError />
                      <p className="font-semibold">No Data Found</p>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <MdAddBox />
                      <p className="font-semibold">Add New Product</p>
                    </Fragment>
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
      {/* 
      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          Page
          <span className="text-gray-700 dark:text-gray-100 font-medium">
            1 of 10
          </span>
        </div>

        <div className="mt-4 flex items-center gap-x-4 sm:mt-0">
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize transition-colors duration-200 sm:w-auto"
          >
            <GrPrevious />

            <span>previous</span>
          </a>

          <a
            href="#"
            className="text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 flex w-1/2 items-center justify-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize transition-colors duration-200 sm:w-auto"
          >
            <span>Next</span>

            <GrNext />
          </a>
        </div>
        </div>
      */}
    </div>
  );
};

export default Table;
