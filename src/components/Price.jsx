// src/components/Price.jsx
import { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Essential Plan",
    price: "$99",
    duration: "/month",
    features: [
      {
        title: "Website Maintenance",
        desc: "Keep site updated & secure",
      },
      {
        title: "Basic Content Updates",
        desc: "Up to 2 content per month",
      },
      {
        title: "Performance Monitoring",
        desc: "Regular checks for web speed",
      },
      {
        title: "Email Support",
        desc: "Get responses within 2 days",
      },
    ],
    recommended: false,
  },
  {
    id: 2,
    name: "Business Plan",
    price: "$249",
    duration: "/month",
    features: [
      {
        title: "Design & Development Support",
        desc: "Up to 5 tasks or updates per month",
      },
      {
        title: "Content Management",
        desc: "Upload blogs, pages, and visuals",
      },
      {
        title: "SEO Optimization",
        desc: "SEO tweaks and keyword integration",
      },
      {
        title: "Report & Suggestions",
        desc: "Performance and growth insights",
      },
    ],
    recommended: true,
  },
  {
    id: 3,
    name: "Premium Plan",
    price: "$499",
    duration: "/month",
    features: [
      {
        title: "Website Management",
        desc: "Updates, security & optimizations",
      },
      {
        title: "SEO & Analytics",
        desc: "Keyword research and insights",
      },
      {
        title: "Project Manager",
        desc: "Dedicated contact for communication",
      },
      {
        title: "Priority Support",
        desc: "Fastest response for urgent needs",
      },
    ],
    recommended: false,
  },
];

const Price = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="bg-bgprimary min-h-screen flex flex-col justify-center items-center py-40">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <span className="text-xs font-semibold bg-dark text-secondary px-3 py-1 rounded-full">
          Pricing
        </span>
        <h2 className="text-3xl md:text-6xl font-bold text-primary mt-6 mb-4">
         Transparent Pricing
        </h2>
        <h2 className="text-3xl md:text-6xl font-bold text-secondary mb-4">
         Real Results
        </h2>

        <p className="text-secondary opacity-80">
          Get to know the people who turn ideas into strategy and strategy into
          success. Each member of our team brings unique expertise to help your
          brand grow digitally.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {plans.map((plan) => {
          const isRecommended = plan.recommended;
          const isHovered = hovered === plan.id;

          // scale logic
          const isBig = (!hovered && isRecommended) || (hovered && isHovered);

          // background logic
          let bgClass = "bg-secondary"; // default
          if (!hovered && isRecommended) {
            bgClass = "bg-primary"; // default state
          } else if (hovered && isHovered) {
            bgClass = "bg-primary"; // hover state
          }

          return (
            <div
              key={plan.id}
              className={`rounded-2xl py-6 px-4 flex flex-col justify-between shadow-lg transform transition-all duration-300 cursor-pointer min-h-[550px]
                ${isBig ? "scale-95 lg:scale-110 z-10" : "scale-95"} 
                ${bgClass}`}
              onMouseEnter={() => setHovered(plan.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div>
                <h2
                  className={`text-dark text-3xl font-bold mb-4 ${
                    isRecommended ? "uppercase" : ""
                  }`}
                >
                  {plan.name}
                </h2>
                <p className="text-5xl font-extrabold text-dark">
                  {plan.price}
                  <span className="text-base font-medium">{plan.duration}</span>
                </p>
                <hr className="my-4 border-dark/20" />
                <h3 className="text-dark font-semibold mb-3">What Included?</h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-dark">
                      <div className="flex items-center font-semibold">
                        ✔ <span className="ml-2 text-[20px]">{feature.title}</span>
                      </div>
                      <p className="text-sm text-dark/70 ml-6">
                        {feature.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 py-2 px-4 rounded-2xl font-semibold transition
                  ${
                    bgClass === "bg-primary"
                      ? "bg-dark text-primary"
                      : "bg-primary text-dark"
                  }
                `}
              >
                Choose Plan
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Price;
