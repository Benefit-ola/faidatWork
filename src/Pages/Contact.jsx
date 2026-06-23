import React, { useState } from "react";
import { SiGithub,  SiWhatsapp } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "olawuyiodunolafaidat408@gmail.com",      
    href: "mailto:olawuyiodunolafaidat408@gmail.com",
    icon: <HiOutlineMail className="text-xl" />,
    color: "#D63384",
    bg: "bg-pink-50",
    border: "border-pink-200",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/faidat olawuyi", 
    href: "https://linkedin.com/in/faidatolawuyi",
    icon: <FaLinkedin className="text-xl" />,
    color: "#0A66C2",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    label: "GitHub",
    value: "github.com/Benefit-ola",      
    href: "https://github.com/Benefit-ola",
    icon: <SiGithub className="text-xl" />,
    color: "#181717",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
  {
    label: "WhatsApp",
    value: "+234 08143368795",             
    href: "https://wa.me/23408143368795",    
    icon: <SiWhatsapp className="text-xl" />,
    color: "#25D366",
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to EmailJS, Formspree, or your backend here
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#fdfcfb] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#D63384]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#D63384]">
              Let's talk
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Get in <span className="text-[#D63384]">Touch</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Open to frontend roles, freelance projects, and collaborations.
              Feel free to reach out — I respond within 24 hours.
            </p>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — CONTACT LINKS + INFO */}
          <div className="flex flex-col gap-8">

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Let's build something together.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether you have a project in mind, a role you think I'd be a great fit for,
                or just want to connect — my inbox is always open.
              </p>
            </div>

            {/* contact cards */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-2xl border ${link.border} ${link.bg} hover:shadow-md transition-all duration-300`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm flex-shrink-0"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {link.value}
                    </p>
                  </div>
                  <BsArrowRight
                    className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200"
                  />
                </a>
              ))}
            </div>

            {/* availability note */}
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900 font-semibold">Currently available</strong> for
                frontend roles and freelance projects.
              </p>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-2xl">
                  🎉
                </div>
                <h4 className="text-lg font-bold text-gray-900">Message sent!</h4>
                <p className="text-sm text-gray-500">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-2 text-sm text-[#D63384] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-gray-900 mb-6">Send a message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#D63384] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#D63384] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#D63384] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#D63384] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#D63384] text-white text-sm font-medium hover:bg-[#b02670] transition-colors duration-300 shadow-md shadow-pink-200"
                  >
                    Send message
                    <BsArrowRight />
                  </button>

                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
