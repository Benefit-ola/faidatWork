import React from "react";
import heroImage from "../assets/laptop.jpg"; // replace with your actual image path
import {
  SiHtml5,
  
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiGithub,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";
import { FaCss3Alt } from "react-icons/fa";

const floatingIcons = [
  { icon: <SiHtml5 />,        color: "#E34F26", left: "8%",  top: "18%", duration: "9s",  delay: "0s",   size: "48px", label: "HTML5" },
  { icon: <FaCss3Alt />,         color: "#1572B6", left: "80%", top: "14%", duration: "11s", delay: "1.5s", size: "46px", label: "CSS3" },
  { icon: <SiReact />,        color: "#61DAFB", left: "14%", top: "62%", duration: "8s",  delay: "2s",   size: "52px", label: "React" },
  { icon: <SiTailwindcss />,  color: "#06B6D4", left: "72%", top: "58%", duration: "13s", delay: "0.8s", size: "46px", label: "Tailwind CSS" },
  { icon: <SiTypescript />,   color: "#3178C6", left: "88%", top: "38%", duration: "10s", delay: "3s",   size: "44px", label: "TypeScript" },
    { icon: <VscTerminalCmd />, color: "#D63384", left: "44%", top: "22%", duration: "10s", delay: "3.5s", size: "46px", label: "C / Systems" },
  { icon: <SiVite />,         color: "#646CFF", left: "55%", top: "8%",  duration: "9s",  delay: "4s",   size: "44px", label: "Vite" },
   { icon: <SiNextdotjs />,    color: "#000000", left: "30%", top: "78%", duration: "11s", delay: "2.5s", size: "44px", label: "Next.js" },
  { icon: <SiGithub />,       color: "#181717", left: "64%", top: "76%", duration: "14s", delay: "0.3s", size: "42px", label: "GitHub" },
 
  { icon: <SiJavascript />,   color: "#F7DF1E", left: "5%",  top: "40%", duration: "12s", delay: "1s",   size: "44px", label: "JavaScript" },
  { icon: <SiFigma />,        color: "#F24E1E", left: "22%", top: "10%", duration: "8s",  delay: "5s",   size: "42px", label: "Figma" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fdfcfb]">

      {/* ── FLOATING TECH ICONS (background layer) ── */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {floatingIcons.map((item, index) => (
          <span
            key={index}
            aria-label={item.label}
            className="animate-float absolute opacity-[0.15]"
            style={{
              left: item.left,
              top: item.top,
              animationDuration: item.duration,
              animationDelay: item.delay,
              color: item.color,
              fontSize: item.size,
              lineHeight: 1,
            }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      {/* ── MAIN FLEX LAYOUT ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen max-w-7xl mx-auto px-6 md:px-12 lg:px-16 gap-12 pt-28 pb-16 lg:pt-28 lg:pb-16">

        {/* ── LEFT — TEXT CONTENT ── */}
        <div className="flex-1 flex flex-col items-start text-left max-w-xl">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className=" w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              Available for work
            </span>
          </div>

          {/* name */}
          <h1
            className="font-extrabold text-gray-900 leading-none tracking-tight mb-3"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            Hi, I'm <br />
            <span>Faidat Olawuyi</span>
            <span className="text-[#D63384]">.</span>
          </h1>

          {/* title */}
          <h2
            className="font-semibold text-gray-400 leading-snug mb-6"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)" }}
          >
            Frontend Developer{" "}
            <span className="text-[#D63384]">&</span> IT Professional
          </h2>

          {/* bio */}
          <p
            className="text-gray-500 leading-relaxed mb-8"
            style={{ fontSize: "clamp(14px, 1.4vw, 16px)" }}
          >
            I build{" "}
            <strong className="text-gray-800 font-medium">
              clean, accessible interfaces
            </strong>{" "}
            with React and JavaScript — and I understand what's running
            underneath them. IT diploma in cybersecurity and networking.{" "}
            <strong className="text-gray-800 font-medium">
              Security-aware frontend developer.
            </strong>
          </p>

          {/* skill tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Cybersecurity",
              
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white/60 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 ">
           <button
  onClick={() => {
    const el = document.getElementById("projects");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }}
  className="px-7 py-3  bg-[#D63384] rounded-full border border-gray-300 text-white text-sm font-medium hover:border-[#D63384] hover:text-[#D63384] transition-all duration-300"
>
  See my work
</button>
            <a
              href="/cv.pdf"
              download
              className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-[#D63384] hover:text-[#D63384] transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* stats row */}
          <div className="flex gap-8 mt-12 border-t border-gray-100 pt-8">
            {[
              { num: "2+", label: "Years coding" },
              { num: "10+", label: "Projects built" },
              { num: "2",   label: "Disciplines" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-gray-900 leading-none">
                  {stat.num}
                </p>
                <p className="text-xs text-gray-400 mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT — IMAGE ── */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <div className="relative w-[300px] h-[380px] md:w-[360px] md:h-[450px] lg:w-[420px] lg:h-[520px]">

            {/* decorative border frame */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-[#D63384]/30 z-0" />

            {/* pink blob glow behind image */}
            <div className="absolute inset-0 rounded-5xl bg-gradient-to-br from-pink-100 to-purple-100 blur-2xl opacity-60 z-0" />

            {/* the image */}
            <img
              src={heroImage}
              alt="Faidat — Frontend Developer & IT Professional"
              className="relative z-10 w-full h-full object-cover object-top rounded-3xl shadow-2xl"
            />

            {/* floating badge — top right */}
            <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D63384] animate-pulse" />
              <span className="text-xs font-medium text-gray-700">
                Open to work
              </span>
            </div>

            {/* floating badge — bottom left */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                Stack
              </p>
              <p className="text-xs font-semibold text-gray-800 mt-0.5">
                React · JS · Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          Scroll
        </span>
        <span className="w-[1px] h-8 bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
