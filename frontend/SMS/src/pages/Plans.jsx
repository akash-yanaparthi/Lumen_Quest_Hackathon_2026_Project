// src/pages/Plans.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const dummyPlans = [
  { id: 'plan-basic', name: 'Basic', price: '$5/month', features: ['Feature A', 'Feature B'] },
  { id: 'plan-pro', name: 'Pro', price: '$15/month', features: ['Feature A', 'Feature B', 'Feature C'] },
  { id: 'plan-premium', name: 'Premium', price: '$30/month', features: ['All Features'] },
];

const Plans = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <h2 className="text-3xl font-bold mb-8">Subscription Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {dummyPlans.map(plan => (
          <div key={plan.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-xl mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="text-gray-600">• {feat}</li>
              ))}
            </ul>
            <Link
              to={`/subscribe/${plan.id}`}
              className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
            >
              Subscribe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
