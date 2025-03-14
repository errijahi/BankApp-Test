import React from 'react'
import TransferCards from './TransferCards'
import Statistics from './TransactionSection'
import ProfileSection from './ProfileSection'
import TransferSection from './TransactionSection'

const MainSection = () => {
  return (
    <div className='w-3/4 ml-15 flex flex-col gap-y-12'>
     <TransferCards />
     <TransferSection />
     <ProfileSection />
    </div>
  )
}

export default MainSection