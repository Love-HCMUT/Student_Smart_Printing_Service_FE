import React from 'react'

const PageSetting = () => {
    return (
        <div className="mt-2 px-4 py-2 rounded-lg bg-slate-100 max-w-md mx-auto">
            <div className="flex items-center mb-2">
                <label for="small-input" className="flex-1 text-sm font-medium">From to</label>
                <input
                    type="text"
                    id="small-input"
                    className="flex-grow h-8 px-3 rounded-md text-gray-800 focus:outline-none"
                    placeholder="1,2,3;5-6"
                />
            </div>

            {/* <!-- Sắp xếp Orientation và Color trên cùng một dòng --> */}
            <div className="flex gap-1">

                <div className="flex items-center flex-[0.5]">
                    <label className="text-sm font-medium mr-2">Color</label>
                    <input
                        type="checkbox"
                        name="toPage"
                        className="w-5 h-5 border-gray-300 rounded bg-white accent-slate-600"
                    />
                </div>

                <div className="flex items-center flex-1">
                    <label className="text-sm font-medium mr-2">Orientation</label>
                    <select
                        name="paper"
                        className="h-8 rounded-md text-gray-800 w-full focus:outline-none"
                    >
                        <option value="Landscape">Landscape</option>
                        <option value="Portrait">Portrait</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default PageSetting
