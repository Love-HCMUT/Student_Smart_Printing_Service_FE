import React from 'react'
import ConfirmPackage from '../components/Order/ConfirmPackage'
import TotalOrder from '../components/Order/TotalOrder'
import Note from '../components/Payment/Note'

const ConfirmOrderPage = () => {

    



    return (
        <div className='justify-center w-lvw min-h-screen bg-light-gray flex gap-10'>

            <div className='mb-[40px] mt-[80px] w-1/2 bg-white shadow-xl p-4 flex flex-col items-center gap-6'>
                <h1 className='p-2 font-bold text-2xl text-blue-800 w-full'>Confirm your orders</h1>
                <ConfirmPackage />
                <ConfirmPackage />
                <Note />
            </div>

            <div className='mt-[80px] w-1/5'>

                <TotalOrder />
            </div>
        </div>
    )
}

export default ConfirmOrderPage
