import React from 'react'
import Package from '../components/Order/Package'
import Note from '../components/Payment/Note'

const OrderPage = () => {
    return (
        <div className='bg-white w-lwh flex justify-center items-center flex-col'>
            <h1 className='mt-[30px] h-[80px] text-left w-2/3 font-bold text-3xl flex items-center text-blue-800'>Your orders</h1>

            <div className='p-10 border bg-light-gray h-full w-2/3 shadow-xl flex flex-col justify-center items-center gap-10'>
                {/* package */}
                <Package />
                <Package />

                <div className="col-span-1 flex items-end justify-end">
                    <button
                        type="button"
                        className="min-w-[100px] text-white bg-blue-400 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add more packages
                    </button>
                </div>

                <div className="grid grid-cols-6 w-5/6">
                    {/* note */}
                    <div className="col-span-5">
                        <Note />
                    </div>
                    {/* button */}
                    <div className="col-span-1 flex items-end justify-end">
                        <button
                            type="button"
                            className="min-w-[100px] text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Next
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OrderPage
