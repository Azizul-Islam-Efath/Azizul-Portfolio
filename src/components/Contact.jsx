import { useState } from "react";
import { Reveal } from "../utils";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 Wire up to Formspree or EmailJS here
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      <Reveal>
        <p className="text-orange-400 text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          04 — Contact
        </p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Work Together</h2>
        <p className="text-zinc-400 mb-16 max-w-md">
          Have a project in mind, a question, or just want to say hi? My inbox is always open.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-16">
        <Reveal delay={0.1}>
          <div className="space-y-8">
            {[
              { label: "Email", value: "azizulislam.efath@gmail.com", href: "mailto:azizulislam.efath@gmail.com", icon: "✉" },
              { label: "GitHub", value: "github.com/Azizul-Islam-Efath", href: "https://github.com/Azizul-Islam-Efath", icon: "⌥" },
              { label: "LinkedIn", value: "linkedin.com/in/azizul-islam-efath", href: "https://www.linkedin.com/in/azizul-islam-efath/", icon: "in" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                className="group flex items-start gap-5 p-5 rounded-xl border border-zinc-800 hover:border-zinc-600 bg-zinc-900/40 hover:bg-zinc-900/80 transition-all duration-200">
                <span className="w-10 h-10 rounded-lg bg-zinc-800 group-hover:bg-orange-500/20 flex items-center justify-center text-orange-400 font-mono text-sm transition-colors">
                  {c.icon}
                </span>
                <div>
                  <p className="text-zinc-500 text-xs mb-1">{c.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-orange-400 transition-colors">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-xs text-zinc-500 mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-zinc-500 mb-1.5">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or just say hi..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-orange-500 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_24px_rgba(249,115,22,0.35)] hover:-translate-y-0.5"
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}