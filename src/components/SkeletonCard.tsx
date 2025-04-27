const SkeletonCard: React.FC = () => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full mx-auto dark:bg-gray-800">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="flex flex-col gap-2 w-full">
            <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse mb-2"></div>
        </div>
      </div>
    );
  };
  

export default SkeletonCard;