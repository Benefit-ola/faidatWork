import React from "react";
import { FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/faidatolawuyi", icon: <FiLinkedin />, hoverColor: "hover:text-[#0A66C2]" },
  { label: "GitHub",   href: "https://github.com/Benefit-ola",      icon: <FaGithub />,  hoverColor: "hover:text-gray-100" },
  { label: "Twitter",  href: "https://twitter.com/OFaidat98283",     icon: <FaTwitter />, hoverColor: "hover:text-[#1DA1F2]" },
  { label: "WhatsApp", href: "https://wa.me/23408143368795",           icon: <ImWhatsapp />,hoverColor: "hover:text-[#25D366]" },
];

const navLinks = [
  { name: "Home",     id: "home" },
  { name: "About",    id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills",   id: "skills" },
  { name: "Contact",  id: "contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-400 pt-16 pb-8 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── TOP ROW ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-gray-800">

          {/* brand */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => scrollTo("home")}
              className="text-2xl font-extrabold tracking-tight text-white w-fit"
            >
              Faidat<span className="text-[#D63384]">Works</span>
            </button>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Frontend developer and IT professional based in Nigeria. Building clean,
              accessible, and security-aware web experiences.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-xl text-gray-500 transition-colors duration-200 ${s.hoverColor}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* nav links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
              Navigation
            </h4>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-left text-gray-400 hover:text-[#D63384] transition-colors duration-200 w-fit"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* availability */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
              Availability
            </h4>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-gray-300 font-medium">Open to work</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Available for frontend roles, freelance projects, and collaborations.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="mt-3 w-fit text-sm font-medium text-[#D63384] border border-[#D63384]/40 px-4 py-2 rounded-full hover:bg-[#D63384] hover:text-white transition-all duration-300"
            >
              Get in touch →
            </button>
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Olawuyi Faidat. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Made with <span className="text-[#D63384]">♥</span> in Nigeria
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#D63384] transition-colors duration-200 group"
          >
            Back to top
            <span className="w-7 h-7 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-[#D63384] transition-colors duration-200">
              <FaArrowUp className="text-xs" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
