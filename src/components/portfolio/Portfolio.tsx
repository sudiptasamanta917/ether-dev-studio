import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Server,
  Layers,
  Palette,
  Smartphone,
  RefreshCw,
  Globe,
  Sparkles,
  ExternalLink,
  Send,
  ArrowUp,
  Brain,
  Coffee,
  GraduationCap,
} from "lucide-react";

import profileImg from "@/assets/profile.jpg";
import projPanorama from "@/assets/project-panorama.jpg";
import projChess from "@/assets/project-chess.jpg";
import projWallet from "@/assets/project-wallet.jpg";
import projEduEcom from "@/assets/project-edusathi-ecom.jpg";
import projEdu from "@/assets/project-edusathi.jpg";

/* ----------------------------- Helpers ----------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
      {(eyebrow || title) && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 max-w-2xl"
        >
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{subtitle}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

/* ----------------------------- Nav ----------------------------- */

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            S
          </span>
          <span className="hidden sm:inline">Sudipta<span className="text-muted-foreground">.dev</span></span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] hover:shadow-[0_0_24px_-4px_var(--primary)] md:inline-flex"
          >
            Hire Me
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-4 bg-foreground transition ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-4 bg-foreground transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {open && (
          <div className="absolute inset-x-0 top-full mt-2 rounded-2xl p-3 glass-strong md:hidden">
            <ul className="flex flex-col">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={n.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Hire Me
              </a>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

/* ----------------------------- Background ----------------------------- */

function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[var(--violet-glow)] opacity-20 blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[var(--cyan-glow)] opacity-15 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-[var(--blue-glow)] opacity-15 blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ----------------------------- Hero ----------------------------- */

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

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-0.5 inline-block w-0.5 -translate-y-0.5 bg-primary align-middle animate-blink" style={{ height: "1em" }} />
    </span>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center px-5 pt-32 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div style={{ y }} initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Available for new opportunities
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Sudipta
            <br />
            <span className="text-gradient">Samanta.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
            <TypingText />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Professional software developer with a strong interest in modern web design and full
            stack engineering. I build elegant, scalable and user-friendly digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_28px_-4px_var(--primary)]"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-surface"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/sudipta-samanta-194959219"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/sudiptasamanta917"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs">scroll ↓</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-[var(--cyan-glow)] via-[var(--blue-glow)] to-[var(--violet-glow)] opacity-30 blur-3xl animate-pulse-glow" />
          <div className="gradient-border relative aspect-square overflow-hidden rounded-[2rem] animate-float">
            <img
              src={profileImg}
              alt="Portrait of Sudipta Samanta"
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
            <div className="gradient-border-inner rounded-[2rem]" />
          </div>

          {/* Floating chips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 top-10 rounded-xl px-3 py-2 text-xs font-medium glass"
          >
            <span className="text-gradient font-mono">{"<React />"}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-2 top-1/3 rounded-xl px-3 py-2 text-xs font-medium glass"
          >
            <span className="font-mono text-primary">node.js</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-4 left-1/4 rounded-xl px-3 py-2 text-xs font-medium glass"
          >
            <span className="font-mono text-[color:var(--violet-glow)]">MongoDB · Express</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----------------------------- About ----------------------------- */

const stats = [
  { label: "Years of Experience", value: "1.5+" },
  { label: "Completed Projects", value: "15+" },
  { label: "Technologies", value: "12+" },
  { label: "Client Satisfaction", value: "100%" },
];

function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>Calm thinker. <span className="text-gradient">Careful builder.</span></>}
      subtitle="I'm an introvert with a strong love for thinking through problems before writing a line of code. Peaceful focus is how I do my best work — designing interfaces and engineering full stack systems that feel effortless to use."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl p-7 glass">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4 text-primary" />
            Education
          </div>
          <h3 className="mt-3 text-xl font-semibold">B.Tech, Computer Science & Engineering</h3>
          <p className="mt-1 text-sm text-muted-foreground">MAKAUT University · Graduated 2024</p>
          <div className="mt-5 flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-sm">
            <span className="text-muted-foreground">CGPA</span>
            <span className="font-mono text-base font-semibold text-gradient">8.57 / 10</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              { icon: Brain, label: "Strong thinker" },
              { icon: Coffee, label: "Peaceful focus" },
              { icon: Palette, label: "Design-driven" },
              { icon: Code2, label: "Full stack" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-xs">
                <t.icon className="h-4 w-4 text-primary" />
                {t.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-5 glass hover:glow-cyan transition-shadow"
            >
              <div className="text-3xl font-semibold text-gradient md:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
          <div className="col-span-2 rounded-2xl p-5 glass">
            <p className="text-sm leading-relaxed text-muted-foreground">
              I believe great software is born from quiet thinking — understanding the problem,
              shaping the right experience, and then translating it into clean, scalable code.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ----------------------------- Skills ----------------------------- */

const skillBars = [
  { name: "Frontend Development", value: 92 },
  { name: "React.js", value: 90 },
  { name: "Backend Development", value: 82 },
  { name: "Node.js / Express", value: 84 },
  { name: "MongoDB / MySQL", value: 78 },
  { name: "UI / Responsive Design", value: 88 },
];

const techStack = [
  "React", "Node.js", "Express.js", "MongoDB", "MySQL",
  "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
  "Git", "REST APIs",
];

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>The toolkit behind <span className="text-gradient">every build.</span></>}
      subtitle="A mix of engineering discipline and design sensibility — full stack development with a careful eye for the user."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-5">
          {skillBars.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{s.name}</span>
                <span className="font-mono text-muted-foreground">{s.value}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.06 }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--cyan-glow)] via-[var(--blue-glow)] to-[var(--violet-glow)] shadow-[0_0_12px_var(--primary)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="rounded-3xl p-6 glass">
          <h3 className="text-sm font-medium text-muted-foreground">Tech I work with</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -2 }}
                className="cursor-default rounded-xl border border-border bg-surface/60 px-3 py-2 text-xs font-medium backdrop-blur transition-colors hover:border-primary hover:text-primary"
              >
                {t}
              </motion.span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: "Problem solving", icon: Brain },
              { label: "Design thinking", icon: Palette },
              { label: "Clean code", icon: Code2 },
            ].map((c) => (
              <div key={c.label} className="rounded-xl border border-border p-3 text-center">
                <c.icon className="mx-auto h-5 w-5 text-primary" />
                <div className="mt-2 text-[11px] text-muted-foreground">{c.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ----------------------------- Experience ----------------------------- */

const experiences = [
  {
    role: "Junior MERN Stack Developer",
    company: "GS3 Solutions Pvt Ltd",
    period: "Jul 2025 — Mar 2026",
    desc: "Developed and maintained MERN stack applications, improved website performance, and contributed across the frontend and backend stack.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Bitslate Infotech Pvt Ltd",
    period: "Aug 2024 — Dec 2024",
    desc: "Worked on full stack web applications and modern UI development for production-grade client projects.",
  },
];

function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A journey of <span className="text-gradient">shipped work.</span></>}
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                i % 2 === 0 ? "md:[&>div]:col-start-2" : ""
              }`}
            >
              <div className="absolute left-2.5 top-2 grid h-4 w-4 place-items-center rounded-full bg-primary shadow-[0_0_18px_var(--primary)] md:left-1/2 md:-translate-x-1/2" />
              <div className="rounded-2xl p-6 glass">
                <div className="text-xs font-mono uppercase tracking-wide text-primary">{exp.period}</div>
                <h3 className="mt-2 text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------- Services ----------------------------- */

const services = [
  { icon: Globe, title: "Full Website Development", desc: "End-to-end builds from idea to deployment." },
  { icon: Layers, title: "Frontend Development", desc: "Pixel-precise UIs built with React and Tailwind." },
  { icon: Server, title: "Backend Development", desc: "Node.js, Express and clean REST APIs." },
  { icon: Code2, title: "MERN Stack Development", desc: "MongoDB · Express · React · Node — fully wired." },
  { icon: Palette, title: "Modern UI / UX Design", desc: "Thoughtful, calm interfaces that feel intuitive." },
  { icon: Smartphone, title: "Responsive Web Design", desc: "Fluid layouts that adapt to every device." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Refreshed visuals and reworked experience flows." },
  { icon: Sparkles, title: "End-to-End Solutions", desc: "Full ownership — design, build, ship, iterate." },
];

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>What I can <span className="text-gradient">help you build.</span></>}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl p-6 glass transition-shadow hover:glow-cyan"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Projects ----------------------------- */

const projects = [
  {
    title: "Panorama Exports — Website Redesign",
    desc: "Complete visual refresh for an export business — improved hierarchy, modern hero and a faster, friendlier experience.",
    tags: ["React", "Tailwind", "UI Redesign"],
    image: projPanorama,
  },
  {
    title: "Dynamo Chess — Platform Redesign",
    desc: "Rebuilt the platform's design language and fixed core functionality issues across the user flow.",
    tags: ["React", "Node.js", "UX"],
    image: projChess,
  },
  {
    title: "Wallet Management System",
    desc: "Track earnings, expenses, buying history and total balance — a clean personal finance dashboard.",
    tags: ["MERN", "MongoDB", "Charts"],
    image: projWallet,
  },
  {
    title: "Edusathi — Ecommerce Platform",
    desc: "Built ecommerce functionality and responsive UI for an education marketplace.",
    tags: ["React", "Express", "MongoDB"],
    image: projEduEcom,
  },
  {
    title: "Edusathi — Website Redesign",
    desc: "Improved UI, responsiveness and engagement across the platform's marketing surface.",
    tags: ["UI", "Responsive", "Redesign"],
    image: projEdu,
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title={<>Projects built with <span className="text-gradient">intent.</span></>}
      subtitle="A small selection of recent client and product work."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl glass"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md border border-border bg-surface/60 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wide text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex items-center gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.03]">
                  <ExternalLink className="h-3.5 w-3.5" /> Live demo
                </a>
                <a href="https://github.com/sudiptasamanta917" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Contact ----------------------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">together.</span></>}
      subtitle="Have a project in mind or just want to say hello? Drop a message — I usually reply within a day."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "sudiptasamanta917@gmail.com", href: "mailto:sudiptasamanta917@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 8373041030", href: "tel:+918373041030" },
            { icon: MapPin, label: "Location", value: "Panskura, Purba Medinipur, WB, India" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="flex items-start gap-4 rounded-2xl p-5 glass transition-shadow hover:glow-cyan"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-primary">
                <c.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</div>
                <div className="mt-0.5 text-sm font-medium">{c.value}</div>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-3 rounded-2xl p-5 glass">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">Social</span>
            <a href="https://www.linkedin.com/in/sudipta-samanta-194959219" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://github.com/sudiptasamanta917" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary">
              <Github className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl glass">
            <iframe
              title="Location map"
              className="h-56 w-full grayscale [filter:invert(0.9)_hue-rotate(180deg)]"
              src="https://www.google.com/maps?q=Panskura,Purba+Medinipur,West+Bengal,India&output=embed"
              loading="lazy"
            />
          </div>
        </div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 2500);
          }}
          className="rounded-3xl p-7 glass-strong"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" placeholder="Project enquiry" />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me a bit about your project…"
              className="w-full resize-none rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
            />
          </div>
          <button
            type="submit"
            className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--cyan-glow)] via-primary to-[var(--violet-glow)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_36px_-6px_var(--primary)]"
          >
            {sent ? "Message sent ✓" : "Send message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
      />
    </div>
  );
}

/* ----------------------------- Footer ----------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row">
        <div>
          <div className="font-display text-base font-semibold">Sudipta Samanta</div>
          <p className="text-xs text-muted-foreground">Designing modern digital experiences.</p>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href="https://www.linkedin.com/in/sudipta-samanta-194959219" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://github.com/sudiptasamanta917" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:sudiptasamanta917@gmail.com" className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:border-primary hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Sudipta Samanta. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ----------------------------- ScrollTop ----------------------------- */

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_24px_-4px_var(--primary)] transition-transform hover:scale-105"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

/* ----------------------------- Page ----------------------------- */

export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </main>
  );
}
