import React, { useState } from 'react';
import { CreditCard, Paypal } from 'lucide-react';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { cn } from '../../../utils/classNames';

type PaymentMethod = 'card' | 'paypal';

export function PaymentForm() {
  const [method, setMethod] = useState<PaymentMethod>('card');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-medium mb-4">Payment Method</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setMethod('card')}
            className={cn(
              "p-4 rounded-xl border transition-all duration-200 flex items-center justify-center space-x-2",
              method === 'card'
                ? "border-black ring-2 ring-black bg-black/[0.02]"
                : "border-black/10 hover:border-black/20"
            )}
          >
            <CreditCard className="h-5 w-5" />
            <span>Credit Card</span>
          </button>
          <button
            onClick={() => setMethod('paypal')}
            className={cn(
              "p-4 rounded-xl border transition-all duration-200 flex items-center justify-center space-x-2",
              method === 'paypal'
                ? "border-black ring-2 ring-black bg-black/[0.02]"
                : "border-black/10 hover:border-black/20"
            )}
          >
            <Paypal className="h-5 w-5" />
            <span>PayPal</span>
          </button>
        </div>
      </div>

      {method === 'card' ? (
        <form className="space-y-4">
          <Input
            label="Card Number"
            placeholder="4242 4242 4242 4242"
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
            />
            <Input
              label="CVC"
              placeholder="123"
              type="password"
            />
          </div>
          <Input
            label="Name on Card"
            placeholder="John Smith"
          />
          <Button className="w-full" size="lg">
            Complete Purchase
          </Button>
        </form>
      ) : (
        <div className="text-center py-8">
          <Button variant="secondary" size="lg">
            <Paypal className="h-5 w-5 mr-2" />
            Continue with PayPal
          </Button>
        </div>
      )}

      <p className="text-sm text-black/60 text-center">
        Your payment information is encrypted and secure. We never store your full card details.
      </p>
    </div>
  );
}