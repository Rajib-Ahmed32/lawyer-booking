const EmptyState = ({ handleGoToHome }) => {
    return (
      <div className="flex flex-col items-center justify-center border-2 h-full p-4 rounded-md text-yellow-700 font-semibold text-2xl">
        <span>You have no active appointments.</span>
        <button
          onClick={handleGoToHome}
          type="button"
          className="mt-3 cursor-pointer text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Go Home
        </button>
      </div>
    );
  };
  
  export default EmptyState;
  