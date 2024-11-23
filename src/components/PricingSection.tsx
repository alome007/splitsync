import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { lemonsqueezy } from '../lib/lemonsqueezy';

const PricingSection = () => {
  const { user, signInWithGoogle } = useAuthStore();

  const plans = [
    {
      name: 'Starter',
      tokens: 100,
      price: 5,
      variantId: "",
      features: [
        '100 tokens',
        'High-quality stems',
        'MP3 & WAV support',
        'Basic support'
      ]
    },
    {
      name: 'Pro',
      tokens: 200,
      price: 15,
      variantId: "",
      features: [
        '200 tokens',
        'Premium quality stems',
        'All file formats',
        'Priority support'
      ]
    },
    {
      name: 'Business',
      tokens: 500,
      price: 25,
      variantId: "",
      features: [
        '500 tokens',
        'Highest quality stems',
        'Bulk processing',
        '24/7 support'
      ]
    }
  ];

  const handlePurchase = async (variantId: string) => {
    if (!user) {
      signInWithGoogle();
      return;
    }

    try {
      // await lemonsqueezy.createCheckout({
      //   variantId,
      //   customData: {
      //     userId: user.uid,
      //   },
      //   checkoutOptions: {
      //     dark: true,
      //   },
      // });
    } catch (error) {
      console.error('Error creating checkout:', error);
    }
  };

  return (
    <section className="py-24 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-400/50 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-zinc-400 ml-2">/ {plan.tokens} tokens</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-yellow-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePurchase(plan.variantId!)}
                className="w-full py-3 px-6 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors"
              >
                {user ? 'Buy Now' : 'Login to Buy'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;