import React from 'react'

const plans = [
  {
    name: 'Plus',
    price: '£2.99/month',
    bg: 'bg-slate-100',
    text: 'text-slate-800',
    arrow: 'text-slate-800',
  },
  {
    name: 'Premium',
    price: '£6.99/month',
    bg: 'bg-teal-600',
    text: 'text-white',
    arrow: 'text-white',
    pattern: true,
  },
]

const PlanSelection = () => {
  return (
    <div className="flex flex-col items-center w-full mt-16 mb-16">
      <h2 className="text-lg font-medium mb-10 text-slate-800 tracking-widest">CHOOSE PLAN:</h2>
      <div className="flex flex-row gap-16 w-full max-w-7xl px-8 justify-center flex-wrap">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col justify-between rounded-2xl p-12 w-full max-w-xl h-72 cursor-pointer transition-shadow shadow-md hover:shadow-xl overflow-hidden ${plan.bg}`}
          >
            {plan.pattern && (
              <svg className="absolute inset-0 w-full h-full opacity-20 z-0" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,0 400,0 400,250" fill="#fff" fillOpacity="0.1" />
                <polygon points="0,0 0,250 400,250" fill="#fff" fillOpacity="0.08" />
                <polygon points="0,0 200,0 0,250" fill="#fff" fillOpacity="0.08" />
              </svg>
            )}
            <span className={`text-4xl font-bold mb-10 z-10 ${plan.text}`}>{plan.name}</span>
            <div className="flex items-center justify-between w-full z-10">
              <span className={`text-2xl font-semibold ${plan.text}`}>{plan.price}</span>
              <span className={`ml-4 ${plan.arrow}`}>
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanSelection
