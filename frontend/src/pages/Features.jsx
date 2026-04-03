import React from 'react'

const capabilityCards = [
  {
    title: 'Multi-School Setup',
    text: 'Run multiple branches with separate portals and centralized admin control.',
  },
  {
    title: 'Live Classroom Tools',
    text: 'Schedule classes, track attendance, and share recordings in one workflow.',
  },
  {
    title: 'Content + Assessments',
    text: 'Create modules, quizzes, assignments, and downloadable resources quickly.',
  },
  {
    title: 'Growth Analytics',
    text: 'Monitor enrollments, completion rates, and teacher performance with smart insights.',
  },
]

export default function Features() {
  return (
    <div className="bg-[#f7fcff] text-[#0f172a]">
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #120d3b 0%, #2d1f90 52%, #4a34df 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
            Feature Highlights
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            One Powerful Learning Kingdom for Every School
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/90 sm:text-base">
            Manage branches, teachers, students, content, payments, and reports from a unified
            platform designed for delightful learning experiences.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {capabilityCards.map((item) => (
            <article key={item.title} className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black">{item.title}</h2>
              <p className="mt-3 text-sm text-slate-500">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f4f8]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
          <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8">
            <h3 className="text-3xl font-black">Why Teams Choose This LMS</h3>
            <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <li>Fast onboarding without technical setup overhead</li>
              <li>Role-based portals for admins, instructors, parents, and students</li>
              <li>Mobile-first learning experience for families on the go</li>
              <li>Scalable architecture for branch expansion and franchise models</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
