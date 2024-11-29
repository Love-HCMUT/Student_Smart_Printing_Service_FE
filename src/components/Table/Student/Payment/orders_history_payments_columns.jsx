export const COLUMNS = [
    {
        Header: 'Date of transaction',
        accessor: 'date_of_transaction',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Number of coins',
        accessor: 'number_of_coins',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        )
    },
    {
        Header: 'Charge (VND)',
        accessor: 'charge',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Payment Methods',
        accessor: 'method',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Combo',
        accessor: 'combo_list',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Note',
        accessor: 'note',
        Cell: ({ value }) => (
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-xs font-inter text-table-text-color break-words  ">{value}</span>
            </div>
        ),
    }
];



