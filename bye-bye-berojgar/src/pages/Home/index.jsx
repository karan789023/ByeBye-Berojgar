
import { Link } from "react-router-dom";


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Code,
  Landmark,
  Search,
  Menu,
  X,
  MapPin,
  Star,
} from "lucide-react";

export default function ByeByeBerojgarHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const exams = [
    { id: 1, title: "SSC CGL Mock Test", type: "Govt", duration: "60 min", score: 100, badge: "Most Popular" },
    { id: 2, title: "JEE Main Full Mock", type: "JEE", duration: "180 min", score: 300, badge: "Adaptive" },
    { id: 3, title: "NEET Practice Set", type: "NEET", duration: "180 min", score: 200, badge: "Top Rated" },
    { id: 4, title: "UPPSC Preliminary", type: "Govt", duration: "120 min", score: 150, badge: "State" },
    { id: 5, title: "Aptitude Crash Test", type: "Govt", duration: "30 min", score: 50, badge: "Quick" },
  ];

const stats = [
  { label: "Practice", value: "Daily" },
  { label: "Mock Tests", value: "Multiple" },
  { label: "Learning", value: "Smart" },
];
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Puducherry",
  ];

  const filteredExams = exams.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-rose-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">BB</div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight">ByeBye <span className="text-pink-600">Berojgar</span></h1>
              <p className="text-xs text-slate-500 -mt-1">Prepare • Practice • Perform</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-100">
              <BookOpen className="w-4 h-4 text-sky-500" /> Courses
            </button>
            <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-100">
              <GraduationCap className="w-4 h-4 text-yellow-500" /> Tests
            </button>
          <Link to="/Goverment">
  <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-100">
    <Landmark className="w-4 h-4 text-green-500" /> Goverment
  </button>
