export default function BlueButton({ text }) {
    return (
      <>
        <button
          className="text-white p-3 rounded-lg transition duration-300 ease-in-out w-full"
          style={{ backgroundColor: "#44a1dc", color: "white" }}
        >
          {text}
        </button>
      </>
    );
  }
  