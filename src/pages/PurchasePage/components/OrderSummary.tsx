import React from 'react';
import { PricingTier } from '../PurchasePage';

interface Props {
  tier: PricingTier;
}

const tierDetails = {
  starter: {
    price: 10.00,
    credits: 10
  },
  creator: {
    price: 20.00,
    credits: 20
  },
  enterprise: {
    price: 55.00,
    credits: 55
  }
};

export function OrderSummary({ tier }: Props) {
  const details = tierDetails[tier];
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-4">Order Summary</h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between py-3 border-b border-black/10">
            <span className="text-black/60">Plan</span>
            <span className="font-medium capitalize">{tier}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-black/10">
            <span className="text-black/60">Credits</span>
            <span className="font-medium">{details.credits}</span>
          </div>
          <div className="flex justify-between py-3 border-b border-black/10">
            <span className="text-black/60">Billing</span>
            <span className="font-medium">Monthly</span>
          </div>
        </div>
      </div>

      <div className="bg-black/[0.02] rounded-xl p-6">
        <div className="flex justify-between mb-2">
          <span className="text-black/60">Subtotal</span>
          <span className="font-medium">
            {details.price ? `$${details.price.toFixed(2)}` : 'Custom'}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-black/60">Tax</span>
          <span className="font-medium">
            {details.price ? `$${(details.price * 0.1).toFixed(2)}` : '-'}
          </span>
        </div>
        <div className="flex justify-between text-lg font-medium pt-4 border-t border-black/10">
          <span>Total</span>
          <span>
            {details.price 
              ? `$${(details.price * 1.1).toFixed(2)}`
              : 'Contact Sales'
            }
          </span>
        </div>
      </div>

      <div className="text-sm text-black/60">
        <p className="mb-2">Your subscription includes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Automatic monthly renewal</li>
          <li>Cancel anytime</li>
          <li>Priority support</li>
          <li>Secure payment processing</li>
        </ul>
      </div>
    </div>
  );
}