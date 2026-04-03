import React from 'react'

const features = [
  {
    title: 'Kid-Friendly Portals',
    desc: 'Each school gets a colorful, safe learning space with its own identity.',
  },
  {
    title: 'Live + Recorded Classes',
    desc: 'Blend joyful live sessions with anytime access to recorded lessons.',
  },
  {
    title: 'Safe Payments',
    desc: 'Secure checkout and transparent billing for schools and families.',
  },
  {
    title: 'Progress Reports',
    desc: 'Track learner growth with easy dashboards, badges, and milestones.',
  },
]

export default function Home() {
  return (
    <div className="bg-[#f7fcff] text-[#0f172a]">
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #120d3b 0%, #2d1f90 52%, #4a34df 100%)' }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
              Learning Platform for Schools and Tutors
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              Learn, Play, and Grow with Joyful Courses
            </h1>
            <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
              Build a magical learning world for children where teachers create engaging courses,
              parents track progress, and students stay excited every day.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-[#ff8a33] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#f97618]">
                Start Free Trial
              </button>
              <button className="rounded-xl border border-white/60 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Watch Demo
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
              alt="Kids learning together"
              className="h-64 w-full rounded-xl object-cover sm:h-80"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-black sm:text-4xl">Awesome Features</h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Everything you need to make learning fun, safe, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f4f8]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black sm:text-4xl">Who Is It For?</h2>
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              Made for everyone helping children learn and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              ['Schools and Classes', 'Manage teachers, students, and programs in one place.'],
              ['Teachers and Tutors', 'Create engaging courses with live and recorded lessons.'],
              ['Kids and Parents', 'Enjoy a safe and exciting learning experience every day.'],
            ].map(([title, desc]) => (
              <article key={title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
