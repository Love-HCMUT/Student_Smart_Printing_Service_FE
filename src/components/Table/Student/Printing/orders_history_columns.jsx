export const COLUMNS = [
    {
        Header: 'Order ID',
        accessor: 'orderID',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-table-text-color">{value}</span>
        ),
        Header: () => (
            <span className="text-sm font-inter font-semibold text-header-color">Order ID</span>
        ),
    },
    {
        Header: 'Date of order',
        accessor: 'orderDate',
        Cell: ({ value }) => {
            const formattedDate = new Date(value).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
            return <span className="text-xs font-inter text-table-text-color">{formattedDate}</span>;
        },
        Header: () => (
            <span className="text-sm font-inter font-semibold text-header-color">Date of order</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.orderDate);
            const dateB = new Date(rowB.original.orderDate);
            return dateA - dateB;
        },
    },
    {
        Header: 'Status',
        accessor: 'orderStatus',
        Cell: ({ value }) => (
            <span className={`flex items-center p-2 rounded-full text-xs font-inter text-left w-fit px-3
            ${value === 'Completed' ? 'bg-status-green-background text-status-green-text' :
                    value === 'Pending' ? 'bg-status-gray-background text-status-gray-text' :
                        value === 'Cancelled' || value === 'Declined' ? 'bg-status-red-background text-status-red-text' :
                            'bg-status-yellow-background text-status-yellow-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                ${value === 'Completed' ? 'bg-status-green-dot' : value === 'Pending'
                        ? 'bg-status-gray-dot' : value === 'Cancelled' || value === 'Declined'
                            ? 'bg-status-red-text' : 'bg-status-yellow-dot'}`}></span>
                {value}
            </span>
        ),
        Header: () => (
            <span className="text-sm font-inter font-semibold text-header-color">Status</span>
        ),
    },
    {
        Header: 'Complete at',
        accessor: 'completeAt',
        Cell: ({ value }) => {
            const formattedDate = value ? new Date(value).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }) : 'N/A';
            return <span className="text-xs font-inter text-table-text-color">{formattedDate}</span>;
        },
        Header: () => (
            <span className="text-sm font-inter font-semibold text-header-color">Complete at</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.completeAt);
            const dateB = new Date(rowB.original.completeAt);
            return dateA - dateB;
        },
    },
    {
        Header: 'Note',
        accessor: 'note',
        Cell: ({ value }) => (
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-xs font-inter text-table-text-color break-words">{value}</span>
            </div>
        ),
        Header: () => (
            <span className="text-sm font-inter font-semibold text-header-color">Note</span>
        ),
    }
];