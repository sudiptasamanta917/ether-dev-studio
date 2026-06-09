import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, Linkedin, Github, GraduationCap, Brain, Coffee, Palette, Code2, Globe, Layers, Server, Smartphone, RefreshCw, Sparkles, ExternalLink, Mail, Phone, MapPin, Send, ArrowUp } from "lucide-react";
const profileImg = "/assets/profile-CuWSq2ub.jpg";
const projPanorama = "/assets/project-panorama-CAJXHOSc.png";
const projChess = "/assets/project-chess-w8xZSz6S.png";
const projWallet = "/assets/project-wallet-dWzvqm-a.png";
const projEduEcom = "/assets/project-edusathi-ecom-KAKzU6Cq.jpg";
const projEdu = "/assets/project-edusathi-CoweLco_.png";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
async function downloadResume(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    window.open(url, "_blank");
  }
}
function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { id, className: "relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32", children: [
    (eyebrow || title) && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, margin: "-80px" },
        variants: fadeUp,
        className: "mb-14 max-w-2xl",
        children: [
          eyebrow && /* @__PURE__ */ jsxs("span", { className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" }),
            eyebrow
          ] }),
          title && /* @__PURE__ */ jsx("h2", { className: "text-4xl font-semibold leading-tight md:text-5xl", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground md:text-lg", children: subtitle })
        ]
      }
    ),
    children
  ] });
}
const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx("header", { className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4", children: /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`,
      children: [
        /* @__PURE__ */ jsxs("a", { href: "#home", className: "flex items-center gap-2 font-display text-sm font-semibold", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground", children: "S" }),
          /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline", children: [
            "Sudipta Samanta",
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-1 md:flex", children: navItems.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: n.href,
            className: "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground",
            children: n.label
          }
        ) }, n.href)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_-4px_var(--primary)] md:inline-flex",
              children: "Hire Me"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              onClick: () => setOpen((o) => !o),
              className: "grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-4 bg-foreground transition ${open ? "translate-y-1 rotate-45" : ""}` }),
                /* @__PURE__ */ jsx("span", { className: `block h-0.5 w-4 bg-foreground transition ${open ? "-translate-y-1 -rotate-45" : ""}` })
              ] })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 top-full mt-2 rounded-2xl p-3 glass-strong md:hidden", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col", children: [
          navItems.map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              onClick: () => setOpen(false),
              href: n.href,
              className: "block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground",
              children: n.label
            }
          ) }, n.href)),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground",
              children: "Hire Me"
            }
          )
        ] }) })
      ]
    }
  ) });
}
function AmbientBackground() {
  return /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--violet-glow)] opacity-20 blur-3xl animate-pulse-glow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--cyan-glow)] opacity-15 blur-3xl animate-pulse-glow", style: { animationDelay: "1.5s" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[var(--blue-glow)] opacity-15 blur-3xl animate-pulse-glow", style: { animationDelay: "3s" } }),
    /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-[0.035]", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "grid", width: "40", height: "40", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "white", strokeWidth: "0.5" }) }) }),
      /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
    ] })
  ] });
}
const roles = ["Full Stack Developer", "MERN Stack Developer", "Web Designer"];
function TypingText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = roles[idx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);
  return /* @__PURE__ */ jsxs("span", { className: "text-gradient", children: [
    text,
    /* @__PURE__ */ jsx("span", { className: "ml-0.5 inline-block w-0.5 -translate-y-0.5 bg-primary align-middle animate-blink", style: { height: "1em" } })
  ] });
}
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return /* @__PURE__ */ jsx("section", { id: "home", ref, className: "relative flex min-h-screen items-center px-5 pt-32 sm:px-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_1fr]", children: [
    /* @__PURE__ */ jsxs(motion.div, { style: { y }, initial: "hidden", animate: "show", variants: fadeUp, children: [
      /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
        /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" }),
        "Available for new opportunities"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl", children: [
        "Sudipta",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Samanta." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-lg text-muted-foreground md:text-xl", children: /* @__PURE__ */ jsx(TypingText, {}) }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground", children: "Professional software developer with a strong interest in modern web design and full stack engineering. I build elegant, scalable and user-friendly digital experiences." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#contact",
            className: "group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_28px_-4px_var(--primary)]",
            children: [
              "Hire Me",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#projects",
            className: "inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-surface",
            children: "View Projects"
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/resume.pdf",
            onClick: (e) => {
              e.preventDefault();
              downloadResume("/resume.pdf", "Sudipta-Samanta-Resume.pdf");
            },
            className: "inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            "aria-label": "Download Resume",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
              " Resume"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center gap-4 text-muted-foreground", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.linkedin.com/in/sudipta-samanta-194959219",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "LinkedIn",
            className: "grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:border-primary hover:text-primary",
            children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://github.com/sudiptasamanta917",
            target: "_blank",
            rel: "noreferrer",
            "aria-label": "GitHub",
            className: "grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:border-primary hover:text-primary",
            children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs", children: "scroll ↓" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
        className: "relative mx-auto w-full max-w-[420px]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-[var(--cyan-glow)] via-[var(--blue-glow)] to-[var(--violet-glow)] opacity-30 blur-3xl animate-pulse-glow" }),
          /* @__PURE__ */ jsxs("div", { className: "gradient-border relative aspect-square overflow-hidden rounded-full animate-float", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: profileImg,
                alt: "Portrait of Sudipta Samanta",
                width: 768,
                height: 768,
                className: "h-full w-full object-center"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "gradient-border-inner rounded-full" })
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.6 },
              className: "absolute -left-4 top-10 rounded-xl px-3 py-2 text-xs font-medium glass",
              children: /* @__PURE__ */ jsx("span", { className: "text-gradient font-mono", children: "<React />" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: 0.8 },
              className: "absolute -right-2 top-1/3 rounded-xl px-3 py-2 text-xs font-medium glass",
              children: /* @__PURE__ */ jsx("span", { className: "font-mono text-primary", children: "node.js" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1 },
              className: "absolute -bottom-4 left-1/4 rounded-xl px-3 py-2 text-xs font-medium glass",
              children: /* @__PURE__ */ jsx("span", { className: "font-mono text-[color:var(--violet-glow)]", children: "MongoDB · Express" })
            }
          )
        ]
      }
    )
  ] }) });
}
const stats = [
  { label: "Years of Experience", value: "1.5+" },
  { label: "Completed Projects", value: "15+" },
  { label: "Technologies", value: "12+" },
  { label: "Client Satisfaction", value: "100%" }
];
function About() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "about",
      eyebrow: "About me",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Calm thinker. ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Careful builder." })
      ] }),
      subtitle: "I'm an introvert with a strong love for thinking through problems before writing a line of code. Peaceful focus is how I do my best work — designing interfaces and engineering full stack systems that feel effortless to use.",
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: { once: true }, variants: fadeUp, className: "rounded-3xl p-7 glass", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4 text-primary" }),
            "Education"
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 text-xl font-semibold", children: "B.Tech, Computer Science & Engineering" }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "MAKAUT University · Graduated 2024" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-sm", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "CGPA" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono text-base font-semibold text-gradient", children: "8.57 / 10" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-2 gap-3", children: [
            { icon: Brain, label: "Strong thinker" },
            { icon: Coffee, label: "Peaceful focus" },
            { icon: Palette, label: "Design-driven" },
            { icon: Code2, label: "Full stack" }
          ].map((t) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-xs", children: [
            /* @__PURE__ */ jsx(t.icon, { className: "h-4 w-4 text-primary" }),
            t.label
          ] }, t.label)) })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: { once: true }, variants: fadeUp, className: "grid grid-cols-2 gap-4", children: [
          stats.map((s, i) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: i * 0.08 },
              className: "rounded-2xl p-5 glass hover:glow-cyan transition-shadow",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl font-semibold text-gradient md:text-4xl", children: s.value }),
                /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-muted-foreground", children: s.label })
              ]
            },
            s.label
          )),
          /* @__PURE__ */ jsx("div", { className: "col-span-2 rounded-2xl p-5 glass", children: /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "I believe great software is born from quiet thinking — understanding the problem, shaping the right experience, and then translating it into clean, scalable code." }) })
        ] })
      ] })
    }
  );
}
const skillBars = [
  { name: "Frontend Development", value: 92 },
  { name: "React.js", value: 90 },
  { name: "Backend Development", value: 82 },
  { name: "Node.js / Express", value: 84 },
  { name: "MongoDB / MySQL", value: 78 },
  { name: "UI / Responsive Design", value: 88 }
];
const techStack = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "REST APIs"
];
function Skills() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "skills",
      eyebrow: "Skills",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "The toolkit behind ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "every build." })
      ] }),
      subtitle: "A mix of engineering discipline and design sensibility — full stack development with a careful eye for the user.",
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: skillBars.map((s, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.06 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: s.name }),
                /* @__PURE__ */ jsxs("span", { className: "font-mono text-muted-foreground", children: [
                  s.value,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-2 overflow-hidden rounded-full bg-surface", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${s.value}%` },
                  viewport: { once: true },
                  transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.06 },
                  className: "h-full rounded-full bg-gradient-to-r from-[var(--cyan-glow)] via-[var(--blue-glow)] to-[var(--violet-glow)] shadow-[0_0_12px_var(--primary)]"
                }
              ) })
            ]
          },
          s.name
        )) }),
        /* @__PURE__ */ jsxs(motion.div, { initial: "hidden", whileInView: "show", viewport: { once: true }, variants: fadeUp, className: "rounded-3xl p-6 glass", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-muted-foreground", children: "Tech I work with" }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: techStack.map((t, i) => /* @__PURE__ */ jsx(
            motion.span,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { delay: i * 0.04 },
              whileHover: { y: -2 },
              className: "cursor-default rounded-xl border border-border bg-surface/60 px-3 py-2 text-xs font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary",
              children: t
            },
            t
          )) }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 grid grid-cols-3 gap-3", children: [
            { label: "Problem solving", icon: Brain },
            { label: "Design thinking", icon: Palette },
            { label: "Clean code", icon: Code2 }
          ].map((c) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border p-3 text-center", children: [
            /* @__PURE__ */ jsx(c.icon, { className: "mx-auto h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-[11px] text-muted-foreground", children: c.label })
          ] }, c.label)) })
        ] })
      ] })
    }
  );
}
const experiences = [
  {
    role: "Junior MERN Stack Developer",
    company: "GS3 Solutions Pvt Ltd",
    period: "Jul 2025 — Mar 2026",
    desc: "Developed and maintained MERN stack applications, improved website performance, and contributed across the frontend and backend stack."
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bitslate Infotech Pvt Ltd",
    period: "Aug 2024 — Dec 2024",
    desc: "Worked on full stack web applications and modern UI development for production-grade client projects."
  }
];
function Experience() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "experience",
      eyebrow: "Experience",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "A journey of ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "shipped work." })
      ] }),
      children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent md:left-1/2" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-10", children: experiences.map((exp, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: `relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${i % 2 === 0 ? "md:[&>div]:col-start-2" : ""}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-2.5 top-2 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-[0_0_18px_var(--primary)] md:left-1/2 md:-translate-x-1/2" }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl p-6 glass", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-wide text-primary", children: exp.period }),
                /* @__PURE__ */ jsx("h3", { className: "mt-2 text-lg font-semibold", children: exp.role }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: exp.company }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: exp.desc })
              ] })
            ]
          },
          exp.role
        )) })
      ] })
    }
  );
}
const services = [
  { icon: Globe, title: "Full Website Development", desc: "End-to-end builds from idea to deployment." },
  { icon: Layers, title: "Frontend Development", desc: "Pixel-precise UIs built with React and Tailwind." },
  { icon: Server, title: "Backend Development", desc: "Node.js, Express and clean REST APIs." },
  { icon: Code2, title: "MERN Stack Development", desc: "MongoDB · Express · React · Node — fully wired." },
  { icon: Palette, title: "Modern UI / UX Design", desc: "Thoughtful, calm interfaces that feel intuitive." },
  { icon: Smartphone, title: "Responsive Web Design", desc: "Fluid layouts that adapt to every device." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Refreshed visuals and reworked experience flows." },
  { icon: Sparkles, title: "End-to-End Solutions", desc: "Full ownership — design, build, ship, iterate." }
];
function Services() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "services",
      eyebrow: "Services",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "What I can ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "help you build." })
      ] }),
      children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05 },
          whileHover: { y: -4 },
          className: "group relative overflow-hidden rounded-2xl p-6 glass transition-shadow hover:glow-cyan",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-4 grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-primary", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.desc })
            ] })
          ]
        },
        s.title
      )) })
    }
  );
}
const projects = [
  {
    title: "Panorama Exports — Website Redesign",
    desc: "Complete visual refresh for an export business — improved hierarchy, modern hero and a faster, friendlier experience.",
    tags: ["React", "Tailwind", "UI Redesign"],
    image: projPanorama,
    demo: "https://panorama-exports.vercel.app",
    code: "https://github.com/sudiptasamanta917/Panorama-Exports"
  },
  {
    title: "Dynamo Chess — Platform Redesign",
    desc: "Rebuilt the platform's design language and fixed core functionality issues across the user flow.",
    tags: ["React", "Node.js", "UX"],
    image: projChess,
    demo: "https://dynamo-chess-nine.vercel.app",
    code: "https://github.com/sudiptasamanta917/Dynamo-Chess"
  },
  {
    title: "Wallet Management System",
    desc: "Track earnings, expenses, spending history and total balance — a clean personal finance dashboard.",
    tags: ["MERN", "MongoDB", "Charts"],
    image: projWallet,
    demo: "https://sudiptasamanta917.github.io/Wallet_Project",
    code: "https://github.com/sudiptasamanta917/Wallet_Project"
  },
  {
    title: "Edusathi — Website Redesign",
    desc: "Improved UI, responsiveness and engagement across the platform's marketing surface.",
    tags: ["UI", "Responsive", "Redesign"],
    image: projEdu,
    demo: "https://edusathi.net",
    code: "https://github.com/sudiptasamanta917/edusathi_new_project"
  },
  {
    title: "Edusathi — Ecommerce Platform",
    desc: "Built ecommerce functionality and responsive UI for an education marketplace.",
    tags: ["React", "Express", "MongoDB"],
    image: projEduEcom,
    demo: "",
    code: ""
  }
];
function Projects() {
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "projects",
      eyebrow: "Selected work",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Projects built with ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "intent." })
      ] }),
      subtitle: "A small selection of recent client and product work.",
      children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
        motion.article,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { delay: i * 0.06 },
          className: "group relative overflow-hidden rounded-3xl glass",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: p.image,
                  alt: p.title,
                  loading: "lazy",
                  width: 1024,
                  height: 640,
                  className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: p.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-muted-foreground", children: t }, t)) }),
              /* @__PURE__ */ jsx("h3", { className: "mt-3 text-lg font-semibold", children: p.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.desc }),
              /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("a", { href: p.demo, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.03]", children: [
                  /* @__PURE__ */ jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
                  " Live demo"
                ] }),
                /* @__PURE__ */ jsxs("a", { href: p.code, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground", children: [
                  /* @__PURE__ */ jsx(Github, { className: "h-3.5 w-3.5" }),
                  " Code"
                ] })
              ] })
            ] })
          ]
        },
        p.title
      )) })
    }
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx(
    Section,
    {
      id: "contact",
      eyebrow: "Contact",
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Let's build something ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "together." })
      ] }),
      subtitle: "Have a project in mind or just want to say hello? Drop a message — I usually reply within a day.",
      children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-[1fr_1.2fr]", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          [
            { icon: Mail, label: "Email", value: "sudiptasamanta917@gmail.com", href: "mailto:sudiptasamanta917@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 8373041030", href: "tel:+918373041030" },
            { icon: MapPin, label: "Location", value: "Panskura, Purba Medinipur, WB, India" }
          ].map((c) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: c.href ?? "#",
              className: "flex items-start gap-4 rounded-2xl p-5 glass transition-shadow hover:glow-cyan",
              children: [
                /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-primary", children: /* @__PURE__ */ jsx(c.icon, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: c.label }),
                  /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-sm font-medium", children: c.value })
                ] })
              ]
            },
            c.label
          )),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl p-5 glass", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Social" }),
            /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/sudipta-samanta-194959219", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("a", { href: "https://github.com/sudiptasamanta917", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl glass", children: /* @__PURE__ */ jsx(
            "iframe",
            {
              title: "Location map",
              className: "h-56 w-full grayscale [filter:invert(0.9)_hue-rotate(180deg)]",
              src: "https://www.google.com/maps?q=Panskura,Purba+Medinipur,West+Bengal,India&output=embed",
              loading: "lazy"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.form,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true },
            variants: fadeUp,
            onSubmit: (e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 2500);
            },
            className: "rounded-3xl p-7 glass-strong",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsx(Field, { label: "Your name", name: "name", placeholder: "Jane Doe" }),
                /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", placeholder: "jane@example.com" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(Field, { label: "Subject", name: "subject", placeholder: "Project enquiry" }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs uppercase tracking-wide text-muted-foreground", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 5,
                    placeholder: "Tell me a bit about your project…",
                    className: "w-full resize-none rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "group mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan-glow)] via-primary to-[var(--violet-glow)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_-6px_var(--primary)]",
                  children: [
                    sent ? "Message sent ✓" : "Send message",
                    /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs uppercase tracking-wide text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        required: true,
        type,
        name,
        placeholder,
        className: "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-display text-base font-semibold", children: "Sudipta Samanta" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Designing modern digital experiences." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/sudipta-samanta-194959219", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://github.com/sudiptasamanta917", target: "_blank", rel: "noreferrer", className: "grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsx("a", { href: "mailto:sudiptasamanta917@gmail.com", className: "grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary", children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sudipta Samanta. All rights reserved."
    ] })
  ] }) });
}
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return /* @__PURE__ */ jsx(
    "button",
    {
      "aria-label": "Scroll to top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      className: "fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_24px_-4px_var(--primary)] transition-transform hover:scale-105",
      children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" })
    }
  );
}
function Portfolio() {
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(AmbientBackground, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Services, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(ScrollTop, {})
  ] });
}
const SplitComponent = Portfolio;
export {
  SplitComponent as component
};
