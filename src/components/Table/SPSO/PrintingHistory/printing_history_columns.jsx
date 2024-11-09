export const COLUMNS = [
    {
        Header: 'User ID',
        accessor: 'user_ID',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Printer ID',
        accessor: 'printer_id',
        Cell: ({ value }) => (
            <span className="text-xs font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Printing Staff ID',
        accessor: 'printing_staff_id',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'File Name',
        accessor: 'file_name',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
        ),
    },
    {
        Header: 'Start Time',
        accessor: 'start_time',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        // sortType: (rowA, rowB) => {
        //     const dateA = new Date(rowA.original.date_of_transaction.split('/').reverse().join('-'));
        //     const dateB = new Date(rowB.original.date_of_transaction.split('/').reverse().join('-'));
        //     return dateA - dateB;
        // },
    },
    {
        Header: 'End Time',
        accessor: 'end_time',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        // sortType: (rowA, rowB) => {
        //     const dateA = new Date(rowA.original.date_of_transaction.split('/').reverse().join('-'));
        //     const dateB = new Date(rowB.original.date_of_transaction.split('/').reverse().join('-'));
        //     return dateA - dateB;
        // },
    },
    {
        Header: 'Number of pages',
        accessor: 'number_of_pages',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">
                {value}
            </span>
        )
    }
];