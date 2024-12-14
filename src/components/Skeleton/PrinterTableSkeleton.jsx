export const PrinterSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      {/* Filters Section */}
      <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>

      {/* Table Section */}
      <div className="space-y-4">
        <div className="h-8 w-56 bg-gray-200 rounded animate-pulse"></div>

        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 p-2 bg-gray-100 rounded">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Table Rows */}
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 p-2 bg-white border border-gray-200 rounded"
          >
            <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};