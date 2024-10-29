import React, { useState } from 'react';

export default function MiniBox({ width = '30px', height = '30px', type = 'check' }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        if (type === 'check') {
            setIsChecked(prev => !prev);
        }
    };

    return (
        <div
            onClick={handleToggle}
            style={{
                width,
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                border: '1.92px solid #0070FF',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: type === 'check' ? 'pointer' : 'default',
                backgroundColor: isChecked ? '#0070FF' : '#F7FAFF',
                boxSizing: 'border-box',
            }}
        >
            {type === 'check' ? (
                <TickMark isChecked={isChecked} />
            ) : type === 'minus' ? (
                <MinusMark />
            ) : null}
        </div>
    );
}

function TickMark({ isChecked }) {
    return (
        isChecked && (
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="check">
                    <path
                        id="Icon"
                        d="M11.22 4.09967L5.04977 10.2699L2.24512 7.46525"
                        stroke="white"
                        strokeWidth="1.92319"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
            </svg>
        )
    );
}

function MinusMark() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="minus">
                <path
                    id="Icon"
                    d="M2.80469 7.15509H10.6577"
                    stroke="#0070FF"
                    strokeWidth="1.92319"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}
