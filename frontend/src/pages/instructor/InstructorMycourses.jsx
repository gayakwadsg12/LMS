// // import React from 'react'
// // import { Search, Share2, Users, Calendar, ClipboardCheck, PlayCircle } from 'lucide-react'

// // const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

// // const modules = [
// //   ['Module 1 • Matter and its states', 'Recorded lessons, chapter notes, and recap exercises covering solids, liquids, gases, and particle behavior.', ['6 lessons', '2 resources'], 'Completed', 'View module'],
// //   ['Module 2 • Practical lab: Separation techniques', 'Hands-on virtual lab with practical sessions for filtration, evaporation, and magnetic separation with teacher demonstrations.', ['3 lab sessions', 'Live + recorded'], 'Live lab tomorrow', 'Join prep'],
// //   ['Module 3 • Live revision class', 'Teacher-led revision focused on diagrams, short answers, and doubt-solving before the weekly MCQ test.', ['Friday', '45 min'], 'Scheduled', 'View schedule'],
// //   ['Module 4 • Weekly MCQ assessment', 'A 25-question live MCQ test with automatic evaluation and same-day result visibility on the student dashboard.', ['25 questions', 'Auto evaluation'], 'Results by evening', 'View results'],
// // ]

// // export default function InstructorMycourses() {
// //   return (
// //     <div className="min-h-full bg-[#f6f8fa]">
// //       <div className="space-y-4 p-3">
// //         <section className="rounded-[8px] border border-black/[0.08] bg-[#eef6ff] p-5">
// //           <div className="flex items-start justify-between">
// //             <div>
// //               <div className="flex gap-2">
// //                 <span className="rounded-[12px] bg-[#ede7ff] px-2 py-1 text-[10px] font-semibold text-[#5b3df6]">Class 9 • Science</span>
// //                 <span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">Active course</span>
// //               </div>
// //               <h2 className="mt-3 text-[44px] font-bold leading-[1.05] text-[#111827]">Integrated Science Foundation</h2>
// //               <p className="mt-2 max-w-[860px] text-[13px] text-[#7f8ea6]">A blended course with online theory classes, practical lab sessions, weekly MCQ tests, and teacher-led revision support for the current academic term.</p>
// //               <div className="mt-3 flex flex-wrap gap-4 text-[12px] text-[#94a3b8]">
// //                 <span className="inline-flex items-center gap-1"><Users className="h-4 w-4 text-[#6b6bff]" />124 students enrolled</span>
// //                 <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-[#6b6bff]" />Mon, Wed, Fri • 10:00 AM</span>
// //                 <span className="inline-flex items-center gap-1"><ClipboardCheck className="h-4 w-4 text-[#6b6bff]" />Weekly tests every Saturday</span>
// //               </div>
// //             </div>
// //             <div className="flex gap-2">
// //               <button className="rounded-[7px] bg-[#5b3df6] px-4 py-2 text-[12px] font-semibold text-white">Join live class</button>
// //               <button className="rounded-[7px] border border-black/[0.08] bg-white px-4 py-2 text-[12px] font-semibold text-[#111827]">Open tests</button>
// //             </div>
// //           </div>
// //         </section>

// //         <div className="grid grid-cols-[1.7fr_1fr] gap-3">
// //           <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
// //             <h3 className="text-[28px] font-bold text-[#111827]">Course overview</h3>
// //             <p className="text-[12px] text-[#94a3b8]">Track progress, learner participation, and upcoming activities.</p>
// //             <div className="mt-3 grid grid-cols-3 gap-2">
// //               <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Completion</p><p className="text-[36px] font-bold">68%</p><p className="text-[10px] text-[#94a3b8]">8 of 12 modules finished</p></div>
// //               <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Attendance</p><p className="text-[36px] font-bold">91%</p><p className="text-[10px] text-[#94a3b8]">Average live class participation</p></div>
// //               <div className="rounded-[8px] border border-black/[0.08] bg-[#f8fafc] p-3"><p className="text-[10px] text-[#94a3b8]">Weekly test score</p><p className="text-[36px] font-bold">84%</p><p className="text-[10px] text-[#94a3b8]">Latest class average</p></div>
// //             </div>
// //           </section>
// //           <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
// //             <h3 className="text-[28px] font-bold text-[#111827]">Your progress</h3>
// //             <p className="text-[12px] text-[#94a3b8]">Current course completion and learning pace.</p>
// //             <p className="mt-2 text-[44px] font-bold leading-none text-[#111827]">68%</p>
// //             <p className="text-[11px] text-[#94a3b8]">You are on track for this month.</p>
// //             <div className="mt-3 h-2 rounded-full bg-[#edf2ff]"><div className="h-2 w-[68%] rounded-full bg-[#5b3df6]" /></div>
// //             <div className="mt-3 flex gap-2">
// //               <span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[10px] font-semibold">8 modules complete</span>
// //               <span className="rounded-[12px] bg-[#dff7ea] px-2 py-1 text-[10px] font-semibold text-[#1d9c64]">4 upcoming</span>
// //             </div>
// //           </section>
// //         </div>

