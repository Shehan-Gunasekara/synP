import React, { useState, useEffect } from 'react';
import { PricingTier } from '../../../types/subscription';

interface Props {
  selectedTier: PricingTier;
  onSelect: (tier: PricingTier, amount?: number) => void;
}

const tiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$10.00',
    credits: '5 generation credits'
  },
  {
    id: 'creator',
    name: 'Creator',
    price: '$20.00',
    credits: '12 generation credits'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$55.00',
    credits: '27 generation credits'
  },
  {
    id: 'custom',
    name: 'Custom Amount',
    isCustom: true,
    credits: 'Choose your amount'
  }
] as const;

// Helper function to calculate credits based on amount
const calculateCredits = (amount: number) => {
  // Base rate: $9.99 = 6 credits (starter package rate)
  const creditsPerDollar = 6 / 9.99;
  return Math.floor(amount * creditsPerDollar);
};

export function PricingSelector({ selectedTier, onSelect }: Props) {
  const [customAmount, setCustomAmount] = useState<number>(10);

  useEffect(() => {
    if (selectedTier === 'custom') {
      onSelect('custom', customAmount);
    }
  }, [customAmount, selectedTier]);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(200, Math.max(10, Number(e.target.value)));
    setCustomAmount(value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Choose Your Plan</h2>
      <div className="space-y-3">
        {tiers.map((tier) => (
          <label
            key={tier.id}
            className="flex items-center justify-between p-4 rounded-lg border border-black/10 hover:border-black/20 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                name="pricing"
                value={tier.id}
                checked={selectedTier === tier.id}
                onChange={() => onSelect(tier.id as PricingTier)}
                className="w-4 h-4 text-black border-black/20 focus:ring-black"
              />
              <div>
                <div className="font-medium">{tier.name}</div>
                <div className="text-sm text-black/60">
                  {tier.isCustom && selectedTier === 'custom' 
                    ? `${calculateCredits(customAmount)} generation credits`
                    : tier.credits
                  }
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {tier.isCustom ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">$</span>
                  <input
                    type="number"
                    min="10"
                    max="200"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    onClick={(e) => e.stopPropagation()}
                    className="w-24 px-2 py-1 text-right border rounded focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Amount"
                  />
                </div>
              ) : (
                <span className="font-medium">{tier.price}</span>
              )}
            </div>
          </label>
        ))}
      </div>
      {selectedTier === 'custom' && (
        <div className="space-y-2">
          <p className="text-sm text-black/60">
            Enter an amount between $10 and $200
          </p>
          <p className="text-sm text-black/60">
            You'll receive {calculateCredits(customAmount)} generation credits
          </p>
        </div>
      )}
    </div>
  );
}
