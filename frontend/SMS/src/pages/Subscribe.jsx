export default function Subscribe() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-6">
        Subscribe Now
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option>Select Plan</option>
          <option>Basic</option>
          <option>Pro</option>
          <option>Premium</option>
        </select>
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          Confirm Subscription
        </button>
      </form>
    </div>
  );
}