// //         <div className="grid grid-cols-[1.7fr_1fr] gap-3">
// //           <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
// //             <div className="mb-3 flex items-start justify-between">
// //               <div>
// //                 <h3 className="text-[28px] font-bold text-[#111827]">Course modules</h3>
// //                 <p className="text-[12px] text-[#94a3b8]">Theory lessons, practical labs, revision classes, and test checkpoints.</p>
// //               </div>
// //               <button className="h-8 rounded-[7px] border border-black/[0.08] bg-[#f1f5f9] px-3 text-[11px] font-semibold">All modules</button>
// //             </div>
// //             <div className="space-y-2">
// //               {modules.map(([t, d, tags, state, cta]) => (
// //                 <div key={t} className="flex items-center justify-between rounded-[8px] border border-black/[0.06] p-3">
// //                   <div className="flex min-w-0 items-start gap-2">
// //                     <PlayCircle className="mt-0.5 h-4 w-4 text-[#5b3df6]" />
// //                     <div className="min-w-0">
// //                       <p className="truncate text-[12px] font-semibold">{t}</p>
// //                       <p className="truncate text-[10px] text-[#9aa9c0]">{d}</p>
// //                       <div className="mt-1 flex gap-1">
// //                         <span className="rounded-[12px] bg-[#f1f5f9] px-2 py-1 text-[9px]">{tags[0]}</span>
// //                         <span className="rounded-[12px] bg-[#edf2ff] px-2 py-1 text-[9px]">{tags[1]}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="ml-2 flex items-center gap-2">
// //                     <span className={`rounded-[12px] px-2 py-1 text-[10px] font-semibold ${state.includes('Completed') ? 'bg-[#dff7ea] text-[#1d9c64]' : state.includes('Live') ? 'bg-[#ffd966] text-[#4b2e00]' : state.includes('Scheduled') ? 'bg-[#f0f4f8] text-[#64748b]' : 'bg-[#ffeecf] text-[#7a5a00]'}`}>{state}</span>
// //                     <button className="rounded-[7px] border border-black/[0.08] bg-white px-3 py-1 text-[10px] font-semibold">{cta}</button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>
// //           <div className="space-y-3">
// //             <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
// //               <h3 className="text-[28px] font-bold text-[#111827]">Upcoming sessions</h3>
// //               <p className="text-[12px] text-[#94a3b8]">Next live classes and assessments.</p>
// //               <div className="mt-2 space-y-2">
// //                 {['Live class • Chemical reactions', 'Practical lab • Filtration demo', 'Weekly MCQ test'].map((i) => (
// //                   <div key={i} className="rounded-[8px] border border-black/[0.06] p-3">
// //                     <p className="text-[12px] font-semibold">{i}</p>
// //                     <p className="text-[10px] text-[#9aa9c0]">Today • 10:00 AM to 10:45 AM</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>
// //             <section className="rounded-[8px] border border-black/[0.08] bg-white p-4">
// //               <h3 className="text-[28px] font-bold text-[#111827]">Resources</h3>
// //               <p className="text-[12px] text-[#94a3b8]">Quick access to course materials.</p>
// //               <div className="mt-2 space-y-2">
// //                 {['Chapter notes pack', 'Recorded class library', 'Ask your teacher'].map((i) => (
// //                   <div key={i} className="rounded-[8px] border border-black/[0.06] p-3">
// //                     <p className="text-[12px] font-semibold">{i}</p>
// //                     <p className="text-[10px] text-[#9aa9c0]">Tap to open</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </section>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

















// import React, { useState } from 'react'
// import {
//   Search,
//   Upload,
//   Plus,
//   BookOpen,
//   Users,
//   Calendar,
//   Edit,
//   Trash2,
//   Eye,
//   Video,
//   FileText,
//   CheckCircle,
//   X,
//   ChevronDown,
//   ImageIcon,
//   FileStack,
//   Clock,
//   Star,
//   Save,
//   AlertCircle
// } from 'lucide-react'

// const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

// // Sample courses data - in real app, this would come from an API
// const sampleCourses = [
//   {
//     id: 1,
//     title: 'Integrated Science Foundation',
//     description: 'A blended course with online theory classes, practical lab sessions, weekly MCQ tests, and teacher-led revision support.',
//     category: 'Science',
//     level: 'Intermediate',
//     duration: '8 weeks',
//     lessons: 24,
//     students: 124,
//     rating: 4.8,
//     status: 'published',
//     createdAt: '2024-01-15',
//     thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80'
//   },
//   {
//     id: 2,
//     title: 'Coding for Kids Bootcamp',
//     description: 'Learn programming basics through fun projects and interactive coding exercises.',
//     category: 'Programming',
//     level: 'Beginner',
//     duration: '6 weeks',
//     lessons: 18,
//     students: 89,
//     rating: 4.9,
//     status: 'draft',
//     createdAt: '2024-02-01',
//     thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80'
//   },
//   {
//     id: 3,
//     title: 'Creative English Club',
//     description: 'Improve English speaking and writing skills through creative exercises and group discussions.',
//     category: 'Language',
//     level: 'Intermediate',
//     duration: '10 weeks',
//     lessons: 30,
//     students: 56,
//     rating: 4.7,
//     status: 'review',
//     createdAt: '2024-01-20',
//     thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80'
//   }
// ]

// function Pill({ children, variant }) {
//   const styles = {
//     published: 'bg-emerald-100 text-emerald-700',
//     draft: 'bg-gray-100 text-gray-600',
//     review: 'bg-amber-100 text-amber-700',
//     archived: 'bg-red-100 text-red-700'
//   }
//   return (
//     <span className={`inline-flex px-2.5 py-1 rounded-full text-[11px] font-medium ${styles[variant] || styles.draft}`}>
//       {children}
//     </span>
//   )
// }

// function StatCard({ label, value, icon: Icon, color }) {
//   return (
//     <div className="bg-white border border-black/[0.08] rounded-lg p-4">
//       <div className="flex items-center justify-between mb-2">
//         <span className="text-[12px] text-[#94a3b8]">{label}</span>
//         <div className={`p-2 rounded-lg bg-${color}-50`}>
//           <Icon className={`h-4 w-4 text-${color}-600`} />
//         </div>
//       </div>
//       <p className="text-[28px] font-bold text-[#0f172a]">{value}</p>
//     </div>
//   )
// }

// export default function InstructorCourseManagement() {
//   const [courses, setCourses] = useState(sampleCourses)
//   const [showCreateModal, setShowCreateModal] = useState(false)
//   const [showEditModal, setShowEditModal] = useState(false)
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [filterStatus, setFilterStatus] = useState('all')
//   const [selectedCourse, setSelectedCourse] = useState(null)
  
