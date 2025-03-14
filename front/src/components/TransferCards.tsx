import React from "react";
import useBankStore from "../store/bankStore";

const TransferCards = () => {
  const {balance, avgDeposit, avgWithdraw} = useBankStore()
  console.log(balance)
  return (
    <div>
      <h2 className="text-2xl text-left">Your income</h2>
      <div className="flex justify-between mt-5 ">
        <div className=" bg-white drop-shadow-xl p-5 rounded-xl w-1/4">
          <p>Balance</p>
          <p>
            $ <span className="text-2xl font-bold">{balance}</span>
          </p>
        </div>
        <div className=" bg-white drop-shadow-xl p-5 rounded-xl w-1/4">
          <p>Average Deposit</p>
          <p>
            $ <span className="text-2xl font-bold">{avgDeposit}</span>
          </p>
        </div>
        <div className=" bg-white drop-shadow-xl p-5 rounded-xl w-1/4">
          <p>Average Withdraw</p>
          <p>
            $ <span className="text-2xl font-bold">{avgWithdraw}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransferCards;
