export const COLUMNS = [
    {
        Header: 'User ID',
        accessor: 'ID',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Date of transaction',
        accessor: 'dateOfTransaction',
        Cell: ({ value }) => (
            <span className="text-xs font-bold text-black">{new Date(value).toLocaleString()}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.date_of_transaction.split('/').reverse().join('-'));
            const dateB = new Date(rowB.original.date_of_transaction.split('/').reverse().join('-'));
            return dateA - dateB;
        },

    },
    {
        Header: 'Coins',
        accessor: 'coins',
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
        accessor: 'paymentMethod',
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