//   // Form state for creating/editing course
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     category: 'Science',
//     level: 'Beginner',
//     duration: '',
//     lessons: '',
//     thumbnail: ''
//   })

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleCreateCourse = () => {
//     const newCourse = {
//       id: Date.now(),
//       ...formData,
//       students: 0,
//       rating: 0,
//       status: 'draft',
//       createdAt: new Date().toISOString().split('T')[0],
//       lessons: parseInt(formData.lessons) || 0,
//       thumbnail: formData.thumbnail || 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80'
//     }
//     setCourses([newCourse, ...courses])
//     setShowCreateModal(false)
//     resetForm()
//   }

//   const handleEditCourse = () => {
//     setCourses(courses.map(course => 
//       course.id === selectedCourse.id 
//         ? { ...course, ...formData, lessons: parseInt(formData.lessons) || course.lessons }
//         : course
//     ))
//     setShowEditModal(false)
//     resetForm()
//   }

//   const handleDeleteCourse = (id) => {
//     setCourses(courses.filter(course => course.id !== id))
//     setShowDeleteConfirm(null)
//   }

//   const handleEditClick = (course) => {
//     setSelectedCourse(course)
//     setFormData({
//       title: course.title,
//       description: course.description,
//       category: course.category,
//       level: course.level,
//       duration: course.duration,
//       lessons: course.lessons.toString(),
//       thumbnail: course.thumbnail
//     })
//     setShowEditModal(true)
//   }

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       category: 'Science',
//       level: 'Beginner',
//       duration: '',
//       lessons: '',
//       thumbnail: ''
//     })
//     setSelectedCourse(null)
//   }

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesFilter = filterStatus === 'all' || course.status === filterStatus
//     return matchesSearch && matchesFilter
//   })

//   const stats = {
//     total: courses.length,
//     published: courses.filter(c => c.status === 'published').length,
//     draft: courses.filter(c => c.status === 'draft').length,
//     totalStudents: courses.reduce((sum, c) => sum + c.students, 0)
//   }

//   return (
//     <div className="min-h-full bg-[#f6f8fa]">
//       <div className="space-y-4 p-5">
//         {/* Hero Section */}
//         <section className="rounded-[12px] border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] p-6">
//           <div className="flex items-start justify-between">
//             <div>
//               <div className="inline-flex items-center gap-2 rounded-[12px] bg-[#ffd966] px-3 py-1.5 mb-4">
//                 <BookOpen className="h-4 w-4 text-[#4b2e00]" />
//                 <span className="text-[12px] font-medium text-[#4b2e00]">Instructor Workspace</span>
//               </div>
//               <h1 className="text-[36px] font-bold leading-tight text-[#0f172a]">My Courses</h1>
//               <p className="mt-2 max-w-[600px] text-[14px] text-[#94a3b8]">
//                 Create, manage, and publish your courses. Track student enrollment, performance, and course engagement all in one place.
//               </p>
//               <div className="mt-4 flex gap-3">
//                 <button
//                   onClick={() => setShowCreateModal(true)}
//                   className="inline-flex items-center gap-2 bg-[#5b3df6] px-4 py-2 rounded-[8px] text-[13px] font-semibold text-white hover:bg-[#4a2ed8] transition-colors"
//                 >
//                   <Plus className="h-4 w-4" />
//                   Create New Course
//                 </button>
//                 <button className="inline-flex items-center gap-2 border border-black/[0.08] bg-white px-4 py-2 rounded-[8px] text-[13px] font-semibold text-[#0f172a] hover:bg-gray-50">
//                   <Upload className="h-4 w-4" />
//                   Bulk Upload
//                 </button>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="bg-white border border-black/[0.08] flex items-center gap-2 px-3 py-2 rounded-[8px]">
//                 <div className="h-8 w-8 rounded-full bg-[#e8f5ff] flex items-center justify-center text-[12px] font-bold text-[#5b3df6]">M</div>
//                 <div>
//                   <p className="text-[12px] font-semibold text-[#0f172a]">Marcus Chen</p>
//                   <p className="text-[10px] text-[#94a3b8]">Instructor</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Stats Row */}
//         <div className="grid grid-cols-4 gap-3">
//           <StatCard label="Total Courses" value={stats.total} icon={BookOpen} color="purple" />
//           <StatCard label="Published" value={stats.published} icon={CheckCircle} color="emerald" />
//           <StatCard label="In Draft" value={stats.draft} icon={Edit} color="gray" />
//           <StatCard label="Total Students" value={stats.totalStudents} icon={Users} color="blue" />
//         </div>

//         {/* Search and Filter Bar */}
//         <div className="bg-white border border-black/[0.08] rounded-lg p-4">
//           <div className="flex flex-wrap items-center gap-3">
//             <div className="flex-1 min-w-[240px] relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
//               <input
//                 type="text"
//                 placeholder="Search courses by title or description..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-9 pr-3 py-2 border border-black/[0.08] rounded-[8px] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//               />
//             </div>
//             <div className="flex gap-2">
//               {['all', 'published', 'draft', 'review'].map(status => (
//                 <button
//                   key={status}
//                   onClick={() => setFilterStatus(status)}
//                   className={`px-3 py-1.5 rounded-[6px] text-[12px] font-medium transition-colors ${
//                     filterStatus === status
//                       ? 'bg-[#5b3df6] text-white'
//                       : 'bg-gray-100 text-[#64748b] hover:bg-gray-200'
//                   }`}
//                 >
//                   {status === 'all' ? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Course Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredCourses.map((course) => (
//             <div key={course.id} className="bg-white border border-black/[0.08] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
//               {/* Thumbnail */}
//               <div className="relative h-40 bg-gradient-to-br from-[#5b3df6]/20 to-[#2dd4bf]/20">
//                 <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
//                 <div className="absolute top-3 right-3">
//                   <Pill variant={course.status}>{course.status}</Pill>
//                 </div>
//               </div>
              
//               {/* Content */}
//               <div className="p-4">
//                 <div className="flex items-start justify-between mb-2">
//                   <h3 className="text-[16px] font-bold text-[#0f172a] line-clamp-1">{course.title}</h3>
//                   <div className="flex items-center gap-1">
//                     <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
//                     <span className="text-[11px] font-medium text-[#64748b]">{course.rating}</span>
//                   </div>
//                 </div>
//                 <p className="text-[12px] text-[#94a3b8] line-clamp-2 mb-3">{course.description}</p>
                
//                 <div className="flex flex-wrap gap-3 mb-3 text-[11px] text-[#94a3b8]">
//                   <span className="inline-flex items-center gap-1">
//                     <BookOpen className="h-3 w-3" />
//                     {course.lessons} lessons
//                   </span>
//                   <span className="inline-flex items-center gap-1">
//                     <Clock className="h-3 w-3" />
//                     {course.duration}
//                   </span>
//                   <span className="inline-flex items-center gap-1">
//                     <Users className="h-3 w-3" />
//                     {course.students} students
//                   </span>
//                 </div>
                
//                 <div className="flex items-center justify-between pt-3 border-t border-black/[0.08]">
//                   <span className="text-[10px] text-[#94a3b8]">Created: {course.createdAt}</span>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEditClick(course)}
//                       className="p-1.5 text-[#64748b] hover:text-[#5b3df6] hover:bg-[#ede7ff] rounded-md transition-colors"
//                       title="Edit Course"
//                     >
//                       <Edit className="h-4 w-4" />
//                     </button>
//                     <button
//                       onClick={() => setShowDeleteConfirm(course.id)}
//                       className="p-1.5 text-[#64748b] hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
//                       title="Delete Course"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </button>
//                     <button
//                       className="p-1.5 text-[#64748b] hover:text-[#5b3df6] hover:bg-[#ede7ff] rounded-md transition-colors"
//                       title="View Course"
//                     >
//                       <Eye className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredCourses.length === 0 && (
//           <div className="text-center py-12">
//             <BookOpen className="h-12 w-12 text-[#94a3b8] mx-auto mb-3" />
//             <p className="text-[14px] text-[#94a3b8]">No courses found</p>
//             <button
//               onClick={() => setShowCreateModal(true)}
//               className="mt-3 text-[13px] text-[#5b3df6] hover:text-[#4a2ed8] font-medium"
//             >
//               Create your first course
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Create Course Modal */}
//       {showCreateModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-[16px] shadow-xl">
//             <div className="flex items-center justify-between p-5 border-b border-black/[0.08]">
//               <h2 className="text-[20px] font-bold text-[#0f172a]">Create New Course</h2>
//               <button onClick={() => setShowCreateModal(false)} className="text-[#94a3b8] hover:text-[#0f172a]">
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             <div className="p-5 space-y-4">
//               <div>
//                 <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Course Title *</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   placeholder="e.g., Advanced JavaScript"
//                   className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                 />
//               </div>

