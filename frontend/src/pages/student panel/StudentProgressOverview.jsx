import React from 'react'
import { Search, Bell, CalendarDays, BookOpen, FileText, CheckCircle2, Flame, Trophy, MessageSquare, LayoutDashboard, Clock, ChevronRight, Users, GraduationCap, Wallet, BarChart3, Upload, Plus } from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

const weekData = [
  { day: 'Mon', time: '1h 10m', height: 30 },
  { day: 'Tue', time: '2h 05m', height: 62 },
  { day: 'Wed', time: '1h 28m', height: 42 },
  { day: 'Thu', time: '2h 24m', height: 75 },
  { day: 'Fri', time: '1h 42m', height: 48 },
  { day: 'Sat', time: '2h 50m', height: 85 },
  { day: 'Sun', time: '1h 16m', height: 28 },
]

function Pill({ children, variant }) {
  const style =
    variant === 'success'
      ? 'bg-[#2dd4bf] text-[#023b33]'
      : variant === 'warning'
        ? 'bg-[#ffd966] text-[#4b2e00]'
        : variant === 'primary'
          ? 'bg-[#5b3df6] text-white'
          : variant === 'secondary'
            ? 'bg-[#e8f5ff] text-[#0f172a]'
            : 'bg-[#f1f5f9] text-[#0f172a]'

  return <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${style}`}>{children}</span>
}

export default function StudentProgressOverview() {
  return (
    <div className="min-h-full bg-[#F7FAFD]">
      {/* Header */}
      <header className="flex h-[76px] items-center justify-between border-b border-black/[0.08] bg-white px-[28px]">
        <div className="relative shrink-0">
          <div className="flex flex-col font-medium h-[16px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
            Student panel
          </div>
          <div className="flex flex-col font-bold h-[29px] justify-center leading-[0] text-[#0f172a] text-[24px]">
            Progress Overview
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="bg-white border border-black/[0.08] flex items-center gap-[10px] h-[40px] min-w-[280px] px-[15px] py-[0.25px] relative rounded-[6px]">
            <Search className="h-[18px] w-[18px] text-[#94a3b8]" />
            <input
              className="min-w-0 flex-1 bg-transparent text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none"
              placeholder="Search reports, lessons..."
            />
          </div>
          <button className="bg-white border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0">
            <Bell className="h-[18px] w-[18px] text-[#0f172a]" />
            <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
              Notifications
            </div>
          </button>
          <div className="bg-white border border-black/[0.08] flex items-center gap-[12px] px-[11px] py-[9px] rounded-[6px]">
            <img src={AVATAR} alt="" className="h-[36px] w-[36px] rounded-[6px] object-cover" />
            <div className="flex flex-col gap-[0.01px] items-start">
              <div className="flex flex-col font-semibold h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                Aarohi Shah
              </div>
              <div className="flex flex-col font-normal h-[15px] justify-center leading-[0] text-[#94a3b8] text-[13px]">
                Learner
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Main Content Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[1fr_320px]">
          {/* Left main column */}
          <div className="flex flex-col gap-[24px]">
            {/* Hero card */}
            <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
              <div className="flex items-start justify-between w-full">
                <div className="flex-1 pr-6">
                  <div className="bg-[#ffd966] inline-flex items-center px-[10px] py-[6.5px] rounded-[12px] mb-[16px]">
                    <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#4b2e00] text-[12px]">
                      Weekly report updated
                    </div>
                  </div>
                  <h1 className="text-[28px] font-bold text-[#0f172a] mb-[12px]">Track your learning momentum across courses</h1>
                  <p className="text-[14px] text-[#94a3b8]">
                    See how your lesson completion, study time, and skill development are trending this week so you can stay on pace for certificates, assignments, and upcoming reviews.
                  </p>
                </div>
                <div className="flex shrink-0 gap-[12px]">
                  <button className="border border-black/[0.08] flex items-center gap-[8px] h-[40px] justify-center px-[17px] py-[0.25px] rounded-[6px] shrink-0 bg-white">
                    <CalendarDays className="h-[18px] w-[18px] text-[#0f172a]" />
                    <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">
                      This week
                    </div>
                  </button>
                  <button className="bg-[#5b3df6] flex items-center gap-[8px] h-[40px] justify-center px-[16px] rounded-[6px] shrink-0">
                    <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-white text-[14px]">
                      ↑ Export report
                    </div>
                  </button>
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-4 grid grid-cols-4 gap-[16px] w-full">
                {[
                  { label: 'Course completion', value: '74%', sub: '+6% from last week', icon: '↑', color: '#5b3df6' },
                  { label: 'Study hours', value: '22h 10m', sub: '5 sessions completed', icon: '⏱', color: '#5b3df6' },
                  { label: 'Assignments passed', value: '9 / 11', sub: '2 graded this week', icon: '✓', color: '#5b3df6' },
                  { label: 'Current streak', value: '12 days', sub: 'Best streak this month', icon: '🔥', color: '#5b3df6' },
                ].map(({ label, value, sub, icon, color }) => (
                  <div key={label} className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[8px] items-start p-[14px] rounded-[8px]">
                    <div className="flex flex-col font-medium h-[15px] justify-center leading-[0] text-[#94a3b8] text-[11px]">
                      {label}
                    </div>
                    <div className="flex flex-col font-bold h-[30px] justify-center leading-[0] text-[#0f172a] text-[26px] tracking-[-0.6px]">
                      {value}
                    </div>
                    <div className="bg-[#f1f5f9] h-[24px] rounded-[10px] relative flex items-center px-[8px]">
                      <div className="flex flex-col font-medium h-[13px] justify-center leading-[0] text-[#5b3df6] text-[10px]">
                        {icon} {sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Weekly activity */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h2 className="font-bold text-[18px] text-[#0f172a]">Weekly activity</h2>
                  <p className="text-[13px] text-[#94a3b8] mt-[4px]">Your total focus time and lesson completions across the last seven days.</p>
                </div>
                <Pill variant="secondary">16 lessons completed</Pill>
              </div>
              <div className="w-full flex items-end justify-between gap-[12px] mt-[8px]">
                {weekData.map(({ day, time, height }) => (
                  <div key={day} className="flex-1 flex flex-col items-center gap-[4px]">
                    <div className="w-full rounded-t-[6px]" style={{
                      height: `${height * 1.4}px`,
                      background: height > 50
                        ? 'linear-gradient(to bottom, #ffd966, #5b3df6)'
                        : 'linear-gradient(to bottom, #c4b5fd, #e0e7ff)',
                      minHeight: '20px'
                    }} />
                    <p className="text-[12px] font-semibold text-[#0f172a]">{day}</p>
                    <p className="text-[10px] text-[#94a3b8]">{time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course progress + Skills growth */}
            <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-2">
              {/* Course progress */}
              <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
                <div className="flex items-center justify-between w-full">
                  <h2 className="font-bold text-[18px] text-[#0f172a]">Course progress</h2>
                  <Pill variant="secondary">3 active courses</Pill>
                </div>
                <p className="text-[13px] text-[#94a3b8]">Your current pace across enrolled programs.</p>
                <div className="flex flex-col w-full gap-[16px]">
                  {[
                    { name: 'UI/UX Masterclass', done: 24, total: 36, pct: 67 },
                    { name: 'Frontend Develop...', done: 18, total: 30, pct: 60 },
                    { name: 'Product Thinking ...', done: 9, total: 15, pct: 60 },
                  ].map(({ name, done, total, pct }) => (
                    <div key={name} className="p-[12px] border border-black/[0.08] rounded-[6px] bg-[#f8fafc]">
                      <p className="font-semibold text-[14px] text-[#0f172a]">{name}</p>
                      <p className="text-[12px] text-[#94a3b8] mb-[8px]">{done} of {total} lessons completed</p>
                      <div className="h-[6px] w-full rounded-full bg-[#f1f5f9]">
                        <div className="h-[6px] rounded-full bg-[#5b3df6]" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills growth */}
              <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
                <h2 className="font-bold text-[18px] text-[#0f172a]">Skills growth</h2>
                <p className="text-[13px] text-[#94a3b8]">Areas improving from recent lessons and projects.</p>
                <div className="flex flex-col w-full gap-[16px]">
                  {[
                    { name: 'Design systems', pct: 82 },
                    { name: 'Accessibility audits', pct: 76 },
                    { name: 'Wireframing', pct: 88 },
                    { name: 'Prototype handoff', pct: 69 },
                  ].map(({ name, pct }) => (
                    <div key={name}>
                      <div className="flex justify-between mb-[6px]">
                        <span className="text-[13px] font-medium text-[#0f172a]">{name}</span>
                        <span className="text-[13px] font-semibold text-[#5b3df6]">{pct}%</span>
                      </div>
                      <div className="h-[6px] w-full rounded-full bg-[#f1f5f9]">
                        <div className="h-[6px] rounded-full bg-[#5b3df6]" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent milestones */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <div>
                <h2 className="font-bold text-[18px] text-[#0f172a]">Recent milestones</h2>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Progress moments worth keeping visible as you continue learning.</p>
              </div>
              <div className="grid grid-cols-2 gap-[16px] w-full">
                {[
                  { icon: <Trophy className="h-[18px] w-[18px] text-[#5b3df6]" />, title: 'Module 2 completed', desc: 'You finished Typography Fundamentals and passed the assessment with 92%.' },
                  { icon: <Flame className="h-[18px] w-[18px] text-[#5b3df6]" />, title: '12-day streak', desc: 'You stayed consistent for nearly two weeks with at least one study session per day.' },
                  { icon: <LayoutDashboard className="h-[18px] w-[18px] text-[#5b3df6]" />, title: 'Portfolio project started', desc: 'Your mobile banking redesign brief is now active and ready for mentor review.' },
                  { icon: <MessageSquare className="h-[18px] w-[18px] text-[#5b3df6]" />, title: 'Mentor feedback received', desc: 'Marcus left comments on your component inventory and spacing decisions.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-[12px] p-[14px] border border-black/[0.08] rounded-[6px] bg-[#f8fafc]">
                    <div className="mt-[2px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[6px] bg-[#e8f5ff]">{icon}</div>
                    <div>
                      <p className="font-semibold text-[14px] text-[#0f172a]">{title}</p>
                      <p className="text-[12px] text-[#94a3b8] mt-[4px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="flex flex-col gap-[24px]">
            {/* Current target */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <h3 className="font-bold text-[18px] text-[#0f172a]">Current target</h3>
              <div className="w-full">
                <div className="flex items-center justify-between text-[13px] mb-[8px]">
                  <span className="font-medium text-[#0f172a]">Weekly goals</span>
                  <span className="font-bold text-[#5b3df6]">84%</span>
                </div>
                <div className="h-[8px] w-full rounded-full bg-[#f1f5f9]">
                  <div className="h-[8px] rounded-full bg-[#5b3df6]" style={{ width: '84%' }} />
                </div>
                <p className="mt-[12px] text-[13px] text-[#94a3b8]">You have completed 5 of 6 planned study sessions for this week.</p>
              </div>
            </div>

            {/* Focus areas */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <h3 className="font-bold text-[18px] text-[#0f172a]">Focus areas</h3>
              <div className="flex flex-col w-full gap-[16px]">
                {[
                  { icon: <BookOpen className="h-[16px] w-[16px] text-[#5b3df6]" />, title: 'Resume module 3.2', desc: 'Continue "Mapping reusable patterns" to keep momentum in UI/UX Masterclass.' },
                  { icon: <FileText className="h-[16px] w-[16px] text-[#5b3df6]" />, title: 'Submit handoff worksheet', desc: 'Upload your annotations file before the mentor review slot on Friday.' },
                  { icon: <BookOpen className="h-[16px] w-[16px] text-[#5b3df6]" />, title: 'Finish 2 reading tasks', desc: 'Complete the component states reading list from the e-library section.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-[12px]">
                    <div className="mt-[2px] flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[6px] bg-[#e8f5ff]">{icon}</div>
                    <div>
                      <p className="font-semibold text-[13px] text-[#0f172a]">{title}</p>
                      <p className="text-[12px] text-[#94a3b8] mt-[4px]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning streak */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <h3 className="font-bold text-[18px] text-[#0f172a]">Learning streak</h3>
              <div className="w-full rounded-[8px] bg-[#f5f3ff] p-[16px]">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#5b3df6]">Consistency score</p>
                <p className="mt-[4px] text-[30px] font-bold leading-none text-[#5b3df6]">12 days</p>
                <p className="mt-[8px] text-[11px] text-[#5b3df6]">You are ahead of your monthly average and one day away from your best streak.</p>
              </div>
            </div>

            {/* Upcoming deadlines */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <h3 className="font-bold text-[18px] text-[#0f172a]">Upcoming deadlines</h3>
              <div className="flex flex-col w-full gap-[12px]">
                {[
                  { title: 'Prototype review session', when: 'Tomorrow · 4:00 PM', badge: 'Soon', badgeColor: 'bg-[#ffd966] text-[#4b2e00]' },
                  { title: 'Accessibility checklist', when: 'Friday · 11:59 PM', badge: '2 days', badgeColor: 'bg-[#f1f5f9] text-[#64748b]' },
                ].map(({ title, when, badge, badgeColor }) => (
                  <div key={title} className="flex items-center justify-between p-[14px] border border-black/[0.08] rounded-[6px]">
                    <div>
                      <p className="font-semibold text-[14px] text-[#0f172a]">{title}</p>
                      <p className="text-[12px] text-[#94a3b8] mt-[4px]">{when}</p>
                    </div>
                    <span className={`inline-flex h-[24px] items-center px-[8px] rounded-[10px] text-[10px] font-medium ${badgeColor}`}>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Your mentor */}
            <div className="bg-white border border-black/[0.08] border-solid flex flex-col gap-[16px] items-start p-[21px] rounded-[8px]">
              <h3 className="font-bold text-[18px] text-[#0f172a]">Your mentor</h3>
              <div className="flex items-center gap-[12px] w-full p-[12px] border border-black/[0.08] rounded-[6px] bg-[#f8fafc]">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Marcus Chen" className="h-[40px] w-[40px] rounded-[6px] object-cover" />
                <div>
                  <p className="font-semibold text-[14px] text-[#0f172a]">Marcus Chen</p>
                  <p className="text-[12px] text-[#94a3b8]">Lead Product Designer · Weekly mentor sessions</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-[12px]">
                <button className="border border-black/[0.08] flex items-center justify-center gap-[8px] h-[40px] rounded-[6px] bg-white">
                  <CalendarDays className="h-[16px] w-[16px] text-[#5b3df6]" />
                  <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">View study plan</div>
                </button>
                <button className="border border-black/[0.08] flex items-center justify-center gap-[8px] h-[40px] rounded-[6px] bg-white">
                  <MessageSquare className="h-[16px] w-[16px] text-[#5b3df6]" />
                  <div className="flex flex-col font-medium h-[17px] justify-center leading-[0] text-[#0f172a] text-[14px]">Open mentor notes</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
