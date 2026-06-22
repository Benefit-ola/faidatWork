import React, { useState } from "react";
import {
  SiHtml5,  SiJavascript, SiTypescript, SiReact,
  SiNextdotjs, SiTailwindcss, SiVite, SiGithub, SiFigma,
  SiFramer,
} from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { MdOutlineSecurity, MdOutlineNetworkCheck } from "react-icons/md";
import { BsShieldLock, BsServer } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Technologies I use to build modern, responsive web interfaces.",
    skills: [
      { name: "HTML5",       icon: <SiHtml5 />,       color: "#E34F26", level: "Advanced" },
      { name: "CSS3",        icon: <FaCss3Alt />,        color: "#1572B6", level: "Advanced" },
      { name: "JavaScript",  icon: <SiJavascript />,  color: "#F7DF1E", level: "Advanced" },
      { name: "TypeScript",  icon: <SiTypescript />,  color: "#3178C6", level: "Intermediate" },
      { name: "React",       icon: <SiReact />,       color: "#61DAFB", level: "Advanced" },
      { name: "Next.js",     icon: <SiNextdotjs />,   color: "#000000", level: "Intermediate" },
      { name: "Tailwind CSS",icon: <SiTailwindcss />, color: "#06B6D4", level: "Advanced" },
      { name: "Framer Motion",icon: <SiFramer />,     color: "#0055FF", level: "Intermediate" },
      { name: "Vite",        icon: <SiVite />,        color: "#646CFF", level: "Intermediate" },
      { name: "Git & GitHub",icon: <SiGithub />,      color: "#181717", level: "Intermediate" },
      { name: "Figma",       icon: <SiFigma />,       color: "#F24E1E", level: "Beginner" },
    ],
  },
  {
    id: "security",
    label: "IT & Security",
    description: "Formal IT training covering cybersecurity principles and network fundamentals.",
    skills: [
      { name: "Cybersecurity",    icon: <BsShieldLock />,          color: "#D63384", level: "Intermediate" },
      { name: "Networking",       icon: <MdOutlineNetworkCheck />,  color: "#8B5CF6", level: "Intermediate" },
      { name: "Incident Response",icon: <MdOutlineSecurity />,      color: "#EF4444", level: "Intermediate" },
      { name: "Network Protocols",icon: <BsServer />,               color: "#10B981", level: "Intermediate" },
      { name: "CIA Triad",        icon: <BsShieldLock />,           color: "#F59E0B", level: "Intermediate" },
      { name: "Subnetting / CIDR",icon: <MdOutlineNetworkCheck />,  color: "#3B82F6", level: "Intermediate" },
    ],
  },
  {
    id: "systems",
    label: "Systems & C",
    description: "Low-level programming fundamentals that make me a stronger, more rounded developer.",
    skills: [
      { name: "C Programming",     icon: <TbBrandCpp />,     color: "#00599C", level: "Intermediate" },
      { name: "Memory Management", icon: <VscTerminalCmd />, color: "#D63384", level: "Beginner" },
      { name: "Data Structures",   icon: <VscTerminalCmd />, color: "#6366F1", level: "Beginner" },
      { name: "Algorithms",        icon: <TbBrandCpp />,     color: "#059669", level: "Beginner" },
    ],
  },
];

const levelConfig = {
  Advanced:     { color: "text-emerald-600", bg: "bg-emerald-50",  border: "border-emerald-200", dot: "bg-emerald-500" },
  Intermediate: { color: "text-blue-600",    bg: "bg-blue-50",     border: "border-blue-200",    dot: "bg-blue-500" },
  Beginner:     { color: "text-amber-600",   bg: "bg-amber-50",    border: "border-amber-200",   dot: "bg-amber-400" },
};

const Skills = () => {
  const [active, setActive] = useState("frontend");
  const current = categories.find((c) => c.id === active);

  return (
    <section className="w-full bg-[#fdfcfb] py-15 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              What I work with
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              My <span className="text-[#D63384]">Skills</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Three disciplines. One developer. I bring frontend craft,
              IT knowledge, and systems thinking to every project.
            </p>
          </div>
        </div>

        {/* ── CATEGORY TABS ── */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#D63384] text-white shadow-md shadow-pink-200"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-[#D63384] hover:text-[#D63384]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── CATEGORY DESCRIPTION ── */}
        <p className="text-gray-400 text-sm mb-10 leading-relaxed border-l-2 border-[#D63384]/30 pl-4">
          {current.description}
        </p>

        {/* ── SKILLS GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-20">
          {current.skills.map((skill) => {
            const lvl = levelConfig[skill.level];
            return (
              <div
                key={skill.name}
                className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {/* icon */}
                <div
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                {/* name */}
                <p className="text-xs font-semibold text-gray-800 leading-tight">
                  {skill.name}
                </p>

                {/* level badge */}
                <span
                  className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${lvl.bg} ${lvl.color} ${lvl.border} flex items-center gap-1.5`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${lvl.dot}`} />
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM LEGEND + SUMMARY ── */}
        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* legend */}
          <div className="flex flex-wrap gap-5">
            {Object.entries(levelConfig).map(([label, conf]) => (
              <div key={label} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${conf.dot}`} />
                <span className="text-xs text-gray-500 font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* summary numbers */}
          <div className="flex gap-8">
            {[
              { num: "11", label: "Frontend tools" },
              { num: "6",  label: "IT & Security concepts" },
              { num: "4",  label: "Systems / C skills" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-gray-900 leading-none">{s.num}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;