import React from 'react'

export default function About() {
  return (
    <div className="bg-[#f7fcff] text-[#0f172a]">
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #120d3b 0%, #2d1f90 52%, #4a34df 100%)' }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
              About Us
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
              We Help Educators Build Joyful Learning Experiences
            </h1>
            <p className="mt-4 text-sm text-white/90 sm:text-base">
              From individual tutors to large institutions, our platform makes online learning easy to
              launch, simple to manage, and delightful for students.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-2xl font-black text-white">12k+</p>
                <p className="text-xs text-white/80">Educators</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-2xl font-black text-white">1.8M</p>
                <p className="text-xs text-white/80">Learners</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-2xl font-black text-white">48</p>
                <p className="text-xs text-white/80">Countries</p>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
            alt="Teacher guiding students"
            className="h-72 w-full rounded-2xl border border-white/15 object-cover sm:h-96"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Our Story</h2>
            <p className="mt-3 text-sm text-slate-600">
              We started with a simple mission: help educators spend less time on tools and more time on
              teaching. Today, our LMS supports schools, coaching centers, and online creators globally.
            </p>
          </article>
          <article className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Our Promise</h2>
            <p className="mt-3 text-sm text-slate-600">
              Build with confidence, scale at your pace, and keep every learner experience safe,
              structured, and inspiring across devices.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
