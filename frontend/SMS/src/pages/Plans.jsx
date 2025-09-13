export default function Plans() {
  const plans = [
    { name: "Basic", price: "$5/mo", features: ["1 Subscription", "Email Alerts"] },
    { name: "Pro", price: "$15/mo", features: ["5 Subscriptions", "Email + SMS Alerts", "Priority Support"] },
    { name: "Premium", price: "$25/mo", features: ["Unlimited Subscriptions", "All Alerts", "24/7 Support"] },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
        Our Plans
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-purple-600">{plan.name}</h3>
            <p className="text-2xl font-semibold">{plan.price}</p>
            <ul className="mt-4 text-gray-600 space-y-2">
              {plan.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <button className="mt-6 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

