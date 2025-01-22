import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";
import { Navigation } from "../../components/layout/Navigation/Navigation";
import { SubscriptionButton } from "../../components/subscription/SubscriptionButton";
import type { PricingTier } from "../../types/subscription";

const tiers = [
  {
    id: "starter",
    amount: 10.0,
    credits: 10,
    description: "Approx. 5 generations on 1080p",
  },
  {
    id: "creator",
    amount: 20.0,
    credits: 20,
    description: "Approx. 11 generations on 1080p",
  },
  {
    id: "enterprise",
    amount: 55.0,
    credits: 55,
    description: "Approx. 31 generations on 1080p",
  },
  {
    id: "custom",
    isCustom: true,
    description: "Buy any amount of credits",
  },
] as const;

export function PurchasePage() {
  const [selectedTier, setSelectedTier] = useState<PricingTier>("starter");
  const [customAmount, setCustomAmount] = useState<string>("10");
  const [validatedAmount, setValidatedAmount] = useState<number>(10);
  const [customError, setCustomError] = useState<string>("");
  const [isAuthError, setIsAuthError] = useState(false);

  // Validate and update amount after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      const numValue = Number(customAmount);
      if (isNaN(numValue)) {
        setCustomError("Please enter a valid number");
      } else if (numValue < 10) {
        setCustomError("Minimum amount is $10");
      } else if (numValue > 200) {
        setCustomError("Maximum amount is $200");
      } else {
        setCustomError("");
        setValidatedAmount(numValue);
      }
    }, 500); // 500ms delay after typing stops

    return () => clearTimeout(timer);
  }, [customAmount]);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
  };

  const getPrice = () => {
    if (selectedTier === "custom") {
      return validatedAmount;
    }
    const tier = tiers.find((t) => t.id === selectedTier);
    return "amount" in tier! ? tier.amount : 0;
  };

  const getCredits = () => {
    const amount = getPrice();
    return Math.floor(amount / 1.75);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-black/5 py-0 sm:py-16">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Package Selection */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-black/5">
            {/* Info Banner */}
            {/* <div className="p-4 rounded-xl border border-cyan-200 bg-cyan-50 mb-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-cyan-500 mt-0.5" />
                <div>
                  <h3 className="text-lg font-medium text-cyan-500 mb-1">Multiple accounts</h3>
                  <p className="text-gray-600">
                    Credits will be added to your <span className="font-medium">team</span> account identified as <span className="font-medium">VISIONREIMAGINE</span>
                  </p>
                </div>
              </div>
            </div> */}

            {/* Cost per video info */}
            <div className="p-4 rounded-xl border border-purple-200 bg-purple-50 mb-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-purple-500 mt-0.5" />
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-medium text-purple-500 mb-1">
                    Cost per Video
                  </h3>
                  <p className="text-gray-600 text-xs md:text-base lg:text-lg ">
                    The cost varies between{" "}
                    <span className="font-medium">$0.96-$1.75</span> per video
                    depending on the generating steps and prompt complexity
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Options */}
            <div className="space-y-4">
              {tiers.map((tier) => (
                <label
                  key={tier.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-black/5 hover:border-purple-500/20 hover:bg-purple-50/50 transition-all cursor-pointer"
                >
                  <input
                    type="radio"
                    name="pricing"
                    value={tier.id}
                    checked={selectedTier === tier.id}
                    onChange={() => setSelectedTier(tier.id as PricingTier)}
                    className="sm:w-5 sm:h-5 w-3 h-3  text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-sm md:text-base lg:text-lg font-medium ">
                        {"isCustom" in tier ? "Custom" : `$${tier.amount}`}
                      </span>
                      {"isCustom" in tier && selectedTier === "custom" && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm md:text-base lg:text-lg">
                            $
                          </span>
                          <div className="flex flex-col">
                            <input
                              type="number"
                              value={customAmount}
                              onChange={handleCustomAmountChange}
                              onClick={(e) => e.stopPropagation()}
                              className={`w-24 text-sm md:text-base lg:text-lg px-3 py-1.5 border rounded-lg focus:outline-none focus:ring-2 ${
                                customError
                                  ? "border-red-300 focus:ring-red-500"
                                  : "focus:ring-purple-500"
                              }`}
                              placeholder="Amount"
                              min={10}
                            />
                            {customError && (
                              <span className="text-xs text-red-500 mt-1">
                                {customError}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-xs md:text-base lg:text-lg">
                      {"isCustom" in tier
                        ? selectedTier === "custom"
                          ? `Approx. ${getCredits()} video generation credits`
                          : "Choose an amount between $10-$200"
                        : tier.description}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Right Column - Summary and Actions */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-black/5 text-sm md:text-base lg:text-lg">
              <h2 className=" font-medium mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6 ">
                <div className="flex justify-between py-3 border-b border-black/5 ">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium">${getPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-black/5 gap-10">
                  <span className="text-gray-600">Credits</span>
                  <span className="font-medium text-right">
                    Approx. {getCredits()} generations worth of credits.
                  </span>
                </div>
              </div>
              <div className="flex justify-between  font-medium pt-4 border-t border-black/5">
                <span>Total</span>
                <span>${getPrice().toFixed(2)}</span>
              </div>
            </div>

            {/* Error Message */}
            {isAuthError && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-800 text-sm border border-red-100">
                <Info className="w-4 h-4 flex-shrink-0" />
                <p>Please sign in to your account to complete your purchase.</p>
              </div>
            )}

            {/* Subscription Button */}
            <SubscriptionButton
              tier={selectedTier}
              className="w-full rounded-xl"
              setIsAuthError={setIsAuthError}
              customAmount={validatedAmount}
              customError={customError}
              selectedTier={selectedTier}
            />

            {/* Automated Top-ups */}
            {/* <div className="bg-white rounded-2xl p-8 shadow-xl border border-black/5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-gray-700">Automated top ups</h2>
                <button className="px-4 py-2 border rounded-xl hover:bg-gray-50 transition-colors">
                  Add Payment Methods
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
