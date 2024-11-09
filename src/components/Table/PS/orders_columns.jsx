export const COLUMNS = [
    {
        Header: 'Order ID',
        accessor: 'order_id',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter  font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Date Time',
        accessor: 'order_date',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Decline',
        accessor: 'isDeclined',
        Cell: ({ value }) => (
            <span className={`flex items-center justify-center p-2 rounded-full text-xs font-inter text-center
                    ${value ? 'bg-status-gray-background text-status-gray-text disabled:cursor-not-allowed' : 'bg-status-red-background text-status-red-text'}`}>
                {value ? 'Declined' : 'Decline'}
            </span>
        ),
    },
    {
        Header: 'Accept',
        accessor: 'isAccepted',
        Cell: ({ value }) => (
            <span className={`flex items-center justify-center p-2 rounded-full text-xs font-inter text-center
                ${value ? 'bg-status-gray-background text-status-gray-text disabled:cursor-not-allowed' : 'bg-status-green-background text-status-green-text'}`}>
                {value ? 'Accepted' : 'Accept'}
            </span>
        ),
    }
]