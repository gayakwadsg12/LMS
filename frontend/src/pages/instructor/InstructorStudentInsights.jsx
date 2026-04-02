import React, { useState } from 'react'
import { Search, Calendar, Filter, AlertTriangle, X, ChevronDown, SlidersHorizontal, Users, BookOpen, CheckCircle, Clock, TrendingUp, FileText } from 'lucide-react'

export default function InstructorStudentInsights() {
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [selectedClasses, setSelectedClasses] = useState(['Class 9 A'])
  const [selectedSubject, setSelectedSubject] = useState('All subjects')
  const [attendanceMin, setAttendanceMin] = useState(0)
  const [attendanceMax, setAttendanceMax] = useState(100)
  const [completionMin, setCompletionMin] = useState(80)
  const [completionMax, setCompletionMax] = useState(100)
  const [selectedStatuses, setSelectedStatuses] = useState([])

  const statusOptions = ['On track', 'Top performer', 'Follow-up', 'Improving']
  const classOptions = ['Class 9 A', 'Class 9 B', 'Class 10 A', 'Class 10 B']
  const subjectOptions = ['All subjects', 'Science', 'Math', 'English', 'History']

  const students = [
    { name: 'Anaya Mehta', class: 'Class 9 A • Science', attendance: 'Attendance 98%', assignments: 'Assignments 12/12 submitted', engagement: 'Engagement High participation', tag: 'Top performer', tagColor: 'bg-[#2dd4bf] text-[#023b33]', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
    { name: 'Ryan Cole', class: 'Class 9 C • Science', attendance: 'Attendance 79%', assignments: 'Assignments 10/12 submitted', engagement: 'Engagement Stable this week', tag: 'On track', tagColor: 'bg-[#e8f5ff] text-[#0f172a]', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
    { name: 'Mina Park', class: 'Class 10 A • Math', attendance: 'Attendance 84%', assignments: 'Assignments 8/12 submitted', engagement: 'Engagement Needs check-in', tag: 'Follow-up', tagColor: 'bg-[#ffd966] text-[#4b2e00]', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80' },
    { name: 'Noah Mensah', class: 'Class 10 B • English', attendance: 'Attendance 88%', assignments: 'Assignments 11/12 submitted', engagement: 'Engagement Improving trend', tag: 'Improving', tagColor: 'bg-[#e8f5ff] text-[#0f172a]', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80' },
  ]

  const handleClassToggle = (className) => {
    if (selectedClasses.includes(className)) {
      setSelectedClasses(selectedClasses.filter(c => c !== className))
    } else {
      setSelectedClasses([...selectedClasses, className])
    }
  }

  const handleStatusToggle = (status) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter(s => s !== status))
    } else {
      setSelectedStatuses([...selectedStatuses, status])
    }
  }

  const handleClearAll = () => {
    setSelectedClasses([])
    setSelectedSubject('All subjects')
    setAttendanceMin(0)
    setAttendanceMax(100)
    setCompletionMin(80)
    setCompletionMax(100)
    setSelectedStatuses([])
  }

  const handleApplyFilters = () => {
    console.log('Applied filters:', {
      classes: selectedClasses,
      subject: selectedSubject,
      attendance: { min: attendanceMin, max: attendanceMax },
      completion: { min: completionMin, max: completionMax },
      statuses: selectedStatuses
    })
    setShowFilterModal(false)
  }

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-[11px] items-start relative shrink-0">
              <div className="flex gap-2">
                <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#e8f5ff] text-[#0f172a]">Class 9 to 10</span>
                <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#2dd4bf] text-[#023b33]">128 active students</span>
              </div>
              <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
                Student performance and engagement overview
              </div>
              <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
                Track attendance consistency, assignment completion, and class engagement to identify learners who need support and students who are leading this term.
              </div>
              <div className="flex gap-4 text-[13px] text-[#94a3b8]">
                <span className="inline-flex items-center gap-1">
                  <Users className="h-4 w-4 text-[#5b3df6]" />
                  92% average attendance across all tracked classes
                </span>
                <span>87% assignment completion rate this month</span>
                <span>16 students flagged for additional follow-up</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowFilterModal(true)}
                className="inline-flex items-center gap-2 h-[40px] px-[16px] rounded-[6px] text-[14px] font-medium bg-[#5b3df6] text-white hover:bg-[#4c2dd9] transition-colors cursor-pointer"
              >
                <Filter className="h-[18px] w-[18px]" />
                Filter insights
              </button>
              <button className="inline-flex items-center gap-2 h-[40px] px-[17px] rounded-[6px] text-[14px] font-medium bg-white text-[#0f172a] border border-black/[0.08] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                <FileText className="h-[18px] w-[18px]" />
                View reports
              </button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))]">
          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
            <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Student overview</h3>
            <p className="text-[13px] text-[#94a3b8] mt-[4px] mb-[16px]">Monitor engagement, attendance, and academic consistency across your current groups.</p>
            <div className="grid grid-cols-4 gap-[16px]">
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Students tracked</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">94</div>
              </div>
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Needs support</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">16</div>
              </div>
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Top performers</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">12</div>
              </div>
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Missing submissions</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">21</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
            <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Class health</h3>
            <p className="text-[13px] text-[#94a3b8] mt-[4px] mb-[16px]">Current overall readiness and learning momentum.</p>
            <div className="text-[30px] font-bold text-[#0f172a] mb-[8px]">84%</div>
            <div className="text-[12px] text-[#94a3b8] mb-[12px]">Most student groups show steady attendance and assignment consistency.</div>
            <div className="h-2 rounded-full bg-[#edf2ff] mb-[16px]">
              <div className="h-2 w-[84%] rounded-full bg-[#5b3df6]" />
            </div>
            <div className="flex gap-2">
              <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#f1f5f9] text-[#0f172a]">92% attendance</span>
              <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#2dd4bf] text-[#023b33]">87% completion</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[1.7fr_1fr]">
          {/* Student highlights */}
          <div className="bg-white border border-black/[0.08] rounded-[8px] flex flex-col">
            <div className="px-[21px] pt-[21px] pb-[16px] flex justify-between items-start gap-4">
              <div>
                <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Student highlights</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Quick scan of learners by attendance, assignment completion, and engagement.</p>
              </div>
              <button className="inline-flex items-center gap-1.5 h-[36px] px-[12px] rounded-[6px] text-[13px] font-medium bg-white text-[#0f172a] border border-black/[0.08] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                All students
              </button>
            </div>
            <div className="flex flex-col gap-[12px] px-[21px] pb-[21px]">
              {students.map((student, i) => (
                <div key={i} className="p-[16px] border border-black/[0.08] rounded-[6px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <img src={student.avatar} alt="" className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="text-[14px] font-semibold text-[#0f172a] leading-snug">{student.name}</div>
                        <div className="text-[11px] text-[#94a3b8] mt-[2px]">{student.class}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-[11px] text-[#64748b] mx-4">
                      <div>{student.attendance}</div>
                      <div>{student.assignments}</div>
                      <div>{student.engagement}</div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${student.tagColor}`}>
                        {student.tag}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[24px]">
            {/* Priority actions */}
            <div className="bg-white border border-black/[0.08] rounded-[8px] flex flex-col">
              <div className="px-[21px] pt-[21px] pb-[16px]">
                <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Priority actions</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Recommended follow-ups based on recent student activity.</p>
              </div>
              <div className="flex flex-col gap-[12px] px-[21px] pb-[21px]">
                {['Reach out to low-attendance students', 'Review pending assignment backlog', 'Recognize high performers'].map((action, i) => (
                  <div key={i} className="p-[16px] border border-black/[0.08] rounded-[6px]">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-[#ffd966] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[14px] font-semibold text-[#0f172a]">{action}</div>
                        <div className="text-[12px] text-[#94a3b8] mt-[4px]">Action required</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent signals */}
            <div className="bg-white border border-black/[0.08] rounded-[8px] flex flex-col">
              <div className="px-[21px] pt-[21px] pb-[16px]">
                <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Recent signals</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Key patterns spotted from the latest student data.</p>
              </div>
              <div className="flex flex-col gap-[12px] px-[21px] pb-[21px]">
                {['Quiz performance improved', 'Peer participation is stronger', 'Late submissions are decreasing'].map((signal, i) => (
                  <div key={i} className="p-[16px] border border-black/[0.08] rounded-[6px]">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-[#2dd4bf] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-[14px] font-semibold text-[#0f172a]">{signal}</div>
                        <div className="text-[12px] text-[#94a3b8] mt-[4px]">Trend snapshot</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w-[480px] max-h-[90vh] overflow-y-auto bg-white rounded-[8px] shadow-xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-black/[0.08] sticky top-0 bg-white">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-[#5b3df6]" />
                <h2 className="text-[20px] font-bold text-[#0f172a]">Filter insights</h2>
              </div>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 space-y-5">
              {/* Class Section */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-3">Class</h3>
                <div className="space-y-2">
                  {classOptions.map(className => (
                    <label key={className} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedClasses.includes(className)}
                        onChange={() => handleClassToggle(className)}
                        className="w-4 h-4 rounded border-black/[0.2] text-[#5b3df6] focus:ring-[#5b3df6]"
                      />
                      <span className="text-[13px] text-[#334155]">{className}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Subject Section */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-3">Subject</h3>
                <div className="relative">
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full appearance-none rounded-[6px] border border-black/[0.08] bg-white px-3 py-2.5 text-[13px] text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#5b3df6] cursor-pointer"
                  >
                    {subjectOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8] pointer-events-none" />
                </div>
              </div>

              {/* Attendance Rate Section */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-3">Attendance rate</h3>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-[11px] text-[#94a3b8] block mb-1">Min</label>
                    <input
                      type="number"
                      value={attendanceMin}
                      onChange={(e) => setAttendanceMin(Number(e.target.value))}
                      className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                      min="0"
                      max="100"
                    />
                  </div>
                  <span className="text-[13px] text-[#94a3b8]">-</span>
                  <div className="flex-1">
                    <label className="text-[11px] text-[#94a3b8] block mb-1">Max</label>
                    <input
                      type="number"
                      value={attendanceMax}
                      onChange={(e) => setAttendanceMax(Number(e.target.value))}
                      className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={attendanceMax}
                    onChange={(e) => setAttendanceMax(Number(e.target.value))}
                    className="w-full h-2 bg-[#e2e8f0] rounded-lg appearance-none cursor-pointer accent-[#5b3df6]"
                  />
                </div>
              </div>

              {/* Assignment Completion Section */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-3">Assignment completion</h3>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-[11px] text-[#94a3b8] block mb-1">Min</label>
                    <input
                      type="number"
                      value={completionMin}
                      onChange={(e) => setCompletionMin(Number(e.target.value))}
                      className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                      min="0"
                      max="100"
                    />
                  </div>
                  <span className="text-[13px] text-[#94a3b8]">-</span>
                  <div className="flex-1">
                    <label className="text-[11px] text-[#94a3b8] block mb-1">Max</label>
                    <input
                      type="number"
                      value={completionMax}
                      onChange={(e) => setCompletionMax(Number(e.target.value))}
                      className="w-full rounded-[6px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </div>

              {/* Student Status Section */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#0f172a] mb-3">Student status</h3>
                <div className="flex flex-wrap gap-2">
                  {statusOptions.map(status => (
                    <button
                      key={status}
                      onClick={() => handleStatusToggle(status)}
                      className={`px-3 py-1.5 rounded-[20px] text-[12px] font-medium transition-all ${
                        selectedStatuses.includes(status)
                          ? 'bg-[#5b3df6] text-white'
                          : 'bg-[#f1f5f9] text-[#334155] hover:bg-[#e8f5ff]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-5 border-t border-black/[0.08] sticky bottom-0 bg-white">
              <button
                onClick={handleClearAll}
                className="flex-1 h-10 border border-black/[0.08] rounded-[6px] text-[13px] font-medium text-[#64748b] hover:bg-gray-50 transition-colors"
              >
                Clear all
              </button>
              <button
                onClick={handleApplyFilters}
                className="flex-1 h-10 bg-[#5b3df6] rounded-[6px] text-[13px] font-medium text-white hover:bg-[#4a2ed8] transition-colors"
              >
                Apply filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
