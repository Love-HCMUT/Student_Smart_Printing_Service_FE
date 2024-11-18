import React, { memo } from 'react'

const FilePreview = ({ index, name, weight, func }) => {
    return (
        <div className="flex items-center justify-between border-2 border-dashed border-blue-600 bg-blue-100 p-2 rounded-md mt-2">
            <div className="flex-grow flex items-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="System Icons">
                        <path id="Vector" d="M16.0802 8.28671L9.18772 15.1792C8.34333 16.0236 7.19811 16.498 6.00397 16.498C4.80983 16.498 3.6646 16.0236 2.82022 15.1792C1.97583 14.3348 1.50146 13.1896 1.50146 11.9955C1.50146 10.8013 1.97583 9.65609 2.82022 8.81171L9.71272 1.91921C10.2756 1.35629 11.0391 1.04004 11.8352 1.04004C12.6313 1.04004 13.3948 1.35629 13.9577 1.91921C14.5206 2.48213 14.8369 3.24561 14.8369 4.04171C14.8369 4.8378 14.5206 5.60129 13.9577 6.16421L7.05772 13.0567C6.77626 13.3382 6.39451 13.4963 5.99647 13.4963C5.59842 13.4963 5.21668 13.3382 4.93522 13.0567C4.65376 12.7752 4.49563 12.3935 4.49563 11.9955C4.49563 11.5974 4.65376 11.2157 4.93522 10.9342L11.3027 4.57421" stroke="#6D7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>

                <span className="text-gray-900 ml-5">{name}</span>
            </div>

            <span className="text-gray-500 text-sm flex-shrink-0"> {(weight / 1024).toFixed(2)} KB</span>

            <button
                onClick={() => func(index)}
                className="ml-5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="System Icons">
                        <path id="Vector" d="M2.25 4.5H3.75H15.75" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector_2" d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72064 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector_3" d="M7.5 8.25V12.75" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="Vector_4" d="M10.5 8.25V12.75" stroke="#111827" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default memo(FilePreview)