</Link>
            <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-100">
              <Code className="w-4 h-4 text-pink-500" /> Competitive
            </button>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-72 pl-10 pr-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Search tests, topics or exams"
              />
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            </div>
            
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Open menu"
          >
            {!menuOpen ? <Menu className="w-6 h-6" /> : <X className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden border-t border-slate-200 bg-white/90">
            <div className="px-4 py-3 flex flex-col gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Search tests, topics or exams"
              />
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-lg bg-sky-600 text-white font-medium">Sign Up</button>
                <button className="flex-1 px-4 py-2 rounded-lg border">Log in</button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <main className="container mx-auto px-4 pt-8 pb-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
            >
              Study smarter. Beat the competition.
              <span className="block text-pink-600">Govt Exams, JEE &amp; NEET — all in one place.</span>
            </motion.h2>

            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-4 text-lg text-slate-600"
            >
              Personalized mock tests, step-by-step lessons, live analytics and doubt support — designed to help you clear exams with confidence.
            </motion.p>

            <div className="mt-6 flex gap-3 flex-wrap">
              <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow">
                Start Free Test
              </motion.button>

              <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-3 rounded-lg border border-slate-200 bg-white">
                Explore Courses
              </motion.button>

              <motion.div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm">
                <MapPin className="w-4 h-4 text-slate-500" />
                <select className="bg-transparent outline-none" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </motion.div>
            </div>

            {/* stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3">
              {stats.map((s) => (
                <motion.div whileHover={{ y: -6 }} key={s.label} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <div className="text-xl font-bold">{s.value}</div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hero right - animated cards */}
          <div className="relative">
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exams.slice(0,4).map((exam) => (
                  <motion.div key={exam.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl p-4 shadow-lg border">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-slate-500">{exam.type}</div>
                        <div className="font-semibold text-lg mt-1">{exam.title}</div>
                        <div className="text-xs text-slate-400 mt-2">{exam.duration} • {exam.score} Qs</div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-xs text-slate-400">{exam.badge}</div>
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center text-white font-bold">{exam.title.split(" ")[0].slice(0,2).toUpperCase()}</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <button className="flex-1 px-3 py-2 rounded-md bg-sky-600 text-white">Take Test</button>
                      <button className="px-3 py-2 rounded-md border">Preview</button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-rose-50 border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Smart Analytics</div>
                    <div className="font-semibold text-lg">Instant performance reports & weak-topic suggestions</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div className="text-xs text-slate-500">Live</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* floating shapes */}
            <div className="pointer-events-none absolute -right-10 -top-8 opacity-60">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="url(#g)" />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#fbc2eb" />
                    <stop offset="1" stopColor="#a6c1ee" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold">Browse by Category</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            <Link to="/Goverment">
    <CategoryCard title="Govt Exams" icon={<Landmark />} color="from-green-400 to-green-600" />
  </Link>
            <Link to="/Jee">
            <CategoryCard title="JEE" icon={<Code />} color="from-pink-400 to-pink-600" />
            </Link>

            <Link to="/Neet">
            <CategoryCard title="NEET" icon={<BookOpen />} color="from-sky-400 to-sky-600" />
            </Link>
            <CategoryCard title="Coding" icon={<Code />} color="from-purple-400 to-purple-600" />
            <Link to="/Goverment">
            <CategoryCard title="Banking" icon={<GraduationCap />} color="from-yellow-400 to-yellow-600" />
            </Link>
            <Link to="/Goverment">
            <CategoryCard title="State Exams" icon={<MapPin />} color="from-indigo-400 to-indigo-600" />
            </Link>
          </div>
        </section>

        {/* Featured tests horizontal scroll */}
        <section className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">Featured Mock Tests</h3>
            <button className="text-sky-600">See all</button>
          </div>

          <div className="mt-4 overflow-x-auto no-scrollbar py-2">
            <div className="flex gap-4">
              {filteredExams.map((ex) => (
                <motion.div whileHover={{ y: -6 }} key={ex.id} className="min-w-[260px] bg-white rounded-2xl p-4 shadow border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400">{ex.type}</div>
                      <div className="font-semibold mt-1">{ex.title}</div>
                      <div className="text-xs text-slate-400 mt-2">{ex.duration} • {ex.score} Qs</div>
                    </div>
                    <div className="text-xs text-slate-400">{ex.badge}</div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white">Start</button>
                    <button className="px-3 py-2 rounded-lg border">Preview</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Personalized Learning</h4>
            <p className="text-sm text-slate-500 mt-2">Adaptive tests tailor difficulty based on your performance.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Detailed Analytics</h4>
            <p className="text-sm text-slate-500 mt-2">Instant reports, time analysis and topic-wise strengths.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Affordable & Offline</h4>
            <p className="text-sm text-slate-500 mt-2">Low-cost subscriptions and downloadable tests for offline practice.</p>
          </div>
        </section>

        {/* Footer */}
       {/* Footer */}
<footer className="mt-12 py-8 border-t border-slate-200">
  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
    
    <div className="text-sm text-slate-600 text-center md:text-left">
      © {new Date().getFullYear()} ByeBye Berojgar. All rights reserved.
    </div>

    <div className="flex items-center gap-4 text-sm text-slate-600">
      
      <Link
        to="/PrivacyPolicy"
        className="hover:text-blue-600 transition-colors"
      >
        Privacy
      </Link>

      <Link
        to="/Terms"
        className="hover:text-blue-600 transition-colors"
      >
        Terms
      </Link>

      <Link
        to="/ContactUs"
        className="hover:text-blue-600 transition-colors"
      >
        Contact
      </Link>

      <Link
        to="/AboutUs"
        className="hover:text-blue-600 transition-colors"
      >
        About Us
      </Link>

    </div>
  </div>
</footer>
      </main>
    </div>
  );
}

function CategoryCard({ title, icon, color = "from-sky-400 to-sky-600" }) {
  return (
    <motion.button whileHover={{ scale: 1.03 }} className="flex flex-col items-start gap-3 bg-white p-4 rounded-2xl shadow border">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${color} flex items-center justify-center text-white`}>{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-xs text-slate-400">Practice • Mock Tests • Analytics</div>
    </motion.button>
  );
}
