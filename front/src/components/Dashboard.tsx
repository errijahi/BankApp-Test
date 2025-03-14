import React, { useEffect } from 'react'
import MainSection from './MainSection'
import TasksSection from './TasksSection'
import useBankStore from '../store/bankStore';
import useApiStore from '../store/hostStore';

const Dashboard = () => {
  const {
    user,
    balance,
    avgWithdraw,
    avgDeposit,
    transactions,
    fetchAllData,
    isLoading,
    error,
  } = useBankStore();

  const {apiUrl} = useApiStore();

  useEffect(() => {
    fetchAllData(1); // Fetch data for user with ID 1
  }, [apiUrl]);

  return (
    <div className='flex w-full'>
        <MainSection />
        <TasksSection />
    </div>
  )
}

export default Dashboard