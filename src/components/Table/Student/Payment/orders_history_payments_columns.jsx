export const COLUMNS = [
    {
        Header: 'Date of transaction',
        accessor: 'date_of_transaction',
        Cell: ({ value }) => {
            const formattedDate = new Date(value).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
            return (
                <span className="text-xs font-inter font-bold text-table-text-color">{formattedDate}</span>
            );
        },
    },
    {
        Header: 'Number of coins',
        accessor: 'number_of_coins',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{Number(value).toLocaleString()}</span>
        )
    },
    {
        Header: 'Charge (VND)',
        accessor: 'charge',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{Number(value).toLocaleString()}</span>
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
                <span className="text-xs font-inter text-table-text-color break-words">{value}</span>
            </div>
        ),
    }
];



