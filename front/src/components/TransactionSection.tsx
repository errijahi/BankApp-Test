import React from 'react'
import Transaction from './Transaction'
import useBankStore from '../store/bankStore'

const TransferSection = () => {
const {transactions} = useBankStore();

console.log(transactions)
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 hover:bg-white">
        <thead className="text-xs text-[#FFA21E] uppercase bg-[#414AFD] ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Timestamp
                </th>  
            </tr>
        </thead>
        <tbody>
            {
                transactions.map(transaction =><Transaction id={transaction.id} amount={transaction.amount} type={transaction.type} timestamp={transaction.timestamp} />)
            }

        </tbody>
    </table>
</div>

  )
}

export default TransferSection