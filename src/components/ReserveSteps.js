
import React from "react";

const ReserveSteps = () => {
  return (
    <section className="bg-[#002C3E] text-white py-20 px-6 md:px-16">
      <p className="text-sm text-[#6BA6C7] uppercase mb-3">Step</p>
      <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-16">
        Maximize your returns with a <br />
        <span className="text-white/90">Reserve account that generates.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            step: "1",
            title: "Open your account",
            desc: "Sign up to finpay and set up your account from the dashboard.",
          },
          {
            step: "2",
            title: "Transfer your money",
            desc: "Move money from to another account into and start to earning up.",
          },
          {
            step: "3",
            title: "Watch your balance grow",
            desc: "Accessed instantly and remain insulated from market volatility.",
          },
        ].map(({ step, title, desc }) => (
          <div
            key={step}
            className="bg-[#04394E] rounded-xl p-6 min-h-[180px] flex flex-col"
          >
            <h3 className="text-5xl font-bold text-white/50 mb-4">{step}</h3>
            <p className="text-lg font-semibold mb-2">{title}</p>
            <p className="text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReserveSteps;
