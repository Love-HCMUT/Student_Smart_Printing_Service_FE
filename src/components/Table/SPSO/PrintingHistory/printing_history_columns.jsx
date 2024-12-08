const dateSort = (rowA, rowB, columnId) => {
    console.log(rowA.original[columnId]);
    const dateA = new Date(rowA.original[columnId])
    const dateB = new Date(rowB.original[columnId])
    return dateA - dateB
};

export const COLUMNS = [
    {
        Header: 'User ID',
        accessor: 'userID',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Printer ID',
        accessor: 'printerID',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Printing Staff ID',
        accessor: 'printingStaffID',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'File Name',
        accessor: 'fileName',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">
                {value}
            </span>
        ),
    },
    {
        Header: 'Start Time',
        accessor: 'startTime',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{
                value ? new Date(value).toLocaleString() : ''
            }</span>
        ),
        sortType: dateSort,
    },
    {
        Header: 'End Time',
        accessor: 'endTime',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{
                value ? new Date(value).toLocaleString() : ''
            }</span>
        ),
        sortType: dateSort,
    },
    {
        Header: 'Number of pages',
        accessor: 'numberOfPage',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">
                {value}
            </span>
        )
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
            <span className={`flex items-center justify-center p-2 rounded-full text-base font-inter text-center
                ${value === "Completed" ? 'bg-status-green-background text-status-green-text' :
                    value === "Cancelled" || value === "Declined" ? 'bg-status-red-background text-status-red-text ' :
                        value === "Pending" ? 'bg-status-yellow-background text-status-yellow-text' :
                            'bg-status-gray-background text-status-gray-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value === "Completed" ? 'bg-status-green-dot' :
                        value === "Cancelled" || value === "Declined" ? 'bg-status-red-text' :
                            value === "Pending" ? 'bg-status-yellow-dot' :
                                'bg-slate-600'}`}></span>
                {value}
            </span>
        ),
    }
];