//               <div>
//                 <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   rows="3"
//                   placeholder="Describe what students will learn..."
//                   className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6] resize-none"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Category</label>
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   >
//                     <option>Science</option>
//                     <option>Programming</option>
//                     <option>Language</option>
//                     <option>Mathematics</option>
//                     <option>Arts</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Level</label>
//                   <select
//                     name="level"
//                     value={formData.level}
//                     onChange={handleInputChange}
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   >
//                     <option>Beginner</option>
//                     <option>Intermediate</option>
//                     <option>Advanced</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Duration</label>
//                   <input
//                     type="text"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleInputChange}
//                     placeholder="e.g., 8 weeks"
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Total Lessons</label>
//                   <input
//                     type="number"
//                     name="lessons"
//                     value={formData.lessons}
//                     onChange={handleInputChange}
//                     placeholder="Number of lessons"
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Thumbnail URL</label>
//                 <input
//                   type="text"
//                   name="thumbnail"
//                   value={formData.thumbnail}
//                   onChange={handleInputChange}
//                   placeholder="https://..."
//                   className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                 />
//               </div>
//             </div>

//             <div className="flex gap-3 p-5 border-t border-black/[0.08]">
//               <button
//                 onClick={() => setShowCreateModal(false)}
//                 className="flex-1 h-10 border border-black/[0.08] rounded-[8px] text-[13px] font-medium text-[#64748b] hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleCreateCourse}
//                 className="flex-1 h-10 bg-[#5b3df6] rounded-[8px] text-[13px] font-medium text-white hover:bg-[#4a2ed8]"
//               >
//                 Create Course
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Course Modal */}
//       {showEditModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-[16px] shadow-xl">
//             <div className="flex items-center justify-between p-5 border-b border-black/[0.08]">
//               <h2 className="text-[20px] font-bold text-[#0f172a]">Edit Course</h2>
//               <button onClick={() => setShowEditModal(false)} className="text-[#94a3b8] hover:text-[#0f172a]">
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             <div className="p-5 space-y-4">
//               <div>
//                 <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Course Title *</label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleInputChange}
//                   className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                 />
//               </div>

//               <div>
//                 <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Description</label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   rows="3"
//                   className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6] resize-none"
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Category</label>
//                   <select
//                     name="category"
//                     value={formData.category}
//                     onChange={handleInputChange}
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   >
//                     <option>Science</option>
//                     <option>Programming</option>
//                     <option>Language</option>
//                     <option>Mathematics</option>
//                     <option>Arts</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Level</label>
//                   <select
//                     name="level"
//                     value={formData.level}
//                     onChange={handleInputChange}
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   >
//                     <option>Beginner</option>
//                     <option>Intermediate</option>
//                     <option>Advanced</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Duration</label>
//                   <input
//                     type="text"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleInputChange}
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-[13px] font-semibold text-[#0f172a] mb-1">Total Lessons</label>
//                   <input
//                     type="number"
//                     name="lessons"
//                     value={formData.lessons}
//                     onChange={handleInputChange}
//                     className="w-full rounded-[8px] border border-black/[0.08] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-3 p-5 border-t border-black/[0.08]">
//               <button
//                 onClick={() => setShowEditModal(false)}
//                 className="flex-1 h-10 border border-black/[0.08] rounded-[8px] text-[13px] font-medium text-[#64748b] hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleEditCourse}
//                 className="flex-1 h-10 bg-[#5b3df6] rounded-[8px] text-[13px] font-medium text-white hover:bg-[#4a2ed8]"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       {showDeleteConfirm && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//           <div className="w-[400px] bg-white rounded-[16px] shadow-xl">
//             <div className="p-5 text-center">
//               <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
//                 <AlertCircle className="h-6 w-6 text-red-500" />
//               </div>
//               <h3 className="text-[18px] font-bold text-[#0f172a] mb-2">Delete Course?</h3>
//               <p className="text-[13px] text-[#64748b] mb-4">
//                 This action cannot be undone. All course data will be permanently deleted.
//               </p>
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => setShowDeleteConfirm(null)}
//                   className="flex-1 h-10 border border-black/[0.08] rounded-[8px] text-[13px] font-medium text-[#64748b] hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => handleDeleteCourse(showDeleteConfirm)}
//                   className="flex-1 h-10 bg-red-500 rounded-[8px] text-[13px] font-medium text-white hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }












import React, { useState } from 'react'
import {
  Search,
  Upload,
  Plus,
  BookOpen,
  Users,
  Calendar,
  Edit,
  Trash2,
  Eye,
  Video,
  FileText,
  CheckCircle,
  Check,
  X,
  ChevronDown,
  ImageIcon,
  FileStack,
  Clock,
  Star,
  Save,
  AlertCircle,
  Mail,
  MessageSquare,
  Folder
} from 'lucide-react'

const AVATAR = 'https://www.figma.com/api/mcp/asset/5b24609b-97ad-4bea-af20-b4f4df404b75'

// Helper Components (copied from AdminCourseManagement.jsx for consistency)
function FieldLabel({ children }) {
  return <label className="text- font-medium text-[#0f1724]">{children}</label>
}

function InputShell({ children, className = '' }) {
  return (
    <div className={`flex min-h-11 items-center rounded-md border border-black/[0.08] bg-white px- py-2 ${className}`}>
      {children}
    </div>
  )
}

