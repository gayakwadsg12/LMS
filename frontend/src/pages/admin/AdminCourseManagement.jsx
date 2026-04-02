import React, { useState } from 'react'
import {
  ChevronDown,
  ImageIcon,
  FileStack,
  Check,
  ClipboardList,
  Rocket,
  Edit,
  Play,
  FileText,
  Video,
  File,
  Plus,
  CheckCircle,
  AlertCircle,
  Mail,
  MessageSquare,
  Calendar,
  Folder
} from 'lucide-react'

const steps = [
  { id: 'basics', label: '1. Basics' },
  { id: 'content', label: '2. Content' },
  { id: 'pricing', label: '3. Pricing' },
  { id: 'publish', label: '4. Publish' },
]

const initialModules = [
  {
    id: 1,
    title: 'Foundations of scientific thinking',
    moduleNumber: '01',
    status: 'drafted',
    meta: '3 lessons • 1 activity sheet • 1 live workshop',
    lessons: [
      { id: 101, title: 'What makes a strong experiment?', duration: '12 min', type: 'video', typeLabel: 'Video', description: 'Intro overview, learning goals, and experiment design basics.' },
      { id: 102, title: 'Observation worksheet', duration: '', type: 'pdf', typeLabel: 'PDF', description: 'Downloadable practice sheet with guided prompts and reflection questions.' },
      { id: 103, title: 'Live mentor workshop', duration: '', type: 'live', typeLabel: 'Live', description: 'Thursday, 4:00 PM • Small-group session for hands-on Q&A and experiments.' }
    ]
  },
  {
    id: 2,
    title: 'Robotics basics and sensors',
    moduleNumber: '02',
    status: 'review',
    meta: '4 lessons • 2 worksheets • Coding starter lab',
    lessons: [
      { id: 201, title: 'Sensor essentials', duration: '14 min', type: 'recorded', typeLabel: 'Recorded', description: 'Covers signal basics, measurement, and hardware examples.' },
      { id: 202, title: 'First coding lab', duration: '', type: 'lab', typeLabel: 'Lab', description: 'Interactive coding exercise for reading and testing simple inputs.' },
      { id: 203, title: 'Module checkpoint quiz', duration: '', type: 'quiz', typeLabel: 'Quiz', description: '8 questions • Checks sensor vocabulary and logic comprehension.' }
    ]
  },
  {
    id: 3,
    title: 'Build, test, and present',
    moduleNumber: '03',
    status: 'draft',
    meta: '5 lessons • Final project • Peer showcase session',
    lessons: []
  }
]

const sharedResources = [
  { id: 1, name: 'Starter files bundle', type: 'ZIP package', size: '7 files', icon: 'folder' },
  { id: 2, name: 'Parent guidance pack', type: 'PDF', note: 'Sent at enrollment', icon: 'pdf' },
  { id: 3, name: 'Community guidelines', type: 'PDF', note: 'Visible inside student space', icon: 'pdf' }
]

const basicsModules = [
  { n: '01', title: 'Foundations of scientific thinking', meta: '3 lessons • 1 live workshop • Intro experiments kit' },
  { n: '02', title: 'Robotics basics and sensors', meta: '4 lessons • 2 downloadable worksheets • Coding starter lab' },
  { n: '03', title: 'Build, test, and present', meta: '5 lessons • Final project • Peer showcase session' },
]

function FieldLabel({ children }) {
  return <label className="text-[13px] font-medium text-[#0f1724]">{children}</label>
}

function InputShell({ children, className = '' }) {
  return (
    <div className={`flex min-h-11 items-center rounded-md border border-black/[0.08] bg-white px-[15px] py-2 ${className}`}>
      {children}
    </div>
  )
}

function Toggle({ enabled, onToggle }) {
  return (
    <button onClick={onToggle} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? 'bg-[#5b3df6]' : 'bg-[#e2e8f0]'}`}>
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  )
}

function TypeBadge({ label, type }) {
  const colors = {
    video: 'bg-blue-50 text-blue-600',
    pdf: 'bg-orange-50 text-orange-600',
    live: 'bg-green-50 text-green-600',
    recorded: 'bg-purple-50 text-purple-600',
    lab: 'bg-cyan-50 text-cyan-600',
    quiz: 'bg-yellow-50 text-yellow-700',
  }
  return <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${colors[type] || 'bg-gray-100 text-gray-600'}`}>{label}</span>
}

function LessonIcon({ type }) {
  const cls = "h-4 w-4 text-[#5b3df6]"
  const wrap = (child) => <div className="w-8 h-8 rounded-md bg-[#ede9ff] flex items-center justify-center flex-shrink-0">{child}</div>
  switch (type) {
    case 'video': return wrap(<Video className={cls} />)
    case 'pdf': return wrap(<FileText className={cls} />)
    case 'live': return wrap(<Calendar className={cls} />)
    case 'recorded': return wrap(<Play className={cls} />)
    case 'lab': return wrap(<File className={cls} />)
    case 'quiz': return wrap(<ClipboardList className={cls} />)
    default: return wrap(<File className={cls} />)
  }
}

