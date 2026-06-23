import React, { useState } from "react";
import { SiGithub, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiSupabase } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdOutlineLock } from "react-icons/md";

const filters = ["All", "React", "Next.js", "TypeScript", "C Programming", "JavaScript"];

const projects = [

    {
    title: "C Programs in React",
    description:
      "A collection of programs originally written in C for my IT diploma — rebuilt as interactive React web apps. Includes a basic calculator and a quadratic equation solver with a live parabola graph, discriminant analysis, and complex root support.",
    tags: ["C Programming", "React", "Tailwind CSS", "Chart.js"],
    icons: [<TbBrandCpp color="#00599C" />, <SiReact color="#61DAFB" />, <SiTailwindcss color="#06B6D4" />],
    github: "https://github.com/Benefit-ola/c-programs-in-react.git",
    live: "https://c-programs-in-react.vercel.app", // replace with your actual URL
    nda: false,
    category: ["React", "C Programming"],
    featured: true,
  },
  
  {
    title: "JS Projects",
    description:
      "A collection of JavaScript projects — a calculator and a todo app with localStorage persistence, filter tabs, and task stats. Built with React and Tailwind CSS.",
    tags: ["JavaScript", "React", "Tailwind CSS", "localStorage"],
    icons: [<SiJavascript color="#F7DF1E" />, <SiReact color="#61DAFB" />],
    github: "https://github.com/Benefit-ola/js-projects.git",
    live: "https://js-projects-9255.vercel.app", // replace with your actual URL
    nda: false,
    category: ["JavaScript", "React"],
    featured: false,
  },
    {
    title: "Recipe App",
    description:
      "A recipe discovery app built with React and the DummyJSON API. Features live search, difficulty filtering, skeleton loading states, and a full recipe detail page with ingredients and step-by-step instructions.",
    tags: ["React", "REST API", "React Router", "Tailwind CSS"],
    icons: [<SiReact color="#61DAFB" />, <SiJavascript color="#F7DF1E" />, <SiTailwindcss color="#06B6D4" />],
    github: "https://github.com/Benefit-ola/Recipes.git",
    live: "https://recipes-uc2b.vercel.app", // replace with your actual URL
    nda: false,
    category: ["React"],
    featured: true,
  },
  {
    title: "Fashion E-Commerce App",
    description:
      "A full-featured fashion store with product listings, cart management, filtering, and a review system. Built with React Context for global state and React Router for navigation.",
    tags: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    icons: [<SiReact color="#61DAFB" />, <SiTypescript color="#3178C6" />, <SiTailwindcss color="#06B6D4" />],
    github: "https://github.com/Benefit-ola/FashionScent.git",
    live: null,
    nda: true,
    category: ["React", "TypeScript"],
    featured: true,
  },
  {
    title: "MTA Academy Project",
    description:
      "A conversion-focused bootcamp landing page with animated sections, live countdown timers, scroll-triggered animations, and a fully responsive mobile menu.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [<SiReact color="#61DAFB" />, <SiTailwindcss color="#06B6D4" />],
    github: "https://github.com/Benefit-ola/MTA-Academy.git",
    live: null,
    nda: true,
    category: ["React"],
    featured: false,
  },
  {
    title: "Marketplace Platform",
    description:
      "A Next.js marketplace with Supabase backend, live search with typeahead, store cards, product reviews, and advanced filtering — built for a real client.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    icons: [<SiNextdotjs color="#000000" />, <SiTypescript color="#3178C6" />, <SiSupabase color="#3ECF8E" />],
    github: "https://github.com/Benefit-ola/marketplace.git",
    live: null,
    nda: true,
    category: ["Next.js", "TypeScript"],
    featured: true,
  },


];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section className="w-full bg-[#fdfcfb] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              What I've built
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              My <span className="text-[#D63384]">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              A selection of real projects — client work, personal builds, and academic
              work spanning frontend and systems programming.
            </p>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-[#D63384] text-white shadow-md shadow-pink-200"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-[#D63384] hover:text-[#D63384]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-5"
            >
              {/* featured badge */}
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-pink-50 text-[#D63384] border border-pink-200">
                  Featured
                </span>
              )}

              <div className="flex flex-col gap-4">
                {/* tech icons */}
                <div className="flex gap-3 text-2xl">
                  {project.icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>

                {/* title + description */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 pr-16">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* links row */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#D63384] transition-colors duration-200"
                >
                  <SiGithub className="text-lg" />
                  GitHub
                </a>

                {/* Live / NDA */}
                {project.nda ? (
                  <span className="flex items-center gap-1.5 text-xs text-gray-400 italic">
                    <MdOutlineLock className="text-sm" />
                    NDA — no live link
                  </span>
                ) : project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-[#D63384] hover:underline transition-colors duration-200"
                  >
                    <HiOutlineExternalLink className="text-base" />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/Benefit-ola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            <SiGithub />
            Visit my GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;