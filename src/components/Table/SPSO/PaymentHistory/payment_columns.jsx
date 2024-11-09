export const COLUMNS = [
    {
        Header: 'User ID',
        accessor: 'user_ID',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Date of transaction',
        accessor: 'date_of_transaction',
        Cell: ({ value }) => (
            <span className="text-xs font-bold text-black">{value}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.date_of_transaction.split('/').reverse().join('-'));
            const dateB = new Date(rowB.original.date_of_transaction.split('/').reverse().join('-'));
            return dateA - dateB;
        },

    },
    {
        Header: 'Number of papers',
        accessor: 'number_of_paper',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Charge (VND)',
        accessor: 'charge',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
        ),
    },
    {
        Header: 'Payment Methods',
        accessor: 'payment_method',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Note',
        accessor: 'note',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
        ),
    },
];