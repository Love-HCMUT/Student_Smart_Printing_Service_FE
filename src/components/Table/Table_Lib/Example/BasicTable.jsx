import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { useTable, useSortBy } from 'react-table'

export const MyTable = () => {
    // useMemo is a React hook that memorizes the output of a function
    // useMemo is used to let data not be rerendered on every render
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    },
        useSortBy // useSortBy is a hook that enables sorting
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance

    return (
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {
                                headerGroups.headers.map((columns) => (
                                    <th {...columns.getHeaderProps(
                                        columns.getSortByToggleProps() // getSortByToggleProps is a function that returns props for the sorting button
                                    )}>
                                        {columns.render('Header')}
                                        <span>
                                            {columns.isSorted ? (columns.isSortedDesc ? ' 🔽' : ' 🔼') : ''} {/* If the column is sorted, display an up or down arrow */}
                                        </span>
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
