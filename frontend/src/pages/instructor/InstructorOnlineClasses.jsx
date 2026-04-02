import React from 'react'
import { Search, Calendar, Upload, PlayCircle, Users, Video, Clock, FileText, Eye, CheckCircle } from 'lucide-react'

export default function InstructorOnlineClasses() {
  const items = [
    { 
      title: 'Live class • Chemical reactions and equations', 
      time: 'Today • 10:00 AM to 10:45 AM', 
      description: 'Meeting starts with quick warmup, clarity explanation, and a short concept check at the end of class.', 
      status: 'Starting soon', 
      statusType: 'warning',
      cta: 'Open class room' 
    },
    { 
      title: 'Practical demo • Separation techniques', 
      time: 'Tomorrow • 11:30 AM to 12:15 PM', 
      description: 'Teacher-led demonstration with filtration, evaporation, and magnetic separation using daily life examples.', 
      status: 'Virtual lab', 
      statusType: 'secondary',
      cta: 'View details' 
    },
    { 
      title: 'Revision room • Weekly recap and doubt solving', 
      time: 'Friday • 4:00 PM to 4:45 PM', 
      description: 'Focused revision session covering key diagrams, short-answer patterns, and common misconceptions before the weekly assessment.', 
      status: 'Scheduled', 
      statusType: 'default',
      cta: 'Share invite' 
    },
    { 
      title: 'Recorded lecture • Matter and its states', 
      time: 'Uploaded yesterday • 38 min replay', 
      description: 'Previous theory class recording with clear chapter markers, downloadable notes, and a short assignment reminder for absent learners.', 
      status: 'Recording live', 
      statusType: 'success',
      cta: 'Open recording' 
    },
  ]

  const statusStyles = {
    warning: 'bg-[#ffd966] text-[#4b2e00]',
    secondary: 'bg-[#e8f5ff] text-[#0f172a]',
    default: 'bg-[#f1f5f9] text-[#64748b]',
    success: 'bg-[#2dd4bf] text-[#023b33]'
  }

  return (
    <div className="min-h-full bg-[#F7FAFD]">
      <div className="bg-gradient-to-b flex flex-col from-[#f6f8fa] gap-[24px] h-full p-[28px] to-[#f7fcff]">
        {/* Hero Section */}
        <section className="border border-black/[0.08] border-solid content-stretch flex flex-col items-start pb-[23px] pt-[25px] px-[25px] relative rounded-[8px] shrink-0 w-full bg-gradient-to-br from-white to-[#e8f5ff]">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-[11px] items-start relative shrink-0">
              <div className="flex gap-2">
                <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#e8f5ff] text-[#0f172a]">Class 9 • Science</span>
                <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#ffd966] text-[#4b2e00]">Live now in 12 mins</span>
              </div>
              <div className="flex flex-col font-bold h-[31.59px] justify-center leading-[0] text-[#0f172a] text-[28px]">
                Integrated Science Foundation • Online classes
              </div>
              <div className="flex flex-col font-normal h-[17px] justify-center leading-[0] text-[#94a3b8] text-[14px]">
                Manage upcoming live sessions, revision rooms, and recorded lectures for the current science batch. Keep learners on schedule with class timings, session notes, and replay access.
              </div>
              <div className="flex gap-4 text-[13px] text-[#94a3b8]">
                <span className="inline-flex items-center gap-1">
                  <Users className="h-4 w-4 text-[#5b3df6]" />
                  124 students this batch
                </span>
                <span>4 classes this week</span>
                <span>28 recordings available</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 h-[40px] px-[16px] rounded-[6px] text-[14px] font-medium bg-[#5b3df6] text-white hover:bg-[#4c2dd9] transition-colors cursor-pointer">
                <Video className="h-[18px] w-[18px]" />
                Start class
              </button>
              <button className="inline-flex items-center gap-2 h-[40px] px-[17px] rounded-[6px] text-[14px] font-medium bg-white text-[#0f172a] border border-black/[0.08] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                <Upload className="h-[18px] w-[18px]" />
                Upload recording
              </button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))]">
          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
            <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Class overview</h3>
            <p className="text-[13px] text-[#94a3b8] mt-[4px] mb-[16px]">Monitor live session quality, attendance, and recording coverage.</p>
            <div className="grid grid-cols-3 gap-[16px]">
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Live attendance</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">89%</div>
              </div>
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Replay rate</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">63%</div>
              </div>
              <div className="bg-[#f8fafc] rounded-[6px] p-[14px]">
                <div className="text-[13px] font-medium text-[#94a3b8]">Classes completed</div>
                <div className="text-[30px] font-bold text-[#0f172a] mt-[6px]">18</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-black/[0.08] rounded-[8px] p-[21px]">
            <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Teaching progress</h3>
            <p className="text-[13px] text-[#94a3b8] mt-[4px] mb-[16px]">Live delivery completed this month.</p>
            <div className="text-[30px] font-bold text-[#0f172a] mb-[8px]">72%</div>
            <div className="h-2 rounded-full bg-[#edf2ff] mb-[16px]">
              <div className="h-2 w-[72%] rounded-full bg-[#5b3df6]" />
            </div>
            <div className="flex gap-2">
              <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#f1f5f9] text-[#0f172a]">18 classes done</span>
              <span className="inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium bg-[#2dd4bf] text-[#023b33]">7 pending</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[1.7fr_1fr]">
          {/* Upcoming and recent sessions */}
          <div className="bg-white border border-black/[0.08] rounded-[8px] flex flex-col">
            <div className="px-[21px] pt-[21px] pb-[16px] flex justify-between items-start gap-4">
              <div>
                <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Upcoming and recent sessions</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Live lectures, revision classes, and practical demos for this week.</p>
              </div>
              <button className="inline-flex items-center gap-1.5 h-[36px] px-[12px] rounded-[6px] text-[13px] font-medium bg-white text-[#0f172a] border border-black/[0.08] hover:bg-[#f1f5f9] transition-colors cursor-pointer">
                All sessions
              </button>
            </div>
            <div className="flex flex-col gap-[12px] px-[21px] pb-[21px]">
              {items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-[16px] border border-black/[0.08] rounded-[6px]">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <PlayCircle className="h-5 w-5 text-[#5b3df6] mt-0.5 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[14px] font-semibold text-[#0f172a] leading-snug">{item.title}</div>
                      <div className="text-[12px] text-[#94a3b8] mt-[4px]">{item.time}</div>
                      <div className="text-[12px] text-[#94a3b8] mt-[4px] line-clamp-1">{item.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                    <span className={`inline-flex h-[28px] items-center px-[10px] rounded-[12px] text-[12px] font-medium ${statusStyles[item.statusType]}`}>
                      {item.status}
                    </span>
                    <button className="inline-flex items-center h-[36px] px-[12px] rounded-[6px] text-[13px] font-medium bg-white text-[#0f172a] border border-black/[0.08] hover:bg-[#f1f5f9] transition-colors cursor-pointer whitespace-nowrap">
                      {item.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[24px]">
            {/* Today's queue */}
            <div className="bg-white border border-black/[0.08] rounded-[8px] flex flex-col">
              <div className="px-[21px] pt-[21px] pb-[16px]">
                <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Today's queue</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Tasks lined up for today's live sessions.</p>
              </div>
              <div className="flex flex-col gap-[12px] px-[21px] pb-[21px]">
                {['Share reaction worksheet', 'Check audio and camera', 'Post join reminder'].map((task, i) => (
                  <div key={i} className="p-[16px] border border-black/[0.08] rounded-[6px]">
                    <div className="text-[14px] font-semibold text-[#0f172a]">{task}</div>
                    <div className="text-[12px] text-[#94a3b8] mt-[4px]">Pending action</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent recordings */}
            <div className="bg-white border border-black/[0.08] rounded-[8px] flex flex-col">
              <div className="px-[21px] pt-[21px] pb-[16px]">
                <h3 className="text-[18px] font-bold text-[#0f172a] m-0">Recent recordings</h3>
                <p className="text-[13px] text-[#94a3b8] mt-[4px]">Most viewed class replays this week.</p>
              </div>
              <div className="flex flex-col gap-[12px] px-[21px] pb-[21px]">
                {['Matter and its states', 'Acids, bases, and salts', 'Revision room highlights'].map((recording, i) => (
                  <div key={i} className="p-[16px] border border-black/[0.08] rounded-[6px]">
                    <div className="text-[14px] font-semibold text-[#0f172a]">{recording}</div>
                    <div className="text-[12px] text-[#94a3b8] mt-[4px]">Top replay content</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
