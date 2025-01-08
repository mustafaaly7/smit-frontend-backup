const StateCard = ({ icon, title, value, iconColor }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center">
        <i className={`fas ${icon} ${iconColor} text-2xl mr-2`}></i>
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StateCard;
