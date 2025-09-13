import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
        Login
      </h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-purple-600 font-semibold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
