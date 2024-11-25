import React from 'react'

const SettingPaper = () => {
    return (
        <>
            <div className="p-6 flex items-start justify-center gap-10">
                {/* Form 1 */}
                <form className="w-1/4 border border-gray-300 rounded-lg shadow-md p-5 bg-white flex flex-col">
                    <span className="mb-5 text-xl text-center font-semibold">FREE PAPER PER MONTH</span>

                    {Array.from({ length: 12 }, (_, index) =>
                        <div className="relative z-0 w-full mb-3 group">
                            <input type="number" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6">
                                Thang {index + 1}
                            </label>
                        </div>
                    )}

                </form>


                <form className="w-1/3 border border-gray-300 rounded-lg shadow-md p-5 bg-white flex flex-col">
                    <span className="mb-6 text-xl font-semibold text-center">FREE PAPER PER MONTH</span>
                    <div className="relative z-0 w-full mb-3 group">
                        <input type="number" max={28} min={1} name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6">
                            Day to add free papers
                        </label>
                    </div>

                    <input type="text" />

                    <button
                        type="submit"
                        className="text-white mt-10 bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}

export default SettingPaper
