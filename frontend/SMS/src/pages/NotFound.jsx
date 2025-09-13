import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh]">
      <h1 className="text-6xl font-bold text-purple-700">404</h1>
      <p className="mt-4 text-lg text-gray-600">Oops! Page not found.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
