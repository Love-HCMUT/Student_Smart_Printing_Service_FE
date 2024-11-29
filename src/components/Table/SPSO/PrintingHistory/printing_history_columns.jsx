const parseDate = (dateString) => {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes);
};

const dateSort = (rowA, rowB, columnId) => {
    const dateA = parseDate(rowA.original[columnId]);
    const dateB = parseDate(rowB.original[columnId]);

    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
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
            <span className="text-base font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
        ),
    },
    {
        Header: 'Start Time',
        accessor: 'startTime',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{new Date(value).toLocaleString()}</span>
        ),
        sortType: dateSort,
    },
    {
        Header: 'End Time',
        accessor: 'endTime',
        Cell: ({ value }) => (
            <span className="text-base font-inter text-table-text-color">{new Date(value).toLocaleString()}</span>
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
                    value === "Cancelled" ? 'bg-status-red-background text-status-red-text ' :
                        'bg-status-gray-background text-status-gray-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value === "Completed" ? 'bg-status-green-dot' :
                        value === "Cancelled" ? 'bg-status-red-text' :
                            'text-status-gray-dot'}`}></span>
                {value}
            </span>
        ),
    }
];
