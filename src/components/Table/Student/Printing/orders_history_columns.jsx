export const COLUMNS = [
    {
        Header: 'Order ID',
        accessor: 'orderID',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Date of order',
        accessor: 'orderDate',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{new Date(value).toLocaleDateString()}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.order_date.split(' ')[1].split('/').reverse().join('-') + 'T' + rowA.original.order_date.split(' ')[0]);
            const dateB = new Date(rowB.original.order_date.split(' ')[1].split('/').reverse().join('-') + 'T' + rowB.original.order_date.split(' ')[0]);
            return dateA - dateB;
        },
    },
    {
        Header: 'Status',
        accessor: 'orderStatus',
        Cell: ({ value }) => (
            <span className={`flex items-center p-2 rounded-full text-xs font-inter text-left w-fit px-3
                ${value === 'Completed' ? 'bg-status-green-background text-status-green-text' : value === 'Pending' ?
                    'bg-status-gray-background text-status-gray-text' : value === 'Cancelled' ?
                        'bg-status-red-background text-status-red-text' :
                        'bg-status-yellow-background text-status-yellow-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value === 'Completed' ? 'bg-status-green-dot' : value === 'Pending'
                        ? 'bg-status-gray-dot' : value === 'Cancelled'
                            ? 'bg-status-red-text' : 'bg-status-yellow-dot'}`}></span>
                {value}
            </span>
        ),
    },
    {
        Header: 'Complete at',
        accessor: 'completeAt',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{new Date(value).toLocaleString()}</span>
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