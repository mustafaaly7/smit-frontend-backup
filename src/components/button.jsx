export default function BlueButton({ text, style, className, onClick,type }) {
  return (
    <button
      className={`text-white p-3 rounded-lg transition duration-300 ease-in-out ${className}`}
      style={{ backgroundColor: "#44a1dc", color: "white", ...style }}
      onClick={onClick} type={type}
    >
      {text}
    </button>
  );
}
