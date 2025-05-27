export default function ListingSkeletons() {
  return (
    <div className="py-10 sm:py-15 px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-10 mb-15 max-w-7xl mx-auto">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="w-full sm:w-50 h-60 bg-gray-100 rounded-t-lg sm:rounded-lg animate-pulse"></div>
          <div className="flex flex-col">
            <div className="mb-4 w-64 h-3 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="mb-4 w-60 h-3 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="mb-10 w-30 h-3 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="w-23 h-11 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
