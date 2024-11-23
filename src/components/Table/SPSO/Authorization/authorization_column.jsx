export const COLUMNS = [
    {
        Header: 'Printing Staff ID',
        accessor: 'printing_staff_id',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Printing Staff Username',
        accessor: 'printing_staff_username',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Request Time Stamp',
        accessor: 'request_time_stamp',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.request_time_stamp.split(' ').reverse().join(' '));
            const dateB = new Date(rowB.original.request_time_stamp.split(' ').reverse().join(' '));
            return dateA - dateB;
        },
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
            <span className={`flex items-center justify-center p-2 rounded-full text-xs font-inter text-center
                ${value ? 'bg-status-green-background text-status-green-text' : 'bg-status-gray-background text-status-gray-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value ? 'bg-status-green-dot' : 'bg-status-gray-dot'}`}></span>
                {value ? 'Active' : 'Inactive'}
            </span>
        ),
    }
];