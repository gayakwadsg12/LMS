import React, { useState } from 'react'
import {
  Search,
  Upload,
  Plus,
  Users,
  GraduationCap,
  Calendar,
  AlertTriangle,
  ChevronDown,
  FileText,
  Receipt,
} from 'lucide-react'

// ── Avatars (placeholder colored circles) ──────────────────────
function Avatar({ name, bg = '#e2e8f0', size = 42 }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2)
  const colors = {
    'Arjun Singh': { bg: '#c7d2fe', text: '#3730a3' },
    'Mia Chen': { bg: '#fce7f3', text: '#9d174d' },
    'Sofia Ramirez': { bg: '#d1fae5', text: '#065f46' },
    'Yusuf Ali': { bg: '#fef3c7', text: '#92400e' },
  }
  const c = colors[name] || { bg: '#e2e8f0', text: '#475569' }
  return (
    <div
      style={{ width: size, height: size, backgroundColor: c.bg, color: c.text, borderRadius: 8, fontSize: 13, fontWeight: 700 }}
      className="flex items-center justify-center flex-shrink-0"
    >
      {initials}
    </div>
  )
}

// ── Status Badge ────────────────────────────────────────────────
function StatusBadge({ label }) {
  const map = {
    'On track': 'bg-emerald-100 text-emerald-700',
    'Needs follow-up': 'bg-[#ffd966] text-[#4b2e00]',
    'Excellent': 'bg-[#2dd4bf]/20 text-[#0d9488]',
    'New admission': 'bg-[#e0e7ff] text-[#4338ca]',
  }
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium ${map[label] || 'bg-gray-100 text-gray-600'}`}>
      {label}
    </span>
  )
}

// ── Mini Stat Card ──────────────────────────────────────────────
function StatCard({ label, value, sub, subVariant, icon }) {
  const subColors = {
    success: 'bg-emerald-100 text-emerald-700',
    neutral: 'bg-[#f0f4f8] text-[#94a3b8]',
    warning: 'bg-[#ffd966] text-[#4b2e00]',
  }
  return (
    <div className="rounded-[8px] border border-black/[0.08] bg-white p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <p className="text-[13px] font-medium text-[#94a3b8]">{label}</p>
        <div className="rounded-[6px] bg-[#e8f5ff] p-2">{icon}</div>
      </div>
      <p className="text-[30px] font-bold tracking-tight text-[#0f172a] leading-none">{value}</p>
      <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-[11px] font-medium ${subColors[subVariant] || subColors.neutral}`}>
        {sub}
      </span>
    </div>
  )
}

// ── Students data ───────────────────────────────────────────────
const students = [
  {
    name: 'Arjun Singh',
    parent: 'Kavita Singh',
    joined: 'Joined 3 months ago',
    course: 'Coding for Kids Bootcamp',
    batch: 'Batch B2 • Mon, Wed, Fri',
    progress: '82% progress',
    attendance: 'Attendance 93%',
    status: 'On track',
    actions: ['Profile', 'Message'],
  },
  {
    name: 'Mia Chen',
    parent: 'Daniel Chen',
    joined: 'Joined 2 months ago',
    course: 'STEM Explorers',
    batch: 'Batch A1 • Tue, Thu',
    progress: '64% progress',
    attendance: 'Attendance 71%',
    status: 'Needs follow-up',
    actions: ['Call Parent'],
    actionVariant: 'primary',
  },
  {
    name: 'Sofia Ramirez',
    parent: 'Elena Ramirez',
    joined: 'Joined 5 months ago',
    course: 'Creative English Club',
    batch: 'Weekend cohort • Sat, Sun',
    progress: '91% progress',
    attendance: 'Attendance 96%',
    status: 'Excellent',
    actions: ['View', 'Certificate'],
  },
  {
    name: 'Yusuf Ali',
    parent: 'Fatima Ali',
    joined: 'Joined 3 weeks ago',
    course: 'Math Mastery Live',
    batch: 'Evening cohort • Tue, Thu, Sat',
    progress: '28% progress',
    attendance: 'Attendance 58%',
    status: 'New admission',
    actions: ['Assign mentor'],
  },
]

