export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter  font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'First Name',
        accessor: 'first_name',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Last Name',
        accessor: 'last_name',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Email',
        accessor: 'email',
        Cell: ({ value }) => (
            <a href={`mailto:${value}`} className=" text-xs font-inter  text-table-text-color">{value}</a>
        ),
    },
    {
        Header: 'Gender',
        accessor: 'gender',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter  text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'IP Address',
        accessor: 'ip_address',
        Cell: ({ value }) => (
            <span className=" text-xs font-inter  text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
            <span className={`flex items-center p-2 rounded-full  text-xs font-inter 
                ${value ? 'bg-status-green-background text-status-green-text' : 'bg-status-gray-background text-status-gray-text'}`}>
                <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 
                    ${value ? 'bg-status-green-dot' : 'bg-status-gray-dot'}`}></span>
                {value ? 'Active' : 'Inactive'}
            </span>
        ),
    }
]