function getStatusBadge(status) {
  switch (status) {
    case 'completed': return <span className="text-[11px] bg-[#d1fae5] text-[#065f46] px-2.5 py-1 rounded-full font-medium">Completed ✓</span>
    case 'review': return <span className="text-[11px] bg-[#fef3c7] text-[#92400e] px-2.5 py-1 rounded-full font-medium">Needs review</span>
    case 'drafted': return <span className="text-[11px] bg-[#f1f5f9] text-[#64748b] px-2.5 py-1 rounded-full font-medium">Drafted</span>
    case 'draft': return <span className="text-[11px] bg-[#f1f5f9] text-[#64748b] px-2.5 py-1 rounded-full font-medium">Draft</span>
    default: return null
  }
}

function getLessonAction(lesson) {
  switch (lesson.type) {
    case 'pdf': return <button className="text-[12px] text-[#0f172a] font-medium px-3 py-1.5 rounded-md border border-black/[0.08] hover:bg-gray-50 transition-colors">Replace</button>
    case 'live': return <button className="text-[12px] text-[#0f172a] font-medium px-3 py-1.5 rounded-md border border-black/[0.08] hover:bg-gray-50 transition-colors">Reschedule</button>
    case 'lab': return <button className="text-[12px] text-[#5b3df6] font-medium px-3 py-1.5 rounded-md border border-[#d8cffc] bg-[#f3efff] hover:bg-[#ece5ff] transition-colors">Open Lab</button>
    case 'quiz': return <button className="text-[12px] text-[#5b3df6] font-medium px-3 py-1.5 rounded-md border border-[#d8cffc] bg-[#f3efff] hover:bg-[#ece5ff] transition-colors">Edit Quiz</button>
    default: return <button className="text-[12px] text-[#0f172a] font-medium px-3 py-1.5 rounded-md border border-black/[0.08] hover:bg-gray-50 transition-colors">Preview</button>
  }
}

