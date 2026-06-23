import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { BiMenu, BiX } from "react-icons/bi";

const navLinks = [
  { name: "Home",     id: "home" },
  { name: "About",    id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills",   id: "skills" },
];

const NavBar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId]     = useState("home");

  // ── background blur on scroll ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── highlight active section on scroll ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ── smooth scroll to section ──
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <nav
        className={`relative flex items-center justify-between w-full max-w-7xl px-6 md:px-8 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-3 z-50"
        >
          <img
            src={logo}
            alt="Faidat logo"
            className="h-11 w-11 rounded-full bg-[#D63384] hover:rotate-180 transition-transform duration-500"
          />
          <span className="text-xl font-semibold text-gray-800">
            Faidat<span className="text-[#D63384]">Works</span>
          </span>
        </button>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="group relative text-gray-700 uppercase tracking-widest text-sm font-medium hover:text-[#D63384] transition-colors"
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#D63384] transition-all duration-300 ${
                  activeId === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* CONTACT BUTTON — desktop */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-[#D63384] text-[#D63384] text-sm font-medium hover:bg-[#D63384] hover:text-white transition-all duration-300"
          >
            Contact me
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <BiX /> : <BiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full mt-3 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg md:hidden flex flex-col p-5 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left text-sm uppercase tracking-widest font-medium transition-colors ${
                  activeId === link.id
                    ? "text-[#D63384]"
                    : "text-gray-700 hover:text-[#D63384]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 text-center px-5 py-2 rounded-full border border-[#D63384] text-[#D63384] text-sm font-medium hover:bg-[#D63384] hover:text-white transition-all duration-300"
            >
              Contact me
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
