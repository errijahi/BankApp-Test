import React from 'react'

interface transaction {
    id:number,
    amount:number,
    type: string,
    timestamp: string,
}

const Transaction = ({id, amount, type, timestamp}:transaction) => {
  return (
    <tr className="bg-[#F5F6FB] border-b   border-gray-200 hover:bg-white ">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    {id}
                </th>
                <td className="px-6 py-4">
                    {amount}
                </td>
                <td className="px-6 py-4">
                    {type}
                </td>
                <td className="px-6 py-4">
                    {timestamp}
                </td>
            </tr>
  )
}

export default Transaction