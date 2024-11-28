import PrinterForm from "../../../Form/Printer_form";
export const COLUMNS = [
    {
        Header: 'Printer ID',
        accessor: 'printer_id',
        Cell: ({ value }) => (
            <span className="text-xs font-inter font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Brand/Manufacturer',
        accessor: 'branch',
        Cell: ({ value }) => (
            <span className="text-xs font-bold text-black">{value}</span>
        ),
    },
    {
        Header: 'Model',
        accessor: 'model',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Description',
        accessor: 'description',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
        ),
    },
    {
        Header: 'Location',
        accessor: 'location',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
    },
    {
        Header: 'Year of manufacture',
        accessor: 'year_of_manufacture',
        Cell: ({ value }) => (
            <span className="text-xs font-inter text-table-text-color">{value}</span>
        ),
        sortType: (rowA, rowB) => {
            const dateA = new Date(rowA.original.year_of_manufacture.split('-').reverse().join('-'));
            const dateB = new Date(rowB.original.year_of_manufacture.split('-').reverse().join('-'));
            return dateA - dateB;
        },
    },
    {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
            <span className={`flex items-center justify-center p-2 rounded-full text-xs font-inter text-center
                ${value === "true" ? 'bg-status-green-background text-status-green-text' : 'bg-status-gray-background text-status-gray-text'}`}>
                <span className={`inline-block w-2 h-2 rounded-full mr-2
                    ${value === "true"? 'bg-status-green-dot' : 'bg-status-gray-dot'}`}></span>
                {value === "true" ? 'Active' : 'Inactive'}
            </span>
        ),
    },
    // {
    //     Header: '',
    //     accessor: 'printer_id',
    //     Cell: ({ value }) => (
    //         <a
    //             onClick={<PrinterForm printerId={value}/>}
    //             className="text-xs font-inter text-table-text-color underline">
    //             Edit
    //         </a>
    //     ),
    // }
];