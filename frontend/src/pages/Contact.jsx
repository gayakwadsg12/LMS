import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Message sent successfully!')
  }

  return (
    <div className="bg-[#f7fcff] text-[#0f172a]">
      <section
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #120d3b 0%, #2d1f90 52%, #4a34df 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white">
            Contact Our Team
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Let Us Build Your Learning World Together
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/90 sm:text-base">
            Tell us about your school or academy, and we will help you choose the right setup.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="space-y-4">
            <article className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black">Email</h2>
              <p className="mt-1 text-sm text-slate-500">hello@lmsplatform.com</p>
            </article>
            <article className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black">Phone</h2>
              <p className="mt-1 text-sm text-slate-500">+1 (800) 245-1948</p>
            </article>
            <article className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-black">Support Hours</h2>
              <p className="mt-1 text-sm text-slate-500">Monday to Friday, 9:00 AM to 6:00 PM EST</p>
            </article>
          </aside>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-2xl font-black">Send Us a Message</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                className="h-11 rounded-lg border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Work email"
                className="h-11 rounded-lg border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                required
              />
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                placeholder="School / Organization"
                className="h-11 rounded-lg border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="h-11 rounded-lg border border-black/10 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you want to build"
              className="mt-3 min-h-32 w-full rounded-lg border border-black/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
              required
            />
            <button className="mt-4 w-full rounded-xl bg-[#ff8a33] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#f97618] sm:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
