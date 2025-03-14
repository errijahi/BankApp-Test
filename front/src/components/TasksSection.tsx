import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskIntroduction from "./TaskIntroduction";
import useBankStore from "../store/bankStore";

const initialTasks = [
  {
    title: "Load Account Balance",
    description:" In this task You need to load total balance of the account, as well as average spent of the account and total earnings of the account. You will need to do calculations in the backend for all three things. Task requirements: \n *Total Balance: 'http://localhost:3306/api/totalBalance' \n *Average Deposit: 'http://localhost:3306/api/averageDeposit' \n *Average Withdraw: 'http://localhost:3306/api/averageWithdraw' ",
    progress: 0, // 0 means not started, 1 means completed
  },
  {
    title: "Load Account Transactions",
    description: "In the second task you need to fill table with data from transactions. Requirements: \n *Table needs to show exactly 7 record for the user \n *Data for specific user: 'http://localhost:3306/api/transactions?id=1'",
    progress: 0,
  },
  {
    title: "Show profile data ",
    description: "Compute average spending and earnings over time. Requirements: \n *Profile data: ",
    progress: 0,
  }
];

const TasksSection = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const {firstTask, secondTask, thirdTask} = useBankStore();


  useEffect(()=>{
    setTasks([
      {
        title: "Load Account Balance",
        description:"In this task you need to load the total account balance, as well as the average account spending and the total account earnings. You will need to perform background calculations for all three things. Task requirements: \n *Total balance: 'http://localhost:3306/api/balance?id=1' \n *Average deposit: 'http://localhost:3306/api/average-deposit?id=1' \n *Average withdrawal: 'http://localhost:3306/api/average-withdraw?id=1' ",
        progress: firstTask ? 1 : 0, // 0 means not started, 1 means completed
      },
      {
        title: "Load Account Transactions",
        description: "In the second task you need to fill the table with transaction data. Requirements: \n *The Table should display exactly 7 records for a user \n *Data for specific user: 'http://localhost:3306/api/transactions?id=1'",
        progress: secondTask ? 1 : 0,
      },
      {
        title: "Show profile data ",
        description: "In the third task you need to load profile data. Requirements: \n *Profile data: http://localhost:3306:/api/user?id=1 ",
        progress: thirdTask ? 1 : 0,
      }
    ])
  },[firstTask, secondTask, thirdTask])


  return (
    <div className="ml-6 bg-[#191A36] text-white p-5 rounded-2xl w-1/4 text-left flex flex-col gap-y-5">
      <TaskIntroduction />
      {tasks.map((task, index) => (
        <Task 
          key={index}
          title={task.title}
          description={task.description}
          progress={task.progress}

        />
      ))}
    </div>
  );
};

export default TasksSection;
