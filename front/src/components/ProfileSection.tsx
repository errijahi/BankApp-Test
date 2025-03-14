import React from 'react'
import useBankStore from '../store/bankStore'

const ProfileSection = () => {
    const {user} = useBankStore()
  return (
     user && 
    <div className="grid gap-6 mb-6 md:grid-cols-2 text-left shadow-2xl p-5 rounded-xl">
   <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">First Name</label>
        <input type="text" id="first_name" disabled className="bg-gray-50 border border-gray-300
         text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
           dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           placeholder={user.firstName} required />
    </div>
    <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">Last Name</label>
        <input type="text" id="last_name" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.lastName} required />
    </div>
    <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Account Number</label>
        <input type="text" id="company" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.accountNumber} required />
    </div>  
    <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Phone Number</label>
        <input type="tel" id="phone" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.phoneNumber} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
    </div>
    <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
        <input type="url" id="website" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.email}required />
    </div>
    <div>
        <label  className="block mb-2 text-sm font-medium text-gray-900 ">Date of birth</label>
        <input type="number" id="visitors" disabled className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={user.dateOfBirth} required />
    </div>
</div>
  )
}

export default ProfileSection