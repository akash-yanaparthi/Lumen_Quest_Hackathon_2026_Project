import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
      location.pathname === path
        ? "bg-purple-600 text-white shadow-md"
        : "text-gray-700 hover:bg-purple-100 hover:text-purple-700"
    }`;

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-lg bg-white rounded-xl m-4 sticky top-0 z-50">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
        Subscriptify
      </h1>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/plans" className={linkClass("/plans")}>
          Plans
        </Link>
        <Link to="/subscribe" className={linkClass("/subscribe")}>
          Subscribe
        </Link>
        <Link to="/profile" className={linkClass("/profile")}>
          Profile
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="flex gap-3">
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg border border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded-lg bg-purple-600 text-white font-medium shadow-md hover:bg-purple-700 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
