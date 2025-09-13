const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  monthlyPrice: { type: Number, required: true },
  dataQuota: Number, 
  tier: String, 
  serviceType: { type: String, enum: ['Fibernet', 'Broadband Copper'], required: true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);