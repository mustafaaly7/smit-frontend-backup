const Card = ({ courseName, status, students, timing, batch }) => {
  return (
    <div className="w-full h-auto overflow-hidden cursor-pointer">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-[0_4px_10px_rgba(59,130,246,0.5)] transition-all border-r-4">
        <div className="p-6">
          <h2 className="text-xl font-bold bg-blue-800 text-white text-center py-2 rounded">
            Course: {courseName}
          </h2>
          <div className="flex justify-between mt-4">
            <p className="text-lg font-medium text-gray-700">
              Status: <span className="font-semibold">{status}</span>
            </p>
            <p className="text-lg font-medium text-gray-700">
              Batch: <span className="font-semibold">{batch}</span>
            </p>
          </div>
          <p className="text-lg font-medium text-gray-700">
            Students: <span className="font-semibold">{students}</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            Timing: <span className="font-semibold">{timing}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
