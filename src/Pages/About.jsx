
import aboutImage from "../assets/laptop.jpg"; // replace with your about image
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineSchool, MdOutlineCode } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";

const highlights = [
  {
    icon: <MdOutlineCode className="text-[#D63384] text-xl" />,
    title: "Frontend Development",
    desc: "Building responsive, accessible UIs with React, TypeScript and Tailwind CSS.",
  },
  {
    icon: <MdOutlineSchool className="text-[#D63384] text-xl" />,
    title: "IT Diploma",
    desc: "Formally trained in cybersecurity, networking, and C programming — not just a self-taught developer.",
  },
  {
    icon: <BsPersonCheck className="text-[#D63384] text-xl" />,
    title: "Security-Aware",
    desc: "I write frontend code with security principles in mind — from input validation to safe auth flows.",
  },
];

const facts = [
  { label: "Location", value: "Nigeria 🇳🇬" },
  { label: "Availability", value: "Open to work" },
  { label: "Experience", value: "2+ Years coding" },
  { label: "Education", value: "Diploma in IT" },
  { label: "Focus", value: "Frontend + Security" },
  { label: "Languages", value: "JS · TS · C" },
];

const About = () => {
  return (
    <section className="w-full bg-[#fdfcfb] py-15 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col  mb-16 items-center">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-[#D63384]">Me</span>
          </h2>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* LEFT — IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[380px] md:w-[380px] md:h-[460px]">

              {/* offset decorative frame */}
              <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-2 border-[#D63384]/20 z-0" />

              {/* background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-pink-100 to-purple-50 blur-2xl opacity-50 z-0" />

              {/* image */}
              <img
                src={aboutImage}
                alt="Faidat Olawuyi — About"
                className="relative z-10 w-full h-full object-cover object-top rounded-3xl shadow-2xl"
              />

              {/* experience badge */}
              <div className="absolute -top-5 -right-5 z-20 bg-white rounded-2xl shadow-lg px-5 py-4 border border-gray-100 text-center">
                <p className="text-2xl font-extrabold text-gray-900 leading-none">2+</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                  Years coding
                </p>
              </div>

              {/* location badge */}
              <div className="absolute -bottom-5 -left-5 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-2">
                <HiOutlineLocationMarker className="text-[#D63384] text-lg" />
                <span className="text-xs font-semibold text-gray-800">Nigeria 🇳🇬</span>
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="flex flex-col gap-6">

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              A frontend developer who understands{" "}
              <span className="text-[#D63384]">what's under the hood.</span>
            </h3>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              I'm <strong className="text-gray-800 font-semibold">Olawuyi Faidat</strong>, a junior
              frontend developer based in Nigeria with a Diploma in Information Technology. My path
              into web development started with a simple curiosity — I wanted to understand how
              websites actually work. That curiosity never stopped.
            </p>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              Today I build <strong className="text-gray-800 font-semibold">responsive, accessible,
              and visually polished web applications</strong> using React, TypeScript, and Tailwind CSS.
              What sets me apart is my IT background — I've formally studied cybersecurity,
              networking, and C programming, which means I bring a{" "}
              <strong className="text-gray-800 font-semibold">security-aware mindset</strong> to
              every interface I build.
            </p>

            <p className="text-gray-500 leading-relaxed text-[15px]">
              When I'm not coding, you'll find me exploring new technologies, reading tech blogs,
              or enjoying good nature — always learning, always building.
            </p>

            {/* quick facts grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
                >
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800">{fact.value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/cv.pdf"
                download
                className="px-7 py-3 rounded-full bg-[#D63384] text-white text-sm font-medium hover:bg-[#b02670] transition-colors duration-300 shadow-md shadow-pink-200"
              >
                Download CV
              </a>
             <button
  onClick={() => {
    const el = document.getElementById("projects");
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }}
  className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-[#D63384] hover:text-[#D63384] transition-all duration-300"
>
  See my work
</button>
            </div>
          </div>
        </div>

        {/* ── HIGHLIGHTS ROW ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-100 pt-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;