// ── Bar chart data ──────────────────────────────────────────────
const chartData = [
  { day: 'Mon', h: 55 },
  { day: 'Tue', h: 90 },
  { day: 'Wed', h: 130 },
  { day: 'Thu', h: 110 },
  { day: 'Fri', h: 75 },
]

// ── Cohort type options ─────────────────────────────────────────
const cohortTypes = ['Weekday batch', 'Weekend batch', 'Trial learner', 'Live cohort']

export default function StudentManagement() {
  const [activeFilter, setActiveFilter] = useState('All students')
  const [selectedCohort, setSelectedCohort] = useState('Weekday batch')
  const [studentName, setStudentName] = useState('')
  const [parentContact, setParentContact] = useState('')
  const [program, setProgram] = useState('')

  const filters = ['All students', 'Needs follow-up', 'Low attendance', 'New admissions']

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="flex flex-col gap-6 p-7">
        {/* ── Hero Section ── */}
        <section className="rounded-[10px] border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] p-7 flex items-start justify-between gap-8">
          <div className="flex-1">
            <span className="inline-flex items-center rounded-[10px] bg-[#f0f4f8] px-3 py-1.5 text-[11px] font-medium text-[#64748b] mb-4">
              Student workspace
            </span>
            <h2 className="text-[30px] font-bold leading-[1.2] text-[#0f172a] mb-3 max-w-[850px]">
              Track enrollment, progress, attendance, and follow-ups from one dedicated learner screen.
            </h2>
            <p className="text-[13.5px] text-[#94a3b8] max-w-[800px] mb-5 leading-relaxed">
              Review course performance, student health, parent contact status, and operational actions without leaving the student management workspace. The layout stays consistent with the institute dashboard while giving more room to learner operations.
            </p>
            <div className="flex items-center gap-3">
              <button className="inline-flex h-10 items-center gap-2 rounded-[6px] bg-[#5b3df6] px-4 text-[13px] font-semibold text-white hover:bg-[#4b2fd5]">
                <Users className="h-4 w-4" />
                Add Student
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-black/[0.08] bg-white px-4 text-[13px] font-medium text-[#0f172a] hover:bg-gray-50">
                <FileText className="h-4 w-4" />
                Import CSV
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-[6px] border border-black/[0.08] bg-white px-4 text-[13px] font-medium text-[#0f172a] hover:bg-gray-50">
                <Calendar className="h-4 w-4" />
                This week
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px]">
            <div className="rounded-[8px] border border-black/[0.08] bg-white px-5 py-4">
              <p className="text-[12px] text-[#94a3b8] mb-1">Pending admissions</p>
              <p className="text-[28px] font-bold text-[#0f172a]">26</p>
            </div>
            <div className="rounded-[8px] border border-black/[0.08] bg-white px-5 py-4">
              <p className="text-[12px] text-[#94a3b8] mb-1">Needs follow-up</p>
              <p className="text-[28px] font-bold text-[#0f172a]">18</p>
            </div>
          </div>
        </section>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            label="Total students"
            value="12,480"
            sub="+324 this month"
            subVariant="success"
            icon={<Users className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
          <StatCard
            label="Active enrollments"
            value="6,238"
            sub="84 live cohorts"
            subVariant="neutral"
            icon={<GraduationCap className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
          <StatCard
            label="Attendance rate"
            value="91%"
            sub="7-day average"
            subVariant="neutral"
            icon={<Calendar className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
          <StatCard
            label="At-risk learners"
            value="42"
            sub="Needs outreach today"
            subVariant="warning"
            icon={<AlertTriangle className="h-[18px] w-[18px] text-[#5b3df6]" />}
          />
        </div>

        {/* ── Student Directory ── */}
        <section className="rounded-[10px] border border-black/[0.08] bg-white p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-[20px] font-bold text-[#0f172a]">Student directory</h3>
              <p className="text-[13px] text-[#94a3b8] mt-0.5">
                Monitor progress, attendance, parent communication, and enrollment health from a single operational list.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-9 rounded-[6px] border border-black/[0.08] bg-white px-4 text-[13px] font-medium text-[#0f172a] hover:bg-gray-50">
                Export List
              </button>
              <button className="h-9 rounded-[6px] bg-[#5b3df6] px-4 text-[13px] font-semibold text-white hover:bg-[#4b2fd5]">
                Add Student
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                    activeFilter === f
                      ? 'bg-[#ede7ff] text-[#5b3df6]'
                      : 'text-[#64748b] hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 rounded-[6px] border border-black/[0.08] bg-white px-3 text-[12px] font-medium text-[#0f172a] hover:bg-gray-50">
                Attendance
              </button>
              <button className="h-8 rounded-[6px] border border-black/[0.08] bg-white px-3 text-[12px] font-medium text-[#0f172a] hover:bg-gray-50">
                Progress
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1.8fr_1.4fr_1fr_1.2fr] gap-4 px-3 pb-2 border-b border-black/[0.06]">
            {['Student', 'Enrolled course', 'Progress', 'Status', 'Actions'].map((h) => (
              <p key={h} className="text-[12px] font-medium text-[#94a3b8]">{h}</p>
            ))}
          </div>

          {/* Student rows */}
          <div className="divide-y divide-black/[0.05]">
            {students.map((s) => (
              <div key={s.name} className="grid grid-cols-[2fr_1.8fr_1.4fr_1fr_1.2fr] gap-4 items-center px-3 py-4 hover:bg-gray-50/60 transition-colors">
                {/* Student */}
                <div className="flex items-center gap-3">
                  <Avatar name={s.name} />
                  <div>
                    <p className="text-[14px] font-semibold text-[#0f172a]">{s.name}</p>
                    <p className="text-[12px] text-[#94a3b8]">Parent: {s.parent} • {s.joined}</p>
                  </div>
                </div>

                {/* Course */}
                <div>
                  <p className="text-[13px] font-semibold text-[#0f172a]">{s.course}</p>
                  <p className="text-[12px] text-[#94a3b8]">{s.batch}</p>
                </div>

                {/* Progress */}
                <div>
                  <p className="text-[13px] font-semibold text-[#0f172a]">{s.progress}</p>
                  <p className="text-[12px] text-[#94a3b8]">{s.attendance}</p>
                </div>

                {/* Status */}
                <div>
                  <StatusBadge label={s.status} />
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-1.5">
                  {s.actions.map((action) => (
                    <button
                      key={action}
                      className={`h-8 rounded-[6px] px-3 text-[12px] font-medium transition-colors ${
                        action === 'Call Parent'
                          ? 'bg-[#5b3df6] text-white hover:bg-[#4b2fd5]'
                          : 'border border-black/[0.08] bg-white text-[#0f172a] hover:bg-gray-50'
                      }`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bottom Row: Engagement Overview + Add Student ── */}
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-6">
          {/* Engagement Overview */}
          <section className="rounded-[10px] border border-black/[0.08] bg-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[20px] font-bold text-[#0f172a]">Engagement overview</h3>
                <p className="text-[13px] text-[#94a3b8] mt-0.5">A quick weekly view of learner activity, interventions, and cohort health.</p>
              </div>
              <span className="inline-flex items-center rounded-[8px] bg-[#f0f4f8] px-3 py-1.5 text-[11px] font-medium text-[#64748b]">
                Updated today
              </span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-[8px] bg-[#f8fafc] border border-black/[0.06] px-4 py-3">
                <p className="text-[11px] text-[#94a3b8] mb-1">Completed assignments</p>
                <p className="text-[26px] font-bold text-[#0f172a]">1,284</p>
              </div>
              <div className="rounded-[8px] bg-[#f8fafc] border border-black/[0.06] px-4 py-3">
                <p className="text-[11px] text-[#94a3b8] mb-1">Parent replies</p>
                <p className="text-[26px] font-bold text-[#0f172a]">312</p>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex items-end justify-center gap-6 mb-6" style={{ height: 150 }}>
              {chartData.map(({ day, h }) => (
                <div key={day} className="flex flex-col items-center gap-2">
                  <div
                    className="w-10 rounded-t-[5px]"
                    style={{
                      height: h,
                      background: 'linear-gradient(to bottom, #f97316, #5b3df6)',
                    }}
                  />
                  <span className="text-[11px] text-[#94a3b8]">{day}</span>
                </div>
              ))}
            </div>

            {/* Action Items */}
            <div className="space-y-3">
              {[
                {
                  n: 1,
                  title: 'Review low attendance list',
                  desc: '18 students dropped below the weekly attendance threshold and need instructor follow-up.',
                },
                {
                  n: 2,
                  title: 'Contact parents for at-risk learners',
                  desc: 'Send updates to guardians and propose make-up sessions for learners with missed classes.',
                },
                {
                  n: 3,
                  title: 'Move strong learners to advanced cohorts',
                  desc: '12 students qualify for the next level based on completed lessons and quiz performance.',
                },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-3 p-3 rounded-[8px] border border-black/[0.06] bg-[#f8fafc]">
                  <div className="w-7 h-7 rounded-full bg-[#ede7ff] text-[#5b3df6] flex items-center justify-center text-[12px] font-bold flex-shrink-0 mt-0.5">
                    {item.n}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0f172a]">{item.title}</p>
                    <p className="text-[12px] text-[#94a3b8] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Add Student Form */}
          <section className="rounded-[10px] border border-black/[0.08] bg-white p-6">
            <h3 className="text-[20px] font-bold text-[#0f172a] mb-1">Add student</h3>
            <p className="text-[13px] text-[#94a3b8] mb-5">Create a learner record without leaving this page.</p>

            <div className="space-y-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#0f172a] mb-1.5">Student name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full rounded-[6px] border border-black/[0.08] bg-[#f8fafc] px-3 py-2.5 text-[13px] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5b3df6] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#0f172a] mb-1.5">Parent contact</label>
                <input
                  type="text"
                  placeholder="Phone number or email"
                  value={parentContact}
                  onChange={(e) => setParentContact(e.target.value)}
                  className="w-full rounded-[6px] border border-black/[0.08] bg-[#f8fafc] px-3 py-2.5 text-[13px] text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5b3df6] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#0f172a] mb-1.5">Program</label>
                <div className="relative">
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full appearance-none rounded-[6px] border border-black/[0.08] bg-[#f8fafc] px-3 py-2.5 text-[13px] text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#5b3df6] focus:bg-white transition-colors"
                  >
                    <option value="">Select enrolled course</option>
                    <option>Coding for Kids Bootcamp</option>
                    <option>STEM Explorers</option>
                    <option>Creative English Club</option>
                    <option>Math Mastery Live</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#0f172a] mb-2">Cohort type</label>
                <div className="grid grid-cols-2 gap-2">
                  {cohortTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedCohort(type)}
                      className={`h-10 rounded-[6px] border text-[12px] font-medium transition-colors ${
                        selectedCohort === type
                          ? 'border-[#5b3df6] bg-[#ede7ff] text-[#5b3df6]'
                          : 'border-black/[0.08] bg-[#f8fafc] text-[#64748b] hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full h-11 rounded-[6px] bg-[#5b3df6] text-white text-[14px] font-semibold hover:bg-[#4b2fd5] transition-colors">
                Create Student
              </button>
              <button className="w-full h-11 rounded-[6px] border border-black/[0.08] bg-white text-[#0f172a] text-[13px] font-medium hover:bg-gray-50 transition-colors">
                Save as Draft
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
