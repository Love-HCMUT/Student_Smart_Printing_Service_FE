export const LoadingSkeleton = () => {
  return (
    <div className="p-6">
      {/* Header Skeleton */}
      <div className="animate-pulse mb-6">
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>

      {/* Printer Cards Layout Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Printer Card Skeleton */}
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 animate-pulse"
          >
            {/* Header Skeleton */}
            <div className="mb-4">
              <div className="h-5 bg-gray-300 rounded w-1/4 mb-2"></div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-16 bg-gray-200 rounded"></div>
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              </div>
            </div>

            {/* Table Skeleton */}
            <div className="overflow-auto">
              <div className="space-y-2">
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex justify-between items-center gap-2"
                  >
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Skeleton */}
            <div className="flex justify-center mt-4 gap-2">
              {Array.from({ length: 5 }).map((_, btnIndex) => (
                <div
                  key={btnIndex}
                  className="w-8 h-8 bg-gray-200 rounded"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
