const AppointmentCard = ({ lawyer, handleCancel }) => {
  return (
    <div
      key={lawyer.id}
      className="bg-white border-2 border-[#14141426] rounded-lg p-4 md:p-8 shadow mb-7"
    >
      <div className="flex text-xl text-[#141414] font-bold justify-between border-dashed">
        <h3 className="font-semibold">{lawyer.name}</h3>
        <p className="text-lg text-[#14141499] mt-1">
          Appointment Fee: {lawyer.fee || "Not Available"} 
        </p>
      </div>

      <p className="text-[#14141499] text-lg mt-3 border-b border-dashed border-[#D1D5DB]">{lawyer.specialty}</p>

      <button
        onClick={() => handleCancel(lawyer.id)}
        className="mt-4 px-4 py-2 cursor-pointer border border-[#FF0000] text-[#FF0000] font-semibold rounded-full w-full hover:bg-red-50 transition"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default AppointmentCard;
