import React from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$29',
    note: '/month',
    points: ['Up to 100 students', '5 courses', 'Standard support'],
    cta: 'Choose Starter',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$79',
    note: '/month',
    points: ['Unlimited students', 'Unlimited courses', 'Custom domain', 'Priority support'],
    cta: 'Choose Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    note: 'Contact sales',
    points: ['Multi-tenant setup', 'Dedicated manager', 'Advanced integrations'],
    cta: 'Contact Us',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <div className="bg-[#f7fcff] text-[#0f172a]">
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #120d3b 0%, #2d1f90 52%, #4a34df 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
            14-Day Free Trial
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Simple Pricing for Growing Learning Teams
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/90 sm:text-base">
            Start quickly, scale confidently, and choose a plan that matches your school or academy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border p-6 shadow-sm ${plan.highlighted ? 'border-[#5b3df6] bg-[#f5f2ff]' : 'border-black/10 bg-white'}`}
            >
              {plan.highlighted ? (
                <p className="mb-3 inline-flex rounded-full bg-[#5b3df6] px-3 py-1 text-xs font-bold text-white">Most Popular</p>
              ) : null}
              <h2 className="text-2xl font-black">{plan.name}</h2>
              <div className="mt-3">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="ml-2 text-sm text-slate-500">{plan.note}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {plan.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-bold transition ${plan.highlighted ? 'bg-[#ff8a33] text-white hover:bg-[#f97618]' : 'border border-black/15 bg-white hover:bg-slate-50'}`}>
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
