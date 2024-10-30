import React, { useMemo } from 'react'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Table_Lib/columns'
import { useTable, useSortBy, usePagination } from 'react-table'

export const PaginationTable = () => {
    // useMemo is a React hook that memorizes the output of a function
    // useMemo is used to let data not be rerendered on every render
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    },
        useSortBy, // useSortBy is a hook that enables sorting,
        usePagination // usePagination is a hook that enables pagination
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page, // page use for pagination
        nextPage, // nextPage is a function that moves to the next page
        previousPage, // previousPage is a function that moves to the previous page
        canNextPage, // canNextPage is a boolean that returns true if there is a next page
        canPreviousPage, // canPreviousPage is a boolean that returns true if there is a previous page
        prepareRow
    } = tableInstance

    return (
        <>
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
                        page.map(row => {
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
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </>
    )
}