function Toggle({ enabled, onToggle }) {
  return (
    <button onClick={onToggle} className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled? 'bg-[#5b3df6]' : 'bg-[#e2e8f0]'}`}>
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${enabled? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  )
}

// Sample courses data - in real app, this would come from an API
const sampleCourses = [
  {
    id: 1,
    title: 'Integrated Science Foundation',
    description: 'A blended course with online theory classes, practical lab sessions, weekly MCQ tests, and teacher-led revision support.',
    category: 'Science',
    level: 'Intermediate',
    duration: '8 weeks',
    lessons: 24,
    students: 124,
    rating: 4.8,
    status: 'published',
    createdAt: '2024-01-15',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'Coding for Kids Bootcamp',
    description: 'Learn programming basics through fun projects and interactive coding exercises.',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 weeks',
    lessons: 18,
    students: 89,
    rating: 4.9,
    status: 'draft',
    createdAt: '2024-02-01',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Creative English Club',
    description: 'Improve English speaking and writing skills through creative exercises and group discussions.',
    category: 'Language',
    level: 'Intermediate',
    duration: '10 weeks',
    lessons: 30,
    students: 56,
    rating: 4.7,
    status: 'review',
    createdAt: '2024-01-20',
    thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80'
  }
]

function Pill({ children, variant }) {
  const styles = {
    published: 'bg-emerald-100 text-emerald-700',
    draft: 'bg-gray-100 text-gray-600',
    review: 'bg-amber-100 text-amber-700',
    archived: 'bg-red-100 text-red-700'
  }
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-full text- font-medium ${styles[variant] || styles.draft}`}>
      {children}
    </span>
  )
}

function StatCard({ label, value, icon: Icon, color }) {
  return (
    <div className="bg-white border border-black/[0.08] rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text- text-[#94a3b8]">{label}</span>
        <div className={`p-2 rounded-lg bg-${color}-50`}>
          <Icon className={`h-4 w-4 text-${color}-600`} />
        </div>
      </div>
      <p className="text- font-bold text-[#0f172a]">{value}</p>
    </div>
  )
}

