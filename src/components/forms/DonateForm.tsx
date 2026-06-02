"use client";

import { useState, useEffect } from 'react';
import { Heart, CheckCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export function DonateForm() {
  const [amount, setAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success')) {
      setStatus('success');
    } else if (searchParams.get('canceled')) {
      setStatus('error');
    }
  }, [searchParams]);

  const presetAmounts = [10, 25, 50, 100];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const finalAmount = amount === 'custom' ? Number(customAmount) : amount;

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: finalAmount,
          isMonthly,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-8 rounded-2xl text-center border border-green-100">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Thank you for your generosity!</h3>
        <p className="text-green-800">
          Your donation was successful. We truly appreciate your support.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            // Remove query params
            window.history.replaceState({}, document.title, window.location.pathname);
          }}
          className="mt-6 text-sm font-medium text-green-700 hover:text-green-800 underline"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
        <button
          type="button"
          onClick={() => setIsMonthly(false)}
          className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
            !isMonthly ? 'bg-white shadow-sm text-primary-dark' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Give Once
        </button>
        <button
          type="button"
          onClick={() => setIsMonthly(true)}
          className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${
            isMonthly ? 'bg-white shadow-sm text-primary-dark' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Monthly
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-6">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => {
              setAmount(preset);
              setCustomAmount('');
            }}
            className={`py-3 rounded-xl border-2 font-semibold text-lg transition-all ${
              amount === preset
                ? 'border-accent bg-accent/5 text-accent-dark'
                : 'border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            ${preset}
          </button>
        ))}
        <div className="col-span-3 sm:col-span-1 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
          <input
            type="number"
            placeholder="Custom"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount('custom');
            }}
            className={`w-full h-full pl-8 pr-4 py-3 rounded-xl border-2 outline-none transition-all ${
              amount === 'custom'
                ? 'border-accent bg-accent/5 focus:ring-2 focus:ring-accent/20'
                : 'border-gray-200 focus:border-gray-300'
            }`}
          />
        </div>
      </div>

      <div className="bg-blue-50/50 p-4 rounded-xl mb-8 border border-blue-100">
        <p className="text-sm text-primary-dark font-medium text-center">
          {isMonthly ? 'A monthly gift provides sustainable support for our ongoing programs.' : 'Your generous one-time gift helps us respond to immediate needs.'}
        </p>
      </div>

      {status === 'error' && (
        <div className="bg-red-50 p-4 rounded-xl mb-6 border border-red-100">
          <p className="text-sm text-red-600 font-medium text-center">
            {searchParams.get('canceled') ? 'Donation canceled. You can try again when you are ready.' : 'There was an error processing your request. Please try again.'}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || (amount === 'custom' && (!customAmount || Number(customAmount) <= 0))}
        className="w-full bg-accent hover:bg-accent-light text-white font-bold text-lg py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <span className="animate-pulse">Processing...</span>
        ) : (
          <>
            <Heart className="w-5 h-5" />
            Donate {amount === 'custom' ? (customAmount ? `$${customAmount}` : '') : `$${amount}`}
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        Secure payment processing. You can cancel monthly donations at any time.
      </p>
    </form>
  );
}
