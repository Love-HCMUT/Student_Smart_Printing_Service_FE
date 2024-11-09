export const COLUMNS = [
    {
        Header: 'Day',
        accessor: 'day',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Month',
        accessor: 'month',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Number of Papers',
        accessor: 'number_of_paper',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: '',
        accessor: 'onchange',
        Cell: ({ value }) => (
            <a
                href={`${value}`}
                className="text-xs font-inter text-table-text-color underline">
                Delete
            </a>
        ),
    }
];