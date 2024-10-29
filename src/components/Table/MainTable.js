import { useState } from 'react';
import MiniBox from '../MiniBox';

const tableColor = '#FCFCFD';
const tableBorderColor = '#EAECF0';
const fontSize = '16px';
const padding = '0.5%';

const TableArgument = [
    {
        title: 'Select',
        type: 'Checkbox',
        style: {
            display: 'inline-block',
            alignItems: 'center',
            width: 'auto',
            align: 'center',
            color: 'black',
            background: tableColor,
            fontSize: fontSize,
            padding: padding,
            borderTop: `2px solid ${tableBorderColor}`,
            borderBottom: `2px solid ${tableBorderColor}`,
        }
    },
    {
        title: 'Name',
        type: 'Text',
        style: {
            display: 'inline-block',
            alignItems: 'center',
            width: 'auto',
            align: 'center',
            color: 'black',
            background: tableColor,
            fontSize: fontSize,
            padding: padding,
            borderTop: `2px solid ${tableBorderColor}`,
            borderBottom: `2px solid ${tableBorderColor}`,
        }
    }
];

export default function MainTable({
    width = '100%',
    height = 'auto',
    overflow = 'auto',
    borderCollapse = 'collapse',
    rowsData = [],
}) {
    const [rows, setRows] = useState(rowsData);

    return (
        <table
            style={{
                width: width,
                height: height,
                overflow: overflow,
                borderCollapse: borderCollapse,
            }}
        >
            <thead>
                <tr>
                    {TableArgument.map((column, index) => (
                        <th
                            key={index}
                            style={{
                                display: column.style.display,
                                alignItems: column.style.alignItems,
                                textAlign: column.style.align,
                                fontSize: column.style.fontSize,
                                color: column.style.color,
                                backgroundColor: column.style.background,
                                padding: column.style.padding,
                                borderTop: column.style.borderTop,
                                borderBottom: column.style.borderBottom,
                            }}
                        >
                            {column.type === 'Checkbox' ? (
                                <MiniBox type='minus' width="20px" height="20px" />
                            ) : (
                                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                    {column.title}
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="arrow-down">
                                            <path
                                                id="Icon"
                                                d="M8.08217 3.66766V12.6425M8.08217 12.6425L12.5696 8.1551M8.08217 12.6425L3.59473 8.1551"
                                                stroke="#667085"
                                                strokeWidth="1.28213"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {TableArgument.map((column, colIndex) => (
                            <td
                                key={colIndex}
                                style={{
                                    display: column.style.display,
                                    alignItems: column.style.alignItems,
                                    textAlign: column.style.align,
                                    fontSize: column.style.fontSize,
                                    color: column.style.color,
                                    backgroundColor: 'white',
                                    padding: column.style.padding,
                                    borderBottom: column.style.borderBottom,
                                }}
                            >
                                {column.type === 'Checkbox' ? (
                                    <MiniBox type='check' width="20px" height="20px" />
                                ) : (
                                    row[column.title.toLowerCase()] || ''
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
