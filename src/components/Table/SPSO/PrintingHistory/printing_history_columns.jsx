// export const COLUMNS = [
//     {
//         Header: 'User ID',
//         accessor: 'user_ID',
//         Cell: ({ value }) => (
//             <span className="text-xs font-inter text-table-text-color">{value}</span>
//         ),
//     },
//     {
//         Header: 'Printer ID',
//         accessor: 'printer_id',
//         Cell: ({ value }) => (
//             <span className="text-xs font-bold text-black">{value}</span>
//         ),
//     },
//     {
//         Header: 'Printing Staff ID',
//         accessor: 'printing_staff_id',
//         Cell: ({ value }) => (
//             <span className="text-xs font-inter text-table-text-color">{value}</span>
//         ),
//     },
//     {
//         Header: 'File Name',
//         accessor: 'file_name',
//         Cell: ({ value }) => (
//             <span className="text-xs font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
//         ),
//     },
//     {
//         Header: 'Start Time',
//         accessor: 'start_time',
//         Cell: ({ value }) => (
//             <span className="text-xs font-inter text-table-text-color">{value}</span>
//         ),
//         // sortType: (rowA, rowB) => {
//         //     const dateA = new Date(rowA.original.date_of_transaction.split('/').reverse().join('-'));
//         //     const dateB = new Date(rowB.original.date_of_transaction.split('/').reverse().join('-'));
//         //     return dateA - dateB;
//         // },
//     },
//     {
//         Header: 'End Time',
//         accessor: 'end_time',
//         Cell: ({ value }) => (
//             <span className="text-xs font-inter text-table-text-color">{value}</span>
//         ),
//         // sortType: (rowA, rowB) => {
//         //     const dateA = new Date(rowA.original.date_of_transaction.split('/').reverse().join('-'));
//         //     const dateB = new Date(rowB.original.date_of_transaction.split('/').reverse().join('-'));
//         //     return dateA - dateB;
//         // },
//     },
//     {
//         Header: 'Number of pages',
//         accessor: 'number_of_pages',
//         Cell: ({ value }) => (
//             <span className="text-xs font-inter text-table-text-color">
//                 {value}
//             </span>
//         )
//     }
// ];
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
        accessor: 'user_ID',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Printer ID',
        accessor: 'printer_id',
        Cell: ({ value }) => (
            <span className="text-xs font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Printing Staff ID',
        accessor: 'printing_staff_id',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'File Name',
        accessor: 'file_name',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
        ),
    },
    {
        Header: 'Start Time',
        accessor: 'start_time',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        sortType: dateSort,
    },
    {
        Header: 'End Time',
        accessor: 'end_time',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        sortType: dateSort,
    },
    {
        Header: 'Number of pages',
        accessor: 'number_of_pages',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">
                {value}
            </span>
        )
    }
];