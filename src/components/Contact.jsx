import { useState } from "react";
import { Reveal } from "../utils";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Connect Formspree / EmailJS here

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-6 md:px-16 max-w-6xl mx-auto"
    >
      {/* HEADING */}
      <Reveal>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-5 tracking-tight">
          Let's Work Together
        </h2>

        <p className="text-white/70 max-w-lg leading-relaxed mb-16">
          Have a project idea, collaboration opportunity, or just want to say
          hello? Feel free to reach out anytime.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14">

        {/* LEFT CONTACT CARDS */}
        <Reveal delay={0.1}>
          <div className="space-y-5">

            {[
              {
                label: "Email",
                value: "azizulislam5360@gmail.com",
                href: "mailto:azizulislam5360@gmail.com",
                icon: "✉",
              },

              {
                label: "GitHub",
                value: "Azizul-Islam-Efath",
                href: "https://github.com/Azizul-Islam-Efath",
                icon: "⌥",
              },

              {
                label: "LinkedIn",
                value: "AZIZUL ISLAM",
                href: "https://www.linkedin.com/in/azizulislamefath/",
                icon: "in",
              },

              {
                label: "Facebook",
                value: "Md Azizul Islam",
                href: "https://facebook.com/",
                icon: "f",
              },

              {
                label: "Instagram",
                value: "@azizul",
                href: "https://instagram.com/",
                icon: "◎",
              },

            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-start
                  gap-5
                  p-5
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  hover:bg-white/15
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* ICON */}
                <span
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    text-[#F3DDD0]
                    font-medium
                    text-sm
                    transition-all
                    duration-300
                    group-hover:bg-[#E8C7B6]/20
                    group-hover:text-white
                  "
                >
                  {c.icon}
                </span>

                {/* TEXT */}
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
                    {c.label}
                  </p>

                  <p className="text-white text-sm font-medium group-hover:text-[#F3DDD0] transition-colors duration-300">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="
              p-8
              rounded-[30px]
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
              space-y-5
            "
          >

            {[
              {
                id: "name",
                label: "Name",
                type: "text",
                placeholder: "Your name",
              },

              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "your@email.com",
              },

            ].map((f) => (
              <div key={f.id}>
                <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                  {f.label}
                </label>

                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      [f.id]: e.target.value,
                    })
                  }
                  required
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    focus:border-[#E8C7B6]
                    rounded-2xl
                    px-5
                    py-3.5
                    text-sm
                    text-white
                    placeholder-white/30
                    outline-none
                    transition-all
                    duration-300
                  "
                />
              </div>
            ))}

            {/* MESSAGE */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-white/50 mb-2">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project or just say hello..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                required
                className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  focus:border-[#E8C7B6]
                  rounded-2xl
                  px-5
                  py-4
                  text-sm
                  text-white
                  placeholder-white/30
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-full
                bg-[#E8C7B6]
                text-black
                font-semibold
                hover:-translate-y-1
                hover:shadow-[0_10px_40px_rgba(232,199,182,0.35)]
                transition-all
                duration-300
              "
            >
              {sent ? "Message Sent ✓" : "Send Message"}
            </button>

          </form>
        </Reveal>

      </div>
    </section>
  );
}