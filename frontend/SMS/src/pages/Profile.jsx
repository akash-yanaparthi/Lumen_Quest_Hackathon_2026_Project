export default function Profile() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
        User Profile
      </h2>
      <div className="flex flex-col items-center space-y-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="User"
          className="w-24 h-24 rounded-full border-4 border-purple-500"
        />
        <h3 className="text-lg font-semibold">John Doe</h3>
        <p className="text-gray-600">Email: johndoe@example.com</p>
        <p className="text-gray-600">Current Plan: Pro</p>
      </div>
    </div>
  );
}
