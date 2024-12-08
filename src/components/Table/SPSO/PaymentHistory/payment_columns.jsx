const dateSort = (rowA, rowB, columnId) => {
  const dateA = new Date(rowA.original[columnId]);
  const dateB = new Date(rowB.original[columnId]);
  return dateA - dateB;
};

export const COLUMNS = [
  {
    Header: 'User ID',
    accessor: 'ID',
    Cell: ({ value }) => (
      <span className="text-base font-inter text-table-text-color">{value}</span>
    ),
  },
  {
    Header: 'Date of transaction',
    accessor: 'dateOfTransaction',
    Cell: ({ value }) => (
      <span className="text-base font-inter text-table-text-color">{
        value ? new Date(value).toLocaleString() : ''
      }</span>
    ),
    sortType: dateSort,
  },
  {
    Header: 'Coins',
    accessor: 'coins',
    Cell: ({ value }) => (
      <span className="text-base font-inter text-table-text-color">{value}</span>
    ),
  },
  {
    Header: 'Charge (VND)',
    accessor: 'charge',
    Cell: ({ value }) => (
      <span className="text-base font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
    ),
  },
  {
    Header: 'Payment Methods',
    accessor: 'paymentMethod',
    Cell: ({ value }) => (
      <span className="text-base font-inter text-table-text-color">{value}</span>
    ),
  },
  {
    Header: 'Note',
    accessor: 'note',
    Cell: ({ value }) => (
      <span className="text-base font-inter text-table-text-color overflow-hidden text-ellipsis">{value}</span>
    ),
  },
];