// ────────────────────────────────────────────────
// CONTENT STEP
// ────────────────────────────────────────────────
function ContentStep() {
  return (
    <div className="grid grid-cols-[1.6fr_1fr] gap-6">
      {/* Left */}
      <div className="space-y-4">
        {/* Header card */}
        <div className="bg-white border border-black/[0.08] rounded-lg p-5 flex items-center justify-between">
          <div>
            <h2 className="text-[18px] font-bold text-[#0f172a]">Content structure</h2>
            <p className="text-[13px] text-[#94a3b8] mt-0.5">Arrange the main modules and keep the lesson plan ready for review.</p>
          </div>
          <span className="inline-flex items-center rounded-xl bg-emerald-500 px-2.5 py-1 text-[11px] font-medium text-white">Auto-saved</span>
        </div>

        {/* Modules */}
        {initialModules.map((module) => (
          <div key={module.id} className="bg-white border border-black/[0.08] rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#f1f5f9] text-[#0f172a] font-bold text-sm border border-black/[0.08]">
                  {module.moduleNumber}
                </div>
                <div>
                  <h3 className="font-semibold text-[14px] text-[#0f172a]">{module.title}</h3>
                  <p className="text-[12px] text-[#94a3b8] mt-0.5">{module.meta}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(module.status)}
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[#0f172a] border border-black/[0.08] rounded-md hover:bg-gray-50 transition-colors">
                  <Edit className="h-3.5 w-3.5" />
                  Edit Module
                </button>
              </div>
            </div>

            {module.lessons.length > 0 && (
              <div className="border-t border-black/[0.08] bg-[#fafcff] px-5 py-4 space-y-3">
                {module.lessons.map((lesson, i) => (
                  <div key={lesson.id} className="flex items-center justify-between p-3 bg-white border border-black/[0.08] rounded-lg">
                    <div className="flex items-start gap-3 flex-1">
                      <LessonIcon type={lesson.type} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[13px] font-medium text-[#0f172a]">
                            Lesson {i + 1} · {lesson.title}
                          </span>
                          <TypeBadge label={lesson.typeLabel} type={lesson.type} />
                        </div>
                        <p className="text-[11px] text-[#94a3b8] mt-0.5">
                          {lesson.duration ? `${lesson.duration} • ` : ''}{lesson.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-3 flex-shrink-0">{getLessonAction(lesson)}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Shared Resources */}
        <div className="bg-white border border-black/[0.08] rounded-lg p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-[16px] font-bold text-[#0f172a]">Shared resources</h3>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-[#0f172a] border border-black/[0.08] rounded-md bg-white hover:bg-gray-50 transition-colors">
              Add Resource
            </button>
          </div>
          <p className="text-[12px] text-[#94a3b8] mb-4">Materials available across modules to support the full course journey.</p>
          <div className="grid grid-cols-3 gap-3">
            {sharedResources.map((r) => (
              <div key={r.id} className="flex flex-col gap-2 p-3 bg-[#f8fafc] border border-black/[0.08] rounded-lg">
                <div className="w-9 h-9 rounded-md bg-[#ede9ff] flex items-center justify-center">
                  {r.icon === 'folder' ? <Folder className="h-4 w-4 text-[#5b3df6]" /> : <FileText className="h-4 w-4 text-[#5b3df6]" />}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0f172a]">{r.name}</p>
                  <p className="text-[11px] text-[#94a3b8] mt-0.5">
                    {r.type}{r.size ? ` • ${r.size}` : ''}{r.note ? ` • ${r.note}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="space-y-4">
        {/* Content Summary */}
        <div className="bg-white border border-black/[0.08] rounded-lg p-5">
          <h3 className="text-[16px] font-bold text-[#0f172a] mb-1">Content summary</h3>
          <p className="text-[12px] text-[#94a3b8] mb-4">A quick view of what is ready before moving to pricing.</p>
          <div className="space-y-2">
            {[
              { label: '2 modules structured', badge: <span className="text-[11px] font-semibold bg-emerald-500 text-white px-2.5 py-0.5 rounded-full">Ready</span> },
              { label: '6 lessons added', badge: <span className="text-[12px] text-[#94a3b8]">In progress</span> },
              { label: '3 shared resources', badge: <span className="text-[12px] text-[#94a3b8]">Uploaded</span> },
              { label: 'Pricing not set yet', badge: <span className="text-[12px] text-[#94a3b8]">Pending</span> },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-md bg-[#f8fafc]">
                <span className="text-[13px] text-[#0f172a]">{row.label}</span>
                {row.badge}
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-black/[0.08] space-y-2">
            {[['Total runtime', '26 min'], ['Live sessions', '2 scheduled'], ['Downloads', '5 resources']].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="text-[12px] text-[#94a3b8]">{k}</span>
                <span className="text-[12px] font-semibold text-[#0f172a]">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviewer Checklist */}
        <div className="bg-white border border-black/[0.08] rounded-lg p-5">
          <h3 className="text-[16px] font-bold text-[#0f172a] mb-1">Reviewer checklist</h3>
          <p className="text-[12px] text-[#94a3b8] mb-4">Keep content quality consistent before the course goes live.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#0f172a]">Learning outcomes added</p>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">Each module explains what learners should understand or build.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#0f172a]">Downloadables attached</p>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">Worksheets and orientation docs are available from the start.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-5 w-5 rounded-full border-2 border-[#94a3b8] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#0f172a]">Final assessment pending</p>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">Add the capstone grading rubric before sending to final review.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Publishing Workflow */}
        <div className="bg-white border border-black/[0.08] rounded-lg p-5">
          <h3 className="text-[16px] font-bold text-[#0f172a] mb-1">Publishing workflow</h3>
          <p className="text-[12px] text-[#94a3b8] mb-4">The flow continues naturally from Basics into Content.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5">✓</div>
              <div>
                <p className="text-[13px] font-semibold text-[#0f172a]">Basics completed</p>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">Course details, category, level, and primary instructor are already configured.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-[#5b3df6] flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5b3df6]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#0f172a]">Content in progress</p>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">Modules, lesson types, and shared assets are being reviewed for completeness.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full border-2 border-black/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-1 bg-[#94a3b8] rounded" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#0f172a]">Pricing next</p>
                <p className="text-[11px] text-[#94a3b8] mt-0.5">Set payment model, discounts, and tax handling after content is approved.</p>
              </div>
            </div>
          </div>
          <button className="w-full mt-5 py-2.5 bg-[#5b3df6] text-white text-[14px] font-medium rounded-lg hover:bg-[#4a2ed8] transition-colors">
            Continue to Pricing
          </button>
        </div>
      </div>
    </div>
  )
}

// ────────────────────────────────────────────────
// BASICS STEP
// ────────────────────────────────────────────────
function BasicsStep() {
  return (
    <div className="min-w-0 flex-1 space-y-6">
      <section className="rounded-lg border border-black/[0.08] bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#0f1724]">Course basics</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">Start with the core details learners and instructors will see across the platform.</p>
          </div>
          <span className="inline-flex shrink-0 items-center rounded-xl bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">Auto-saved</span>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 gap-x-4 md:grid-cols-2">
          <div className="flex flex-col gap-2"><FieldLabel>Course title</FieldLabel><InputShell><span className="text-sm text-[#0f1724]">STEM Explorers Advanced</span></InputShell></div>
          <div className="flex flex-col gap-2"><FieldLabel>Category</FieldLabel><InputShell className="justify-between"><span className="text-sm text-[#0f1724]">Science & Technology</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
          <div className="flex flex-col gap-2"><FieldLabel>Level</FieldLabel><InputShell className="justify-between"><span className="text-sm text-[#0f1724]">Intermediate</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
          <div className="flex flex-col gap-2"><FieldLabel>Course format</FieldLabel><InputShell className="justify-between"><span className="text-sm text-[#0f1724]">Hybrid · Live + Recorded</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
          <div className="md:col-span-2">
            <FieldLabel>Short description</FieldLabel>
            <div className="mt-2 rounded-md border border-black/[0.08] bg-white px-[15px] py-3">
              <p className="text-sm leading-relaxed text-[#0f1724]">A structured STEM program for ages 10–14 covering robotics basics, hands-on science experiments, and guided problem-solving through weekly live sessions and recorded lessons.</p>
            </div>
            <p className="mt-2 text-xs text-[#6b7280]">Keep this under 220 characters for listing cards and landing pages.</p>
          </div>
          <div className="flex flex-col gap-2"><FieldLabel>Duration</FieldLabel><InputShell><span className="text-sm text-[#0f1724]">8 weeks · 24 lessons</span></InputShell></div>
          <div className="flex flex-col gap-2"><FieldLabel>Primary instructor</FieldLabel><InputShell className="justify-between"><span className="text-sm text-[#0f1724]">Aisha Verma</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
        </div>
      </section>

      <section className="rounded-lg border border-black/[0.08] bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#0f1724]">Cover and learning assets</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">Add the hero visual and starter resources before building the full course outline.</p>
          </div>
          <button type="button" className="inline-flex min-h-10 items-center rounded-md bg-[#e9f2ff] px-3.5 text-sm font-medium text-[#0f1724]">Asset Library</button>
        </div>
        <div className="mt-5 space-y-4">
          {[
            { icon: <ImageIcon className="h-[22px] w-[22px] text-[#5b3df6]" />, title: 'Course cover image', desc: 'Upload a wide visual for course cards and public listings. Recommended ratio: 16:9.', btn: 'Choose File' },
            { icon: <FileStack className="h-[22px] w-[22px] text-[#5b3df6]" />, title: 'Starter files and PDFs', desc: 'Upload lesson notes, worksheets, and welcome materials learners receive at enrollment.', btn: 'Upload Files' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-lg bg-[#f1f5f9] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#edebff]">{item.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-[#0f1724]">{item.title}</div>
                  <p className="mt-1 text-[13px] leading-relaxed text-[#6b7280]">{item.desc}</p>
                </div>
              </div>
              <button type="button" className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]">{item.btn}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-lg border border-black/[0.08] bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#0f1724]">Initial module outline</h3>
            <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">Create the first structure now. You can add videos, quizzes, and assignments in the next step.</p>
          </div>
          <button type="button" className="inline-flex min-h-10 items-center rounded-md bg-[#6c5ce7] px-3.5 text-sm font-medium text-white">Add Module</button>
        </div>
        <ul className="mt-5 space-y-3">
          {basicsModules.map((m) => (
            <li key={m.n} className="flex flex-col gap-3 rounded-md bg-[#f1f5f9] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white text-[13px] font-semibold text-[#0f1724]">{m.n}</div>
                <div><div className="text-sm font-medium text-[#0f1724]">{m.title}</div><div className="mt-1 text-xs text-[#6b7280]">{m.meta}</div></div>
              </div>
              <button type="button" className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]">Edit</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

// ────────────────────────────────────────────────
// PRICING STEP
// ────────────────────────────────────────────────
function PricingStep() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
      <div className="space-y-4">
        <section className="rounded-lg border border-black/[0.08] bg-white p-5">
          <div className="mb-4 flex items-start justify-between">
            <div><h3 className="text-[18px] font-semibold text-[#0f1724]">Pricing model</h3><p className="text-[12px] text-[#667085]">Select the payment structure learners will see on the enrollment page.</p></div>
            <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-medium text-white">Auto-saved</span>
          </div>
          <div className="space-y-2.5">
            <div className="rounded-md border border-black/[0.08] bg-[#f8fafc] p-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#6b46ff]" /><div><p className="text-[13px] font-semibold text-[#0f1724]">One-time payment</p><p className="text-[11px] text-[#667085]">Collect the full course fee during enrollment with optional coupon support.</p></div></div>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Recommended</span>
              </div>
            </div>
            <div className="rounded-md border border-black/[0.08] bg-white p-3"><p className="text-[13px] font-semibold text-[#0f1724]">Monthly installment plan</p><p className="text-[11px] text-[#667085]">Split the total into scheduled monthly payments with automated reminders.</p></div>
            <div className="rounded-md border border-black/[0.08] bg-white p-3"><p className="text-[13px] font-semibold text-[#0f1724]">Subscription access</p><p className="text-[11px] text-[#667085]">Charge recurring access while the learner stays enrolled.</p></div>
          </div>
        </section>

        <section className="rounded-lg border border-black/[0.08] bg-white p-5">
          <h3 className="text-[18px] font-semibold text-[#0f1724]">Course price</h3>
          <p className="text-[12px] text-[#667085]">Configure the core fee, billing currency, and tax behavior.</p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div><FieldLabel>Base price</FieldLabel><InputShell className="mt-2 justify-between"><span className="text-sm text-[#0f1724]">₹ 12,000</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
            <div><FieldLabel>Currency</FieldLabel><InputShell className="mt-2 justify-between"><span className="text-sm text-[#0f1724]">INR - Indian Rupee</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
            <div><FieldLabel>Enrollment fee</FieldLabel><InputShell className="mt-2"><span className="text-sm text-[#0f1724]">₹ 1,500</span><span className="ml-auto text-[11px] text-[#94a3b8]">Optional</span></InputShell></div>
            <div><FieldLabel>Tax handling</FieldLabel><InputShell className="mt-2 justify-between"><span className="text-sm text-[#0f1724]">Inclusive of GST</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
          </div>
          <div className="mt-4 rounded-md bg-[#f1f5f9] p-4">
            <p className="text-[11px] text-[#667085]">Displayed selling price</p>
            <p className="text-[34px] font-bold leading-none text-[#0f1724]">₹ 12,000</p>
            <p className="mt-1 text-[11px] text-[#667085]">Learners will see one clear price at checkout. Taxes are already included.</p>
          </div>
        </section>

        <section className="rounded-lg border border-black/[0.08] bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <div><h3 className="text-[18px] font-semibold text-[#0f1724]">Discounts and offers</h3><p className="text-[12px] text-[#667085]">Use time-bound promotions to support admissions campaigns.</p></div>
            <button className="rounded-md bg-[#e9f2ff] px-3 py-1.5 text-[12px] font-medium text-[#1f4f9c]">Create Coupon</button>
          </div>
          <div className="space-y-2">
            <div className="flex items-start justify-between rounded-md border border-black/[0.08] bg-[#f8fafc] p-3"><div><p className="text-[13px] font-semibold text-[#0f1724]">EARLY20 · Early admissions</p><p className="text-[11px] text-[#667085]">20% off until 30 Sep 2026 · Limited to first 50 enrollments</p></div><span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Active</span></div>
            <div className="flex items-start justify-between rounded-md border border-black/[0.08] bg-[#f8fafc] p-3"><div><p className="text-[13px] font-semibold text-[#0f1724]">Sibling scholarship</p><p className="text-[11px] text-[#667085]">Flat ₹ 1,000 reduction for second learner registrations from the same family.</p></div><span className="rounded-full bg-[#eef2ff] px-2 py-0.5 text-[10px] font-semibold text-[#4f46e5]">Rule saved</span></div>
          </div>
        </section>
      </div>

      <aside className="space-y-4">
        <div className="rounded-lg border border-black/[0.08] bg-white p-5">
          <h4 className="text-[18px] font-semibold text-[#0f1724]">Pricing summary</h4>
          <p className="text-[12px] text-[#667085]">A quick view of learner-facing billing setup.</p>
          <div className="mt-3 space-y-2 text-[12px]">
            <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3 py-2"><span>One-time payment</span><span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Selected</span></div>
            <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3 py-2"><span>Base price ₹ 12,000</span><span className="text-[#667085]">Inclusive tax</span></div>
            <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3 py-2"><span>2 offers configured</span><span className="text-[#667085]">1 active</span></div>
            <div className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3 py-2"><span>Publish step pending</span><span className="text-[#667085]">Next</span></div>
          </div>
          <div className="mt-4 space-y-2 border-t border-black/[0.08] pt-4 text-[12px]">
            <div className="flex justify-between"><span className="text-[#667085]">Expected net revenue</span><span className="font-medium">₹ 10,170</span></div>
            <div className="flex justify-between"><span className="text-[#667085]">Tax included</span><span className="font-medium">18% GST</span></div>
            <div className="flex justify-between"><span className="text-[#667085]">Coupons available</span><span className="font-medium">2 rules</span></div>
          </div>
        </div>

        <div className="rounded-lg border border-black/[0.08] bg-white p-5">
          <h4 className="text-[18px] font-semibold text-[#0f1724]">Checkout preview</h4>
          <p className="text-[12px] text-[#667085]">This is the billing breakdown learners will understand at a glance.</p>
          <div className="mt-3 rounded-md bg-[#f8fafc] p-3 text-[12px]">
            <p className="font-semibold text-[#0f1724]">Young Innovators STEM Bootcamp</p>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between"><span className="text-[#667085]">Course fee</span><span>₹ 12,000</span></div>
              <div className="flex justify-between"><span className="text-[#667085]">Enrollment fee</span><span>₹ 1,500</span></div>
              <div className="flex justify-between"><span className="text-[#667085]">Coupon applied</span><span className="text-emerald-700">- ₹ 2,400</span></div>
              <div className="flex justify-between"><span className="text-[#667085]">Tax included</span><span>GST included</span></div>
            </div>
            <div className="mt-2 border-t border-black/[0.08] pt-2 flex justify-between font-semibold"><span>Total payable today</span><span>₹ 11,100</span></div>
          </div>
          <button className="mt-3 w-full rounded-md bg-[#6b46ff] py-2 text-sm font-medium text-white">Preview student checkout</button>
        </div>

        <div className="rounded-lg border border-black/[0.08] bg-white p-5">
          <h4 className="text-[18px] font-semibold text-[#0f1724]">Publishing workflow</h4>
          <p className="text-[12px] text-[#667085]">The setup is ready to move from pricing into final review.</p>
          <ul className="mt-3 space-y-2.5 text-[12px]">
            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" /><span><strong>Basics completed</strong><br /><span className="text-[#667085]">Course details, category, and instructor are already locked.</span></span></li>
            <li className="flex gap-2"><CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" /><span><strong>Content completed</strong><br /><span className="text-[#667085]">Modules, resources, and lesson sequence are approved for enrollment.</span></span></li>
            <li className="flex gap-2"><AlertCircle className="h-4 w-4 text-[#6b46ff] mt-0.5" /><span><strong>Pricing in progress</strong><br /><span className="text-[#667085]">Final learner price, coupons, and tax settings are being reviewed.</span></span></li>
            <li className="flex gap-2"><span className="inline-block h-4 w-4 rounded-full border border-black/[0.15] mt-0.5" /><span><strong>Publish next</strong><br /><span className="text-[#667085]">Review enrollment details and launch readiness after this step.</span></span></li>
          </ul>
          <button className="mt-4 w-full rounded-md bg-[#6b46ff] py-2.5 text-sm font-medium text-white">Continue to Publish</button>
        </div>
      </aside>
    </div>
  )
}

// ────────────────────────────────────────────────
// PUBLISH STEP
// ────────────────────────────────────────────────
function PublishStep() {
  const [visibility, setVisibility] = useState('public')
  const [welcomeEmail, setWelcomeEmail] = useState(true)
  const [whatsapp, setWhatsapp] = useState(false)

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
      {/* Left */}
      <div className="space-y-4">
        {/* Course Visibility */}
        <section className="rounded-lg border border-black/[0.08] bg-white p-6">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h3 className="text-[18px] font-semibold text-[#0f1724]">Course Visibility</h3>
              <p className="mt-1 text-[13px] text-[#6b7280]">Control who can discover and enroll in this course.</p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-xl bg-emerald-500 px-2.5 py-1 text-[11px] font-medium text-white">Auto-saved</span>
          </div>
          <div className="space-y-2.5">
            {[
              { id: 'public', title: 'Public (Marketplace)', desc: 'Course will be visible in the student portal and open for enrollment to anyone.', recommended: true },
              { id: 'unlisted', title: 'Unlisted', desc: 'Not visible in the portal. Students can only enroll if they have the direct link.' },
              { id: 'private', title: 'Private', desc: 'Closed for self-enrollment. You must manually add or invite students.' },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setVisibility(opt.id)}
                className={`flex items-start justify-between p-4 rounded-lg border cursor-pointer transition-colors ${visibility === opt.id ? 'border-[#5b3df6] bg-[#faf8ff]' : 'border-black/[0.08] bg-white hover:bg-gray-50'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${visibility === opt.id ? 'border-[#5b3df6]' : 'border-[#d1d5db]'}`}>
                    {visibility === opt.id && <div className="h-2 w-2 rounded-full bg-[#5b3df6]" />}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-[#0f1724]">{opt.title}</p>
                    <p className="text-[12px] text-[#6b7280] mt-0.5">{opt.desc}</p>
                  </div>
                </div>
                {opt.recommended && (
                  <span className="shrink-0 ml-3 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-700">Recommended</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Enrollment & Capacity */}
        <section className="rounded-lg border border-black/[0.08] bg-white p-6">
          <h3 className="text-[18px] font-semibold text-[#0f1724] mb-1">Enrollment & Capacity</h3>
          <p className="text-[13px] text-[#6b7280] mb-5">Set limits on when students can join and how many seats are available.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <FieldLabel>Enrollment Start</FieldLabel>
              <InputShell className="justify-between"><span className="text-sm text-[#0f1724]">Immediate</span><Calendar className="h-4 w-4 text-[#94a3b8]" /></InputShell>
            </div>
            <div className="flex flex-col gap-2">
              <FieldLabel>Enrollment End</FieldLabel>
              <InputShell className="justify-between"><span className="text-sm text-[#94a3b8]">No end date</span><Calendar className="h-4 w-4 text-[#94a3b8]" /></InputShell>
            </div>
            <div className="flex flex-col gap-2">
              <FieldLabel>Maximum Capacity</FieldLabel>
              <InputShell><span className="text-sm text-[#0f1724]">Unlimited</span></InputShell>
            </div>
            <div className="flex flex-col gap-2">
              <FieldLabel>Access Duration</FieldLabel>
              <InputShell className="justify-between"><span className="text-sm text-[#0f1724]">Lifetime</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell>
            </div>
          </div>
        </section>

        {/* Automated Communication */}
        <section className="rounded-lg border border-black/[0.08] bg-white p-6">
          <h3 className="text-[18px] font-semibold text-[#0f1724] mb-1">Automated Communication</h3>
          <p className="text-[13px] text-[#6b7280] mb-5">Set up immediate touches for new enrollments.</p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-black/[0.08] bg-[#f8fafc]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ede9ff] flex items-center justify-center"><Mail className="h-5 w-5 text-[#5b3df6]" /></div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0f1724]">Welcome Email</p>
                  <p className="text-[12px] text-[#6b7280]">Sent automatically when a student enrolls.</p>
                </div>
              </div>
              <Toggle enabled={welcomeEmail} onToggle={() => setWelcomeEmail(!welcomeEmail)} />
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-black/[0.08] bg-[#f8fafc]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] flex items-center justify-center"><MessageSquare className="h-5 w-5 text-emerald-600" /></div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0f1724]">WhatsApp Notification</p>
                  <p className="text-[12px] text-[#6b7280]">Send a quick welcome message via WhatsApp.</p>
                </div>
              </div>
              <Toggle enabled={whatsapp} onToggle={() => setWhatsapp(!whatsapp)} />
            </div>
          </div>
        </section>
      </div>

      {/* Right */}
      <aside className="space-y-4">
        {/* Pre-flight Checklist */}
        <div className="rounded-lg border border-black/[0.08] bg-white p-5">
          <h4 className="text-[18px] font-semibold text-[#0f1724] mb-1">Pre-flight Checklist</h4>
          <p className="text-[12px] text-[#6b7280] mb-4">All mandatory steps are completed.</p>
          <div className="space-y-3">
            {[
              { label: '1. Basics completed', sub: 'Young Innovators STEM Bootcamp', done: true },
              { label: '2. Content uploaded', sub: '4 Modules, 12 Lessons, 3 Assignments', done: true },
              { label: '3. Pricing locked', sub: '₹ 12,000 (one-time payment)', done: true },
              { label: '4. Ready to publish', sub: 'Review settings on this page to launch.', done: false, current: true },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.done ? 'bg-emerald-500' : item.current ? 'border-2 border-[#5b3df6]' : 'border-2 border-[#e2e8f0]'}`}>
                  {item.done ? <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} /> : item.current ? <div className="w-2.5 h-2.5 rounded-full border-2 border-[#5b3df6]" /> : null}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0f172a]">{item.label}</p>
                  <p className="text-[11px] text-[#6b7280]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 h-1.5 w-full bg-[#e9f2ff] rounded-full overflow-hidden">
            <div className="h-full bg-[#5b3df6] rounded-full" style={{ width: '85%' }} />
          </div>
        </div>

        {/* Launch Course */}
        <div className="rounded-lg border border-black/[0.08] bg-white p-5 text-center">
          <div className="w-14 h-14 rounded-xl bg-[#f1f5f9] flex items-center justify-center mx-auto mb-3">
            <Rocket className="h-7 w-7 text-[#5b3df6]" />
          </div>
          <h4 className="text-[18px] font-semibold text-[#0f1724] mb-1">Launch Course</h4>
          <p className="text-[12px] text-[#6b7280] mb-5">Everything is ready. Make your course available to learners.</p>
          <button className="w-full py-3 bg-[#5b3df6] text-white text-[14px] font-semibold rounded-lg hover:bg-[#4a2ed8] transition-colors mb-2">
            Publish Course Now
          </button>
          <button className="w-full py-3 border border-black/[0.08] text-[14px] font-medium text-[#0f1724] rounded-lg hover:bg-gray-50 transition-colors">
            Schedule for Later
          </button>
          <p className="text-[11px] text-[#94a3b8] mt-4 text-left leading-relaxed">
            Once published, the course page becomes live immediately. Registered students will be notified if you enable announcements.
          </p>
        </div>
      </aside>
    </div>
  )
}

// ────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────
export default function AdminCourseManagement() {
  const [activeStep, setActiveStep] = useState('basics')

  const stepOrder = ['basics', 'content', 'pricing', 'publish']
  const nextLabel = {
    basics: 'Continue to Content',
    content: 'Continue to Pricing',
    pricing: 'Continue to Publish',
    publish: 'Publish Now',
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 'basics':
        return (
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start">
            <BasicsStep />
            <aside className="w-full shrink-0 space-y-6 lg:w-[360px]">
              <div className="rounded-lg border border-black/[0.08] bg-white p-[21px]">
                <h3 className="text-base font-semibold text-[#0f1724]">Setup summary</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">A quick view of what is ready before the course goes to review.</p>
                <div className="mt-4 space-y-2.5">
                  {[['Basics completed','Ready',true],['3 starter modules added','In progress',false],['Pricing not set yet','Pending',false],['Publishing checklist','2/5 done',false]].map(([label, val, badge]) => (
                    <div key={label} className="flex items-center justify-between rounded-md bg-[#f1f5f9] px-3.5 py-3">
                      <span className="text-[13px] text-[#0f1724]">{label}</span>
                      {badge ? <span className="rounded-xl bg-emerald-500 px-2.5 py-1 text-xs font-medium text-white">{val}</span> : <span className="text-[13px] text-[#6b7280]">{val}</span>}
                    </div>
                  ))}
                </div>
                <div className="my-4 h-px bg-black/[0.08]" />
                <div className="space-y-3 text-sm">
                  {[['Estimated launch','Next Tuesday'],['Assigned owner','Rahul Mehta'],['Visibility','Private draft']].map(([k,v]) => (
                    <div key={k} className="flex justify-between"><span className="text-[#6b7280]">{k}</span><span className="text-[#0f1724]">{v}</span></div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-black/[0.08] bg-white p-[21px]">
                <h3 className="text-base font-semibold text-[#0f1724]">Pricing preview</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">Balanced admin layout with quick commercial decisions available from the side panel.</p>
                <div className="mt-4 space-y-4">
                  <div><FieldLabel>Base price</FieldLabel><InputShell className="mt-2"><span className="text-sm text-[#0f1724]">₹4,999</span></InputShell></div>
                  <div><FieldLabel>Enrollment cap</FieldLabel><InputShell className="mt-2"><span className="text-sm text-[#0f1724]">120 students</span></InputShell></div>
                  <div><FieldLabel>Discount eligibility</FieldLabel><InputShell className="mt-2 justify-between"><span className="text-sm text-[#0f1724]">Coupons allowed</span><ChevronDown className="h-4 w-4 text-[#94a3b8]" /></InputShell></div>
                </div>
                <button type="button" className="mt-4 flex w-full min-h-10 items-center justify-center rounded-md bg-[#e9f2ff] text-sm font-medium text-[#0f1724]">Open Pricing Step</button>
              </div>

              <div className="rounded-lg border border-black/[0.08] bg-white p-[21px]">
                <h3 className="text-base font-semibold text-[#0f1724]">Publishing workflow</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#6b7280]">Follow the same approval path used in the main dashboard.</p>
                <ul className="mt-4 space-y-3">
                  {[
                    { icon: <Check className="h-4 w-4 text-[#5b3df6]" strokeWidth={2.5} />, title: 'Draft', desc: 'Course basics and first modules are being created.' },
                    { icon: <ClipboardList className="h-4 w-4 text-[#5b3df6]" />, title: 'Review', desc: 'Academic team checks curriculum coverage and downloadable files.' },
                    { icon: <Rocket className="h-4 w-4 text-[#5b3df6]" />, title: 'Publish', desc: 'Make the course visible to learners after pricing and banner assets are approved.' },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#edebff]">{item.icon}</div>
                      <div><div className="text-sm font-medium text-[#0f1724]">{item.title}</div><p className="mt-1 text-xs leading-relaxed text-[#6b7280]">{item.desc}</p></div>
                    </li>
                  ))}
                </ul>
                <button type="button" className="mt-4 flex w-full min-h-10 items-center justify-center rounded-md bg-[#6c5ce7] text-sm font-medium text-white">Send for Review</button>
              </div>
            </aside>
          </div>
        )
      case 'content':
        return <div className="mt-8"><ContentStep /></div>
      case 'pricing':
        return <PricingStep />
      case 'publish':
        return <PublishStep />
      default:
        return null
    }
  }

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="p-8 pb-16">
        <section
          className="relative overflow-hidden rounded-lg border border-black/[0.08] p-6"
          style={{ background: 'linear-gradient(127.823deg, rgb(255, 255, 255) 0%, rgb(232, 245, 255) 100%)' }}
        >
          <div className="flex flex-col gap-4 pr-4 md:pr-72">
            <span className="inline-flex w-fit rounded-xl bg-[#ffd966] px-2.5 py-1.5 text-[11.915px] font-medium text-[#4b2e00]">Create</span>
            <h2 className="max-w-[650px] text-[27.801px] font-bold leading-[1.2] text-[#0f172a]">
              {activeStep === 'pricing' ? 'Set pricing, billing, and discount rules before publishing.'
               : activeStep === 'publish' ? 'Review settings and launch your course to learners.'
               : 'Create a new course with modules, pricing, and publishing settings.'}
            </h2>
            <p className="max-w-[650px] text-[13.9px] text-[#94a3b8]">
              {activeStep === 'pricing' ? 'Choose how learners pay for the course, define offers for admissions campaigns, and review the final revenue setup before the course goes live.'
               : activeStep === 'publish' ? 'Control course visibility, enrollment windows, and automated student communications before publishing.'
               : 'Set up the essentials first, then move through content, review, and publishing. The layout stays balanced and spacious so admins can complete setup without losing context.'}
            </p>
            <div className="inline-flex flex-wrap gap-2 rounded-xl bg-[#f1f5f9] p-1">
              {steps.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(s.id)}
                  className={`rounded-xl px-3.5 py-2 text-[13px] font-medium transition-colors ${activeStep === s.id ? 'border border-black/[0.08] bg-white text-[#0f1724]' : 'text-[#6b7280] hover:text-[#0f1724]'}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 md:absolute md:right-6 md:top-6 md:mt-0">
            <button type="button" className="inline-flex min-h-10 items-center justify-center rounded-md border border-black/[0.08] bg-white px-[15px] text-sm font-medium text-[#0f1724]">Save Draft</button>
            <button
              type="button"
              onClick={() => setActiveStep('pricing')}
              className="inline-flex h-10 items-center justify-center rounded-[6px] border border-[#d8cffc] bg-[#f3efff] px-4 text-[13px] font-semibold tracking-[0.01em] text-[#5b3df6] shadow-[0_1px_0_rgba(91,61,246,0.08)] hover:bg-[#ece5ff]"
            >
              Open Pricing
            </button>
            <button
              type="button"
              onClick={() => {
                const idx = stepOrder.indexOf(activeStep)
                if (idx < stepOrder.length - 1) setActiveStep(stepOrder[idx + 1])
              }}
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#6c5ce7] px-3.5 text-sm font-medium text-white"
            >
              {nextLabel[activeStep]}
            </button>
          </div>
        </section>

        {renderStepContent()}
      </div>
    </div>
  )
}
