const Table = ({columns , data}) => {
  return (
    <div className="overflow-x-auto">
    <table className="space-y-6 min-w-full">
      <thead className=" bg-[#BCD2E0] bg-opacity-[12%]">
        <tr className=" rounded-[12px]">
          {columns.map((column, index) => (
            <th
              key={index}
              className={`text-gray-500 py-7 text-[14px] capitalize font-medium tracking-wider text-center ${columns.length - 1 === index && " rounded-tr-[12px]"} ${index === 0 && " rounded-tl-[12px]"}`}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={`${rowIndex %2 === 0 ? "bg-white" : "bg-[#BCD2E0] bg-opacity-[12%]"} border-b border-gray`}>
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`text-gray-500 whitespace-nowrap px-6 py-4 text-sm text-center`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table