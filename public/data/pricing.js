export const pricing = [
  {
    id: "starter",
    name: "Starter",
    price: 19,
    currency: "$",
    billingCycle: "mo",
    isPopular: false,

    features: [
      "60 GB Storage",
      "600 GB Transfer",
      "Pro Design Panel",
      "15-min Support",
      "Unlimited Emails",
      "24/7 Security",
    ],

    cta: {
      label: "Choose Plan",
      action: "/checkout/starter",
    },
  },

  {
    id: "premium",
    name: "Premium",
    price: 49,
    currency: "$",
    billingCycle: "mo",
    isPopular: true, // ⭐ MOST POPULAR

    features: [
      "120 GB Storage",
      "1200 GB Transfer",
      "Pro Design Panel",
      "Priority Support",
      "Unlimited Emails",
      "24/7 Security",
    ],

    cta: {
      label: "Choose Plan",
      action: "/checkout/premium",
    },
  },

  {
    id: "advanced",
    name: "Advanced",
    price: 79,
    currency: "$",
    billingCycle: "mo",
    isPopular: false,

    features: [
      "250 GB Storage",
      "5000 GB Transfer",
      "Pro Design Panel",
      "Dedicated Support",
      "Unlimited Emails",
      "24/7 Security",
    ],

    cta: {
      label: "Choose Plan",
      action: "/checkout/advanced",
    },
  },
];
