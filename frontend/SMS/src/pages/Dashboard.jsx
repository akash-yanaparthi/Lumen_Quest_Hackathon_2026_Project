export default function Dashboard() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">
        Dashboard
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-purple-50 rounded-xl text-center shadow">
          <h3 className="text-lg font-semibold text-purple-600">Current Plan</h3>
          <p className="text-xl font-bold mt-2">Pro</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl text-center shadow">
          <h3 className="text-lg font-semibold text-purple-600">Renewal Date</h3>
          <p className="text-xl font-bold mt-2">25 Sep 2025</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl text-center shadow">
          <h3 className="text-lg font-semibold text-purple-600">Status</h3>
          <p className="text-xl font-bold mt-2 text-green-600">Active</p>
        </div>
      </div>
    </div>
  );
}
