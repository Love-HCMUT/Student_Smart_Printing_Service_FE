export const COLUMNS = [
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'First Name',
        accessor: 'first_name'
    },
    {
        Header: 'Last Name',
        accessor: 'last_name'
    },
    {
        Header: 'Email',
        accessor: 'email'
    },
    {
        Header: 'Gender',
        accessor: 'gender'
    },
    {
        Header: 'IP Address',
        accessor: 'ip_address'
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
            <span className={`flex items-center p-2 rounded-full 
                ${value ? 'bg-status-green-background text-status-green-text' : 'bg-status-gray-background text-status-gray-text'}`}>
                <span className={`inline-block w-2.5 h-2.5 rounded-full mr-2 
                    ${value ? 'bg-status-green-dot' : 'bg-status-gray-dot'}`}></span>
                {value ? 'Active' : 'Inactive'}
            </span>
        )
    }
]