export default function InstructorCourseManagement() {
  const [courses, setCourses] = useState(sampleCourses)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedCourse, setSelectedCourse] = useState(null)

  // Multi-step form state
  const [activeStep, setActiveStep] = useState(0)
  const steps = ['Basics', 'Content', 'Pricing', 'Publish']

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Science',
    level: 'Beginner',
    duration: '',
    lessons: '',
    thumbnail: '',
    // Content Step fields
    modulesCount: 0,
    lessonsPerModule: 0,
    hasSharedResources: false,
    // Pricing Step fields
    pricingModel: 'one-time',
    basePrice: '',
    currency: 'INR',
    enrollmentFee: '',
    taxHandling: 'inclusive',
    // Publish Step fields
    visibility: 'public',
    enrollmentStart: 'Immediate',
    enrollmentEnd: 'No end date',
    maximumCapacity: 'Unlimited',
    accessDuration: 'Lifetime',
    welcomeEmail: true,
    whatsappNotification: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({...formData, [name]: type === 'checkbox'? checked : value })
  }

  const handleNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const handlePreviousStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0))
  }

  const handleCreateCourse = () => {
    const newCourse = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      level: formData.level,
      duration: formData.duration,
      lessons: parseInt(formData.lessons) || 0,
      students: 0,
      rating: 0, // Default rating for new courses
      status: 'draft', // New courses start as draft
      createdAt: new Date().toISOString().split('T')[0],
      thumbnail: formData.thumbnail || 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80',
      // Include other form data for internal management, though not all visible on course card
      modulesCount: formData.modulesCount,
      lessonsPerModule: formData.lessonsPerModule,
      hasSharedResources: formData.hasSharedResources,
      pricingModel: formData.pricingModel,
      basePrice: formData.basePrice,
      currency: formData.currency,
      enrollmentFee: formData.enrollmentFee,
      taxHandling: formData.taxHandling,
      visibility: formData.visibility,
      enrollmentStart: formData.enrollmentStart,
      enrollmentEnd: formData.enrollmentEnd,
      maximumCapacity: formData.maximumCapacity,
      accessDuration: formData.accessDuration,
      welcomeEmail: formData.welcomeEmail,
      whatsappNotification: formData.whatsappNotification,
    }
    setCourses([newCourse,...courses])
    setShowCreateModal(false)
    resetForm()
  }

  const handleEditCourse = () => {
    setCourses(courses.map(course =>
      course.id === selectedCourse.id
       ? {...course,...formData, lessons: parseInt(formData.lessons) || course.lessons }
        : course
    ))
    setShowEditModal(false)
    resetForm()
  }

  const handleDeleteCourse = (id) => {
    setCourses(courses.filter(course => course.id!== id))
    setShowDeleteConfirm(null)
  }

  const handleEditClick = (course) => {
    setSelectedCourse(course)
    setFormData({
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      duration: course.duration,
      lessons: course.lessons.toString(),
      thumbnail: course.thumbnail,
      // Load other fields if editing
      modulesCount: course.modulesCount || 0,
      lessonsPerModule: course.lessonsPerModule || 0,
      hasSharedResources: course.hasSharedResources || false,
      pricingModel: course.pricingModel || 'one-time',
      basePrice: course.basePrice || '',
      currency: course.currency || 'INR',
      enrollmentFee: course.enrollmentFee || '',
      taxHandling: course.taxHandling || 'inclusive',
      visibility: course.visibility || 'public',
      enrollmentStart: course.enrollmentStart || 'Immediate',
      enrollmentEnd: course.enrollmentEnd || 'No end date',
      maximumCapacity: course.maximumCapacity || 'Unlimited',
      accessDuration: course.accessDuration || 'Lifetime',
      welcomeEmail: course.welcomeEmail!== undefined? course.welcomeEmail : true,
      whatsappNotification: course.whatsappNotification!== undefined? course.whatsappNotification : false,
    })
    setShowEditModal(true)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: 'Science',
      level: 'Beginner',
      duration: '',
      lessons: '',
      thumbnail: '',
      modulesCount: 0,
      lessonsPerModule: 0,
      hasSharedResources: false,
      pricingModel: 'one-time',
      basePrice: '',
      currency: 'INR',
      enrollmentFee: '',
      taxHandling: 'inclusive',
      visibility: 'public',
      enrollmentStart: 'Immediate',
      enrollmentEnd: 'No end date',
      maximumCapacity: 'Unlimited',
      accessDuration: 'Lifetime',
      welcomeEmail: true,
      whatsappNotification: false,
    })
    setSelectedCourse(null)
    setActiveStep(0) // Reset to first step
  }

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: courses.length,
    published: courses.filter(c => c.status === 'published').length,
    draft: courses.filter(c => c.status === 'draft').length,
    totalStudents: courses.reduce((sum, c) => sum + c.students, 0)
  }

  // --- Step Components for Create Course Modal ---

  const CourseBasicsForm = () => (
    <div className="space-y-4">
      <div>
        <FieldLabel>Course Title *</FieldLabel>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="e.g., Advanced JavaScript"
          className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          required
        />
      </div>

      <div>
        <FieldLabel>Description</FieldLabel>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="3"
          placeholder="Describe what students will learn..."
          className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6] resize-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Category</FieldLabel>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          >
            <option>Science</option>
            <option>Programming</option>
            <option>Language</option>
            <option>Mathematics</option>
            <option>Arts</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <FieldLabel>Level</FieldLabel>
          <select
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Duration</FieldLabel>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="e.g., 8 weeks"
            className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          />
        </div>
        <div>
          <FieldLabel>Total Lessons</FieldLabel>
          <input
            type="number"
            name="lessons"
            value={formData.lessons}
            onChange={handleInputChange}
            placeholder="Number of lessons"
            className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          />
        </div>
      </div>

      <div>
        <FieldLabel>Course cover image (URL)</FieldLabel>
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleInputChange}
          placeholder="https://images.unsplash.com/..."
          className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
        />
      </div>
    </div>
  )

  const CourseContentForm = () => (
    <div className="space-y-4">
      <h3 className="text- font-bold text-[#0f172a]">Content Structure</h3>
      <p className="text- text-[#94a3b8]">Define the basic outline of your course content.</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Number of Modules</FieldLabel>
          <input
            type="number"
            name="modulesCount"
            value={formData.modulesCount}
            onChange={handleInputChange}
            placeholder="e.g., 5"
            className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          />
        </div>
        <div>
          <FieldLabel>Average Lessons per Module</FieldLabel>
          <input
            type="number"
            name="lessonsPerModule"
            value={formData.lessonsPerModule}
            onChange={handleInputChange}
            placeholder="e.g., 3"
            className="mt-1 w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between p-3 rounded-md border border-black/[0.08] bg-[#f8fafc]">
        <div>
          <p className="text- font-semibold text-[#0f172a]">Shared Resources</p>
          <p className="text- text-[#6b7280]">Will there be common downloadable materials?</p>
        </div>
        <Toggle enabled={formData.hasSharedResources} onToggle={() => setFormData({...formData, hasSharedResources:!formData.hasSharedResources })} />
      </div>

      {formData.hasSharedResources && (
        <InputShell><span className="text-sm text-[#94a3b8]">You can upload actual files later.</span></InputShell>
      )}

      <div className="mt-5 p-4 rounded-lg bg-[#e9f2ff] flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-[#1f4f9c] flex-shrink-0" />
        <div>
          <p className="text- font-semibold text-[#1f4f9c]">Note:</p>
          <p className="text- text-[#1f4f9c] mt-0.5">
            Detailed lesson planning, adding specific video/PDF/quiz types, and attaching actual files will be done after initial creation.
          </p>
        </div>
      </div>
    </div>
  )

  const CoursePricingForm = () => (
    <div className="space-y-4">
      <h3 className="text- font-bold text-[#0f172a]">Pricing Model</h3>
      <p className="text- text-[#94a3b8]">Select how learners will pay for this course.</p>

      <div className="space-y-2.5">
        {[
          { id: 'one-time', title: 'One-time payment', desc: 'Collect the full course fee during enrollment.' },
          { id: 'installment', title: 'Monthly installment plan', desc: 'Split the total into scheduled monthly payments.' },
          { id: 'subscription', title: 'Subscription access', desc: 'Charge recurring access while the learner stays enrolled.' },
        ].map((opt) => (
          <div
            key={opt.id}
            onClick={() => setFormData({...formData, pricingModel: opt.id })}
            className={`flex items-start justify-between p-3 rounded-md border cursor-pointer transition-colors ${formData.pricingModel === opt.id? 'border-[#5b3df6] bg-[#faf8ff]' : 'border-black/[0.08] bg-white hover:bg-gray-50'}`}
          >
            <div className="flex items-start gap-3">
              <div className={`mt-1 h-3 w-3 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.pricingModel === opt.id? 'border-[#5b3df6]' : 'border-[#d1d5db]'}`}>
                {formData.pricingModel === opt.id && <div className="h-1.5 w-1.5 rounded-full bg-[#5b3df6]" />}
              </div>
              <div>
                <p className="text- font-semibold text-[#0f172a]">{opt.title}</p>
                <p className="text- text-[#6b7280] mt-0.5">{opt.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text- font-bold text-[#0f172a] mt-5">Course Price</h3>
      <p className="text- text-[#94a3b8]">Set the core fee and currency.</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Base price</FieldLabel>
          <InputShell className="mt-1 justify-between">
            <input
              type="text"
              name="basePrice"
              value={formData.basePrice}
              onChange={handleInputChange}
              placeholder="e.g., 12000"
              className="bg-transparent outline-none text-sm text-[#0f1724] w-full"
            />
            <span className="text-sm text-[#0f1724]">INR</span>
          </InputShell>
        </div>
        <div>
          <FieldLabel>Currency</FieldLabel>
          <InputShell className="mt-1 justify-between">
            <span className="text-sm text-[#0f1724]">INR - Indian Rupee</span>
            <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
          </InputShell>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Enrollment fee (optional)</FieldLabel>
          <InputShell className="mt-1">
            <input
              type="text"
              name="enrollmentFee"
              value={formData.enrollmentFee}
              onChange={handleInputChange}
              placeholder="e.g., 1500"
              className="bg-transparent outline-none text-sm text-[#0f1724] w-full"
            />
          </InputShell>
        </div>
        <div>
          <FieldLabel>Tax handling</FieldLabel>
          <InputShell className="mt-1 justify-between">
            <select
              name="taxHandling"
              value={formData.taxHandling}
              onChange={handleInputChange}
              className="bg-transparent outline-none text-sm text-[#0f1724] w-full"
            >
              <option value="inclusive">Inclusive of GST</option>
              <option value="exclusive">Exclusive of GST</option>
            </select>
            <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
          </InputShell>
        </div>
      </div>
      <div className="mt-5 p-4 rounded-lg bg-[#e9f2ff] flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-[#1f4f9c] flex-shrink-0" />
        <div>
          <p className="text- font-semibold text-[#1f4f9c]">Note:</p>
          <p className="text- text-[#1f4f9c] mt-0.5">
            Detailed discount rules and coupon creation will be available after initial course setup.
          </p>
        </div>
      </div>
    </div>
  )

  const CoursePublishForm = () => (
    <div className="space-y-4">
      <h3 className="text- font-bold text-[#0f172a]">Course Visibility</h3>
      <p className="text- text-[#94a3b8]">Control who can discover and enroll in this course.</p>

      <div className="space-y-2.5">
        {[
          { id: 'public', title: 'Public (Marketplace)', desc: 'Visible in student portal, open for enrollment to anyone.' },
          { id: 'unlisted', title: 'Unlisted', desc: 'Not visible in portal. Only accessible via direct link.' },
          { id: 'private', title: 'Private', desc: 'Closed for self-enrollment. Students must be manually added.' },
        ].map((opt) => (
          <div
            key={opt.id}
            onClick={() => setFormData({...formData, visibility: opt.id })}
            className={`flex items-start justify-between p-4 rounded-lg border cursor-pointer transition-colors ${formData.visibility === opt.id? 'border-[#5b3df6] bg-[#faf8ff]' : 'border-black/[0.08] bg-white hover:bg-gray-50'}`}
          >
            <div className="flex items-start gap-3">
              <div className={`mt-0.5 h-4 w-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.visibility === opt.id? 'border-[#5b3df6]' : 'border-[#d1d5db]'}`}>
                {formData.visibility === opt.id && <div className="h-2 w-2 rounded-full bg-[#5b3df6]" />}
              </div>
              <div>
                <p className="text- font-semibold text-[#0f172a]">{opt.title}</p>
                <p className="text- text-[#6b7280] mt-0.5">{opt.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text- font-bold text-[#0f172a] mt-5">Enrollment & Capacity</h3>
      <p className="text- text-[#94a3b8]">Set limits on when students can join and how many seats are available.</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <FieldLabel>Enrollment Start</FieldLabel>
          <InputShell className="mt-1 justify-between">
            <span className="text-sm text-[#0f1724]">{formData.enrollmentStart}</span>
            <Calendar className="h-4 w-4 text-[#94a3b8]" />
          </InputShell>
        </div>
        <div>
          <FieldLabel>Enrollment End</FieldLabel>
          <InputShell className="mt-1 justify-between">
            <span className="text-sm text-[#94a3b8]">{formData.enrollmentEnd}</span>
            <Calendar className="h-4 w-4 text-[#94a3b8]" />
          </InputShell>
        </div>
        <div>
          <FieldLabel>Maximum Capacity</FieldLabel>
          <InputShell className="mt-1"><span className="text-sm text-[#0f1724]">{formData.maximumCapacity}</span></InputShell>
        </div>
        <div>
          <FieldLabel>Access Duration</FieldLabel>
          <InputShell className="mt-1 justify-between">
            <span className="text-sm text-[#0f1724]">{formData.accessDuration}</span>
            <ChevronDown className="h-4 w-4 text-[#94a3b8]" />
          </InputShell>
        </div>
      </div>

      <h3 className="text- font-bold text-[#0f172a] mt-5">Automated Communication</h3>
      <p className="text- text-[#94a3b8]">Set up immediate touches for new enrollments.</p>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 rounded-lg border border-black/[0.08] bg-[#f8fafc]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ede9ff] flex items-center justify-center"><Mail className="h-5 w-5 text-[#5b3df6]" /></div>
            <div>
              <p className="text- font-semibold text-[#0f172a]">Welcome Email</p>
              <p className="text- text-[#6b7280]">Sent automatically when a student enrolls.</p>
            </div>
          </div>
          <Toggle enabled={formData.welcomeEmail} onToggle={() => setFormData({...formData, welcomeEmail:!formData.welcomeEmail })} />
        </div>
        <div className="flex items-center justify-between p-4 rounded-lg border border-black/[0.08] bg-[#f8fafc]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#f0fdf4] flex items-center justify-center"><MessageSquare className="h-5 w-5 text-emerald-600" /></div>
            <div>
              <p className="text- font-semibold text-[#0f172a]">WhatsApp Notification</p>
              <p className="text- text-[#6b7280]">Send a quick welcome message via WhatsApp.</p>
            </div>
          </div>
          <Toggle enabled={formData.whatsappNotification} onToggle={() => setFormData({...formData, whatsappNotification:!formData.whatsappNotification })} />
        </div>
      </div>
    </div>
  )

  const renderStepContent = () => {
    switch (activeStep) {
      case 0: return <CourseBasicsForm />
      case 1: return <CourseContentForm />
      case 2: return <CoursePricingForm />
      case 3: return <CoursePublishForm />
      default: return null
    }
  }

  return (
    <div className="min-h-full bg-[#f6f8fa]">
      <div className="space-y-4 p-5">
        {/* Hero Section */}
        <section className="rounded- border border-black/[0.08] bg-gradient-to-br from-white to-[#e8f5ff] p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded- bg-[#ffd966] px-3 py-1.5 mb-4">
                <BookOpen className="h-4 w-4 text-[#4b2e00]" />
                <span className="text- font-medium text-[#4b2e00]">Instructor Workspace</span>
              </div>
              <h1 className="text- font-bold leading-tight text-[#0f172a]">My Courses</h1>
              <p className="mt-2 max-w- text- text-[#94a3b8]">
                Create, manage, and publish your courses. Track student enrollment, performance, and course engagement all in one place.
              </p>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="inline-flex items-center gap-2 bg-[#5b3df6] px-4 py-2 rounded- text- font-semibold text-white hover:bg-[#4a2ed8] transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Create New Course
                </button>
                <button className="inline-flex items-center gap-2 border border-black/[0.08] bg-white px-4 py-2 rounded- text- font-semibold text-[#0f172a] hover:bg-gray-50">
                  <Upload className="h-4 w-4" />
                  Bulk Upload
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white border border-black/[0.08] flex items-center gap-2 px-3 py-2 rounded-">
                <div className="h-8 w-8 rounded-full bg-[#e8f5ff] flex items-center justify-center text- font-bold text-[#5b3df6]">M</div>
                <div>
                  <p className="text- font-semibold text-[#0f172a]">Marcus Chen</p>
                  <p className="text- text-[#94a3b8]">Instructor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Total Courses" value={stats.total} icon={BookOpen} color="purple" />
          <StatCard label="Published" value={stats.published} icon={CheckCircle} color="emerald" />
          <StatCard label="In Draft" value={stats.draft} icon={Edit} color="gray" />
          <StatCard label="Total Students" value={stats.totalStudents} icon={Users} color="blue" />
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white border border-black/[0.08] rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w- relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search courses by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border border-black/[0.08] rounded- text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
              />
            </div>
            <div className="flex gap-2">
              {['all', 'published', 'draft', 'review'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded- text- font-medium transition-colors ${
                    filterStatus === status
                     ? 'bg-[#5b3df6] text-white'
                      : 'bg-gray-100 text-[#64748b] hover:bg-gray-200'
                  }`}
                >
                  {status === 'all'? 'All' : status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white border border-black/[0.08] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              {/* Thumbnail */}
              <div className="relative h-40 bg-gradient-to-br from-[#5b3df6]/20 to-[#2dd4bf]/20">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3">
                  <Pill variant={course.status}>{course.status}</Pill>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text- font-bold text-[#0f172a] line-clamp-1">{course.title}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="text- font-medium text-[#64748b]">{course.rating}</span>
                  </div>
                </div>
                <p className="text- text-[#94a3b8] line-clamp-2 mb-3">{course.description}</p>

                <div className="flex flex-wrap gap-3 mb-3 text- text-[#94a3b8]">
                  <span className="inline-flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    {course.lessons} lessons
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {course.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {course.students} students
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-black/[0.08]">
                  <span className="text- text-[#94a3b8]">Created: {course.createdAt}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(course)}
                      className="p-1.5 text-[#64748b] hover:text-[#5b3df6] hover:bg-[#ede7ff] rounded-md transition-colors"
                      title="Edit Course"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(course.id)}
                      className="p-1.5 text-[#64748b] hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                      title="Delete Course"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button
                      className="p-1.5 text-[#64748b] hover:text-[#5b3df6] hover:bg-[#ede7ff] rounded-md transition-colors"
                      title="View Course"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-[#94a3b8] mx-auto mb-3" />
            <p className="text- text-[#94a3b8]">No courses found</p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="mt-3 text- text-[#5b3df6] hover:text-[#4a2ed8] font-medium"
            >
              Create your first course
            </button>
          </div>
        )}
      </div>

      {/* Create Course Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w- max-h- overflow-y-auto bg-white rounded- shadow-xl">
            <div className="flex items-center justify-between p-5 border-b border-black/[0.08]">
              <h2 className="text- font-bold text-[#0f172a]">Create New Course</h2>
              <button onClick={() => { setShowCreateModal(false); resetForm(); }} className="text-[#94a3b8] hover:text-[#0f172a]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              {/* Step Indicator */}
              <div className="flex justify-between mb-6">
                {steps.map((step, index) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-200 ${
                      index === activeStep
                       ? 'bg-[#5b3df6] text-white'
                        : index < activeStep
                         ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index < activeStep? <Check className="h-4 w-4" /> : index + 1}
                    </div>
                    <span className={`text-xs mt-2 ${index === activeStep? 'text-[#5b3df6]' : 'text-gray-600'}`}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              {renderStepContent()}
            </div>

            <div className="flex justify-between p-5 border-t border-black/[0.08]">
              {activeStep > 0 && (
                <button
                  onClick={handlePreviousStep}
                  className="h-10 px-4 border border-black/[0.08] rounded- text- font-medium text-[#64748b] hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              <div className="flex-1 flex justify-end gap-3">
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={handleNextStep}
                    className="h-10 px-4 bg-[#5b3df6] rounded- text- font-medium text-white hover:bg-[#4a2ed8]"
                  >
                    Next ({steps[activeStep + 1]})
                  </button>
                )}
                {activeStep === steps.length - 1 && (
                  <button
                    onClick={handleCreateCourse}
                    className="h-10 px-4 bg-[#28a745] rounded- text- font-medium text-white hover:bg-[#218838]"
                  >
                    Create Course
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Course Modal (Kept as is for now, could be updated to multi-step later) */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w- max-h- overflow-y-auto bg-white rounded- shadow-xl">
            <div className="flex items-center justify-between p-5 border-b border-black/[0.08]">
              <h2 className="text- font-bold text-[#0f172a]">Edit Course</h2>
              <button onClick={() => setShowEditModal(false)} className="text-[#94a3b8] hover:text-[#0f172a]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
               <div>
                 <label className="block text- font-semibold text-[#0f172a] mb-1">Course Title *</label>
                 <input
                   type="text"
                   name="title"
                   value={formData.title}
                   onChange={handleInputChange}
                   className="w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                 />
               </div>

               <div>
                 <label className="block text- font-semibold text-[#0f172a] mb-1">Description</label>
                 <textarea
                   name="description"
                   value={formData.description}
                   onChange={handleInputChange}
                   rows="3"
                   className="w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6] resize-none"
                 />
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text- font-semibold text-[#0f172a] mb-1">Category</label>
                   <select
                     name="category"
                     value={formData.category}
                     onChange={handleInputChange}
                     className="w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                   >
                     <option>Science</option>
                     <option>Programming</option>
                     <option>Language</option>
                     <option>Mathematics</option>
                     <option>Arts</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text- font-semibold text-[#0f172a] mb-1">Level</label>
                   <select
                     name="level"
                     value={formData.level}
                     onChange={handleInputChange}
                     className="w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                   >
                     <option>Beginner</option>
                     <option>Intermediate</option>
                     <option>Advanced</option>
                   </select>
                 </div>
               </div>

               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text- font-semibold text-[#0f172a] mb-1">Duration</label>
                   <input
                     type="text"
                     name="duration"
                     value={formData.duration}
                     onChange={handleInputChange}
                     className="w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                   />
                 </div>
                 <div>
                   <label className="block text- font-semibold text-[#0f172a] mb-1">Total Lessons</label>
                   <input
                     type="number"
                     name="lessons"
                     value={formData.lessons}
                     onChange={handleInputChange}
                     className="w-full rounded- border border-black/[0.08] px-3 py-2 text- focus:outline-none focus:ring-2 focus:ring-[#5b3df6]"
                   />
                 </div>
               </div>
            </div>

            <div className="flex gap-3 p-5 border-t border-black/[0.08]">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 h-10 border border-black/[0.08] rounded- text- font-medium text-[#64748b] hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleEditCourse}
                className="flex-1 h-10 bg-[#5b3df6] rounded- text- font-medium text-white hover:bg-[#4a2ed8]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="w- bg-white rounded- shadow-xl">
            <div className="p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text- font-bold text-[#0f172a] mb-2">Delete Course?</h3>
              <p className="text- text-[#64748b] mb-4">
                This action cannot be undone. All course data will be permanently deleted.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(null)}
                  className="flex-1 h-10 border border-black/[0.08] rounded- text- font-medium text-[#64748b] hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDeleteCourse(showDeleteConfirm)}
                  className="flex-1 h-10 bg-red-500 rounded- text- font-medium text-white hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
