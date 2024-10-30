import React from 'react'
import FilePreview from './FilePreview'


const Package = () => {
    return (
        <div className='px-6 py-3 bg-slate-200 rounded w-1/2'>

            <div className='h-[230px] w-full flex justify-center items-center rounded gap-6'>
                {/* format section */}
                <div className='flex-1 flex-col items-center justify-center'>
                    <div className='my-2'>
                        <h3 className='font-bold'>Format</h3>
                        <div className='grid grid-cols-3 gap-1'>
                            <div className='px-2 flex justify-between items-center'>
                                <label className="font-medium mr-2">Copy</label>
                                <input
                                    type="number"
                                    name="copies"
                                    min="1"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                            <div className='px-1 flex justify-between items-center'>
                                <label className="font-medium mr-2">Sides</label>
                                <input
                                    type="number"
                                    name="toPage"
                                    min="1"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>


                            <div className='px-2 flex justify-between items-center'>
                                <label className="font-medium mr-2">Paper</label>
                                <select
                                    name="paper"
                                    className="w-14 border border-gray-300 rounded p-1 text-center"
                                >
                                    <option value="A4">A4</option>
                                    <option value="A3">A3</option>
                                </select>
                            </div>


                            <div className='px-2 flex justify-between items-center'>
                                <label className="font-medium mr-2">From</label>
                                <input
                                    type="number"
                                    name="fromPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                            <div className='px-1 flex justify-between items-center'>
                                <label className="font-medium mr-2">To</label>
                                <input
                                    type="number"
                                    name="toPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                        </div>
                    </div>


                    <div className='my-2'>
                        <h3 className='font-bold'>After printing</h3>
                        <div className='grid grid-cols-3 gap-1'>
                            <div className='px-2 flex text-center items-center'>
                                <label className="font-medium mr-2">Cover</label>
                                <input
                                    type="checkbox"
                                    name="toPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                            <div className='px-2 flex text-center items-center'>
                                <label className="font-medium mr-2">Binding</label>
                                <input
                                    type="checkbox"
                                    name="toPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                            <div className='px-2 flex text-center items-center'>
                                <label className="font-medium mr-2">Glass</label>
                                <input
                                    type="checkbox"
                                    name="toPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                        </div>
                    </div>

                    <div className='my-2'>
                        <h3 className='font-bold'>Color printing</h3>
                        <div className='grid grid-cols-3 gap-1'>
                            <div className='px-2 flex text-center items-center'>
                                <label className="font-medium mr-2">Cover</label>
                                <input
                                    type="checkbox"
                                    name="toPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                            <div className='px-2 flex text-center items-center'>
                                <label className="font-medium mr-2">Binding</label>
                                <input
                                    type="checkbox"
                                    name="toPage"
                                    min="0"
                                    className="max-w-14 border border-gray-300 rounded p-1 text-center"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* attachment section */}
                <div className='flex-1'>

                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center h-[200px] w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition duration-200">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-sm text-gray-700"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-xs text-gray-600">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>


                </div>

            </div >

            {/* FILE PREVIEW */}
            <div className="w-full grid gap-1 mb-4">
                {/* file */}
                <FilePreview name="filename.pdf" weight={2} />
                <FilePreview name="filename.pdf" weight={2} />
            </div>

        </div >
    )
}

export default Package
