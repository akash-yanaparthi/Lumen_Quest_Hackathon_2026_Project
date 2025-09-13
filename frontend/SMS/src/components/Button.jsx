export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-2 px-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg"
    >
      {children}
    </button>
  );
}
