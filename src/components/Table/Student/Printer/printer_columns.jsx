export const COLUMNS = [
    {
        Header: 'Printer ID',
        accessor: 'printer_id',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Type of Printer',
        accessor: 'type_of_printer',
        Cell: ({ value }) => (
            <span className="text-xs font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Location',
        accessor: 'location',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Requests',
        accessor: 'requests',
        Cell: ({ value }) => (
            <span className={`flex items-center justify-center p-2 rounded-full text-xs font-inter text-center
                ${value > 5 ? 'bg-status-orange-background text-black' : 'bg-status-green-background text-status-green-text'}`}>

                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value > 5 ? 'bg-black' : 'bg-status-green-dot'}`}></span>
                {value + ' requests'}
            </span >
        ),
    },
];



