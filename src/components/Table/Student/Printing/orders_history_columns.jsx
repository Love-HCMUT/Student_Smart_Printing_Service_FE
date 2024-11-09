export const COLUMNS = [
    {
        Header: 'Order ID',
        accessor: 'order_id',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Date of order',
        accessor: 'order_date',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.order_date.split(' ')[1].split('/').reverse().join('-') + 'T' + rowA.original.order_date.split(' ')[0]);
            const dateB = new Date(rowB.original.order_date.split(' ')[1].split('/').reverse().join('-') + 'T' + rowB.original.order_date.split(' ')[0]);
            return dateA - dateB;
        },
    },
    {
        Header: 'Location',
        accessor: 'location',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
            <span className={`flex items-center p-2 rounded-full text-xs font-inter text-left w-fit px-3
                ${value === 'Done' ? 'bg-status-green-background text-status-green-text' : value === 'Pending' ? 'bg-status-gray-background text-status-gray-text' : 'bg-status-yellow-background text-status-yellow-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value === 'Done' ? 'bg-status-green-dot' : value === 'Pending' ? 'bg-status-gray-dot' : 'bg-status-yellow-dot'}`}></span>
                {value}
            </span>
        ),
    },
    {
        Header: 'Complete at',
        accessor: 'complete_at',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.order_date.split(' ')[1].split('/').reverse().join('-') + 'T' + rowA.original.order_date.split(' ')[0]);
            const dateB = new Date(rowB.original.order_date.split(' ')[1].split('/').reverse().join('-') + 'T' + rowB.original.order_date.split(' ')[0]);
            return dateA - dateB;
        },
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