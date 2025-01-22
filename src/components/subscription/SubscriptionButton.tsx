import React from "react";
import { Button } from "../ui/Button";
import { useSubscription } from "../../lib/stripe/hooks/useSubscription";
import type { PricingTier } from "../../types/subscription";
import { useAuth } from "../../features/auth/context/useAuth";
// import { useAuth } from "../../features/auth/hooks/useAuth";

interface Props {
  tier: PricingTier;
  className?: string;
  setIsAuthError: (value: boolean) => void;
  customAmount?: number;
  customError?: string;
  selectedTier: string;
}

export function SubscriptionButton({
  tier,
  className,
  setIsAuthError,
  customAmount,
  customError,
  selectedTier,
}: Props) {
  const { subscribe, loading, error } = useSubscription();
  const { user } = useAuth();

  const handleSubscribe = async () => {
    if (customError != "" && selectedTier == "custom") return;
    if (!user) {
      setIsAuthError(true);
      throw new Error("User not found");
    }

    try {
      if (tier === "custom" && customAmount) {
        await subscribe(tier, customAmount);
      } else {
        await subscribe(tier);
      }
    } catch (err) {
      console.error("Subscription error:", err);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className={`${
          customError != "" && selectedTier == "custom" && "cursor-not-allowed"
        } px-8 w-full inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none bg-black text-white hover:bg-black/90 text-sm sm:text-sm md:text-lg px-5 sm:px-6 py-3 sm:py-4`}
      >
        {loading ? "Processing..." : "Purchase Now"}
      </button>

      {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
    </div>
  );
}
