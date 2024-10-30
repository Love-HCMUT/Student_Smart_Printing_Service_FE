import React from 'react'

const TotalPayment = () => {
    return (
        <div className='w-1/4 bg-white py-3 px-4 rounded-lg shadow-lg'>
            <span className='text-xl font-bold mb-3'>Your cart</span>

            <div className='flex gap-2 justify-between mt-4'>
                <span>Combo 1</span>

                <div class="relative flex items-center">
                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input type="text" id="counter-input" data-input-counter class="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center" placeholder="" value="12" required />
                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

                <span>300.000 VND</span>

                <div className="flex justify-center items-center text-center hover:cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="System Icons">
                            <path id="Vector" d="M2.25 4.5H3.75H15.75" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_2" d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_3" d="M7.5 8.25V12.75" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path id="Vector_4" d="M10.5 8.25V12.75" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default TotalPayment
