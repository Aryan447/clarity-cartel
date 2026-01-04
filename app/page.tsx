
"use client";

import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navigation = ["Services", "Process", "Who We Help", "Contact"];

const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <main className="min-h-screen flex flex-col bg-[#050509] text-gray-200 selection:bg-sky-500/30">
            {/* Navbar */}
            <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 shadow-lg shadow-blue-500/20 text-sm font-bold text-white ring-1 ring-white/20">
                            CC
                        </div>
                        <span className="font-heading font-bold text-lg tracking-wide text-white uppercase hidden sm:block">
                            Clarity Cartel
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 text-sm font-medium text-gray-400 md:flex">
                        {navigation.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(/\s+/g, "")} `}
                                className="transition-colors hover:text-white"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdMjGmmcA-FMPQB00SHQygNWel9F27Fntik0L5Dy8RpRr-Beg/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/5 px-5 py-2 text-xs font-semibold text-white ring-1 ring-white/10 transition-all hover:bg-white/10 hover:ring-sky-500/50"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Book a call <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </span>
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-sky-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-400"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="border-b border-white/5 bg-black/90 backdrop-blur-xl md:hidden overflow-hidden"
                        >
                            <nav className="flex flex-col p-6 space-y-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(/\s+/g, "")} `}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-lg font-medium text-gray-300 hover:text-white"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Hero */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
                    <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/20 via-blue-900/5 to-transparent blur-3xl opacity-50" />
                    <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[100px] opacity-30 animate-pulse" />
                </div>

                <div className="mx-auto max-w-6xl px-6 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="flex flex-col items-center text-center lg:items-start lg:text-left"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300 mb-8 backdrop-blur-md">
                            <Sparkles className="h-3 w-3" />
                            <span>India’s Premium Clarity Consulting</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl mb-6 text-white">
                            When life gets messy, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 animate-gradient">
                                we bring clarity.
                            </span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed">
                            Career, finance, relationships, or just feeling stuck. We provide direction, structure,
                            and no-nonsense advice tailored for the modern Indian context.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 hover:bg-gray-100"
                            >
                                Get clarity today
                                <ArrowRight className="h-4 w-4" />
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20"
                            >
                                Explore services
                            </a>
                        </motion.div>

                        <motion.div variants={fadeIn} className="mt-16 flex flex-wrap gap-10 text-sm text-gray-500 justify-center lg:justify-start border-t border-white/5 pt-8 w-full lg:w-auto">
                            <div>
                                <div className="font-bold text-white mb-1">Pan-India</div>
                                Remote & accessible
                            </div>
                            <div>
                                <div className="font-bold text-white mb-1">Real outcomes</div>
                                Action plans within 72h
                            </div>
                            <div>
                                <div className="font-bold text-white mb-1">Confidential</div>
                                100% Private
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-24 relative">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeader
                        eyebrow="What we solve"
                        title="One cartel. Every clarity problem."
                        text="Life doesn't come in neat categories. Neither does our advice."
                    />

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <ServiceCard
                            title="Finance & Money"
                            icon="💰"
                            points={["Budgeting mistakes", "Goal-based planning", "Investing basics"]}
                            delay={0}
                        />
                        <ServiceCard
                            title="Career & Students"
                            icon="🎓"
                            points={["Career path choices", "Exam strategy", "Skill roadmaps"]}
                            delay={0.1}
                        />
                        <ServiceCard
                            title="Tech & Decisions"
                            icon="💻"
                            points={["AI & Tech learning", "Stack selection", "Project direction"]}
                            delay={0.2}
                        />
                        <ServiceCard
                            title="Health & Fitness"
                            icon="💪"
                            points={["Habit building", "Lifestyle routines", "Accountability"]}
                            delay={0.3}
                        />
                        <ServiceCard
                            title="Self-Help & Systems"
                            icon="🧠"
                            points={["Overthinking -> Action", "System design", "Decision frameworks"]}
                            delay={0.4}
                        />
                        <ServiceCard
                            title="Relationships"
                            icon="🤝"
                            points={["Communication", "Boundaries", "Life alignment"]}
                            delay={0.5}
                        />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="py-24 bg-gradient-to-b from-black/0 via-white/[0.02] to-black/0 border-y border-white/5">
                <div className="mx-auto max-w-7xl px-6">
                    <SectionHeader
                        eyebrow="How it works"
                        title="Clarity without the drama."
                        text="Simple, structured, outcome-driven process."
                        center
                    />
                    <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

                        <ProcessStep
                            number="01"
                            title="Share your situation"
                            desc="Fill a short form explaining what's confusing or where you're stuck."
                        />
                        <ProcessStep
                            number="02"
                            title="Focused clarity call"
                            desc="We dissect the mess into logic, priorities, and clear options."
                        />
                        <ProcessStep
                            number="03"
                            title="Action blueprint"
                            desc="You leave with concrete steps, timelines, and guardrails."
                        />
                    </div>
                </div>
            </section>

            {/* Who We Help */}
            <section id="whowehelp" className="py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeader
                                eyebrow="Who it's for"
                                title="If clarity is missing, you belong here."
                                text="We don't do motivational fluff. We do strategy."
                            />
                            <div className="mt-10 space-y-6">
                                <AudienceItem
                                    label="Students"
                                    desc="Confused about college, exams (GATE, CAT), or what skills actually matter in the market."
                                />
                                <AudienceItem
                                    label="Working Professionals"
                                    desc="Stuck in a job, looking to switch, or feeling stagnant despite hard work."
                                />
                                <AudienceItem
                                    label="Founders & Creators"
                                    desc="Need to validate ideas, build execution systems, or prioritize tasks."
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
                            <div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 lg:p-12">
                                <h3 className="text-2xl font-bold text-white mb-6">Why choose Clarity Cartel?</h3>
                                <ul className="space-y-4">
                                    {["No generic advice", " tailored to Indian context", "Actionable within 72 hours", "100% Unbiased"].map(item => (
                                        <li key={item} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="h-5 w-5 text-sky-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <div className="text-sm text-gray-400">Trusted by folks from</div>
                                    <div className="mt-4 flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                                        {/* Placeholders for logos if needed, using text for now */}
                                        <span className="font-bold text-lg">IITs</span>
                                        <span className="font-bold text-lg">NITs</span>
                                        <span className="font-bold text-lg">MNCs</span>
                                        <span className="font-bold text-lg">Startups</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#0c1a3b_0,_#050509_70%)] pointer-events-none" />
                <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">
                        Ready to clear the fog?
                    </h2>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdMjGmmcA-FMPQB00SHQygNWel9F27Fntik0L5Dy8RpRr-Beg/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-10 py-5 text-lg font-bold text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 transition-all border border-blue-400/20"
                        >
                            Book your clarity session
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </motion.div>
                    <p className="mt-6 text-sm text-gray-500">
                        Hindi + English available • Confidential • Pan-India
                    </p>
                </div>
            </section>

            <footer className="py-8 border-t border-white/5 bg-black text-center">
                <p className="text-xs text-gray-600">© 2024 Clarity Cartel. All rights reserved.</p>
            </footer>
        </main>
    );
}

// Components

function SectionHeader({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text: string, center?: boolean }) {
    return (
        <div className={cn("max-w-2xl space-y-3", center && "mx-auto text-center")}>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-400">
                {eyebrow}
            </div>
            <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
            <p className="text-base text-gray-400 leading-relaxed">{text}</p>
        </div>
    );
}

function ServiceCard({ title, points, icon, delay }: { title: string; points: string[], icon: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.04] hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10"
        >
            <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform group-hover:bg-sky-500/20 group-hover:border-sky-500/30">
                {icon}
            </div>
            <div className="font-heading font-semibold text-xl text-gray-100 group-hover:text-sky-400 transition-colors">{title}</div>
            <ul className="space-y-3">
                {points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-gray-400 group-hover:text-gray-300">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500/50 group-hover:bg-sky-400" />
                        <span>{p}</span>
                    </li>
                ))}
            </ul>
            <div className="absolute top-6 right-6 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                <ArrowRight className="h-4 w-4 text-sky-400" />
            </div>
        </motion.div>
    );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
    return (
        <div className="relative flex flex-col items-center text-center gap-4 group">
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/10 bg-[#050509] shadow-2xl transition-all group-hover:border-sky-500 group-hover:shadow-sky-500/30">
                <span className="font-mono text-xl font-bold text-gray-500 group-hover:text-sky-400">{number}</span>
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
        </div>
    )
}

function AudienceItem({ label, desc }: { label: string; desc: string }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
                <div className="h-2 w-2 rounded-full bg-sky-500" />
            </div>
            <div>
                <h4 className="text-base font-semibold text-gray-100">{label}</h4>
                <p className="mt-1 text-sm text-gray-400">{desc}</p>
            </div>
        </div>
    )
}

