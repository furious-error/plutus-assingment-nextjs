"use client";

export function Pricing() {
    const pricingPlans = [
      {
        title: "Starter",
        price: "$29/mo",
        highlight: false,
        features: [
          "Keyword optimization",
          "Automated meta tags",
          "SEO monitoring",
          "Monthly reports",
        ],
      },
      {
        title: "Pro",
        price: "$79/mo",
        highlight: true,
        features: [
          "Keyword optimization",
          "Automated meta tags",
          "SEO monitoring",
          "Monthly reports",
          "Content suggestions",
          "Link optimization",
        ],
      },
      {
        title: "Business",
        price: "$149/mo",
        highlight: false,
        features: [
          "Keyword optimization",
          "Automated meta tags",
          "SEO monitoring",
          "Monthly reports",
          "Custom suggestions",
          "AI integration",
        ],
      },
    ];
    return (
        <section className="text-center px-6 md:px-12 lg:px-18" id="pricing">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Pricing</h2>
            <p className="mt-4 text-sm text-white/70">
                Choose the right plan to meet your SEO needs and start optimizing today.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.title}
                        className={`flex flex-col justify-between rounded-3xl border border-white/10 bg-black/5 p-8 text-left transition-transform ${plan.highlight ? "shadow-[0_40px_200px_rgba(144,97,249,0.4)] ring-2 ring-purple-400/60" : "hover:-translate-y-1"
                            }`}
                    >
                        <div>
                            <p className="text-lg text-white">{plan.title}</p>
                            <p className="text-md font-medium text-white/40">{plan.price}</p>
                            <ul className="mt-6 space-y-3 text-sm text-white/70">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <span className="inline-flex h-2 w-2 rounded-full bg-purple-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            onClick={() => {
                                console.log(`Selected plan: ${plan.title}`);
                                window.location.href = '#waitlist';
                            }}
                            className={`mt-8 w-full rounded-md border px-4 py-3 text-sm font-semibold transition-colors ${plan.highlight
                                ? "border-purple-400/80 bg-linear-to-r from-purple-500 via-purple-400 to-purple-500 text-black"
                                : "border-white/20 text-white/80 hover:border-purple-400/80 hover:text-white"
                                }`}
                        >
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}