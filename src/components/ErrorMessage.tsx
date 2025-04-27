const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
    return (
      <div className="w-full max-w-lg mx-auto bg-red-500 text-white p-4 rounded-lg shadow-lg mt-4">
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 bg-white text-red-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 12H6M12 6v12"
              />
            </svg>
          </div>
          <p className="font-semibold">{message}</p>
        </div>
      </div>
    );
  };
export default ErrorMessage;
  