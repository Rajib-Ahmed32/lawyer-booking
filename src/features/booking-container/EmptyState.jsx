import emptyImg from "../../assets/empty-appointments.jpg"; 

const EmptyState = ({ handleGoToHome }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full mb-5 p-10 not-first-of-type:rounded-lg bg-white shadow-md text-yellow-700 font-semibold text-center space-y-4">
      <img
        src={emptyImg}
        alt="No Appointments"
        className="w-50 h-50 object-contain"
      />
      <span className="text-2xl">You have no active appointments.</span>
      <button
        onClick={handleGoToHome}
        type="button"
        className="cursor-pointer text-white bg-[#0EA106] font-medium rounded-lg text-sm px-6 py-2.5"
      >
        Go Home
      </button>
    </div>
  );
};

export default EmptyState;
