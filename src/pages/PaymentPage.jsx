import React from 'react'
import Combo from '../components/Payment/Combo'
import PaymentMethod from '../components/Payment/PaymentMethod'
import Note from '../components/Payment/Note'
import TotalPayment from '../components/Payment/TotalPayment'

const PaymentPage = () => {
    return (
        <div className='justify-center w-lvw min-h-screen bg-light-gray flex gap-10'>

            <div className='mb-[40px] mt-[50px] w-1/2p-4 flex flex-col items-center gap-6'>
                <h1 className='p-2 font-bold text-2xl text-blue-800 w-full'>Choose your combo papers</h1>
                <div className='grid grid-cols-4'>
                    <Combo></Combo>
                    <Combo></Combo>
                    <Combo></Combo>
                    <Combo></Combo>
                    <Combo></Combo>
                    <Combo></Combo>
                    <Combo></Combo>
                    <Combo></Combo>

                    <PaymentMethod byBank={false} />
                    <PaymentMethod />

                    <div className='col-span-4 px-5 mt-10'>
                        <Note />
                    </div>
                </div>
            </div>

            <div className='mb-[40px] mt-[80px] w-1/5 flex flex-col gap-5 items-center'>
                <TotalPayment />
                <div className='w-full flex justify-center items-center'>
                    <button type="button" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Confirm transaction
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PaymentPage
