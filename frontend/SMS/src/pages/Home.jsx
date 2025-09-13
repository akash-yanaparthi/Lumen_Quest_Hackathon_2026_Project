export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-4xl font-extrabold text-purple-700">
        Welcome to Subscriptify 🎉
      </h2>
      <p className="text-lg text-gray-600">
        Manage your subscriptions with ease. Choose plans, track payments, and
        stay in control.
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
        alt="Subscriptions"
        className="w-64 mx-auto"
      />
    </div>
  );
}
