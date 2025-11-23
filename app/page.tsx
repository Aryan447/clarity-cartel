// app/page.tsx
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const navigation = ["Services", "Process", "WhoWeHelp", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 text-xs font-bold">
              CC
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-300">
              Clarity Cartel
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            {navigation.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-100 hover:border-sky-500/70 hover:bg-sky-500/10"
          >
            Book a call
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_#1d2b46_0,_#050509_55%)]">
        <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="space-y-8 lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-gray-300">
              <Sparkles className="h-3 w-3 text-sky-400" />
              India’s all-purpose clarity consulting
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                When life gets messy,
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  {" "}
                  we bring clarity.
                </span>
              </h1>
              <p className="max-w-xl text-sm text-gray-300">
                Career, finance, tech choices, fitness, relationships, self-help —
                whatever you’re stuck on, Clarity Cartel gives direction, structure,
                and no-nonsense advice made for Indians.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold text-black shadow-lg shadow-sky-500/30 hover:bg-sky-400"
              >
                Get clarity today
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-xs text-gray-400">
              <div>
                <div className="font-semibold text-gray-100">Pan-India</div>
                Remote & accessible
              </div>
              <div>
                <div className="font-semibold text-gray-100">Real outcomes</div>
                Action plans within 72 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/5 bg-black/80 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="What we solve"
            title="One cartel. Every clarity problem."
            text="Because life doesn’t come in categories — and neither should consulting."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ServiceCard
              title="Finance & Money"
              points={[
                "Budgeting & spending mistakes",
                "Goal-based planning",
                "Beginner investing guidance",
              ]}
            />
            <ServiceCard
              title="Career & Students"
              points={[
                "What path to choose",
                "Study & exam strategy",
                "Skill & project roadmap",
              ]}
            />
            <ServiceCard
              title="Tech & Digital Decisions"
              points={[
                "AI, dev & DS learning paths",
                "Tool & stack selection",
                "Project direction",
              ]}
            />
            <ServiceCard
              title="Health & Fitness"
              points={[
                "Habit building",
                "Lifestyle routines",
                "Accountability frameworks",
              ]}
            />
            <ServiceCard
              title="Self-Help & Productivity"
              points={[
                "Overthinking to action",
                "System design",
                "Decision frameworks",
              ]}
            />
            <ServiceCard
              title="Relationships"
              points={[
                "Communication clarity",
                "Boundaries & conflict",
                "Life direction alignment",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        id="process"
        className="border-b border-white/5 bg-gradient-to-b from-black via-[#050509] to-black py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="How it works"
            title="Clarity without drama."
            text="Simple, structured, outcome-driven."
          />
          <ol className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
            <Step
              step="01"
              title="Share your situation"
              body="Fill a short form — explain what's confusing or stuck."
            />
            <Step
              step="02"
              title="Focused clarity call"
              body="We break the mess into logic, priorities, and options."
            />
            <Step
              step="03"
              title="Action blueprint"
              body="You leave with steps, timelines, and guardrails."
            />
          </ol>
        </div>
      </section>

      {/* Who We Help */}
      <section
        id="whowehelp"
        className="border-b border-white/5 bg-black/90 py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Who it's for"
            title="If clarity is missing, you belong here."
            text="Straight talk, not motivational fluff."
          />
          <div className="mt-8 grid gap-4 text-sm text-gray-200 md:grid-cols-3">
            <PillList
              label="Students"
              items={[
                "College confusion",
                "Exam & GATE prep",
                "What to study next",
              ]}
            />
            <PillList
              label="Working Professionals"
              items={[
                "Job switches",
                "Career stagnation",
                "Skill direction",
              ]}
            />
            <PillList
              label="Founders & Creators"
              items={[
                "Idea clarity",
                "Execution systems",
                "What to prioritize",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[radial-gradient(circle_at_bottom,_#1d2b46_0,_#050509_55%)] py-16"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl font-semibold">
              Book your clarity session.
            </h2>
            <p className="text-sm text-gray-300">
              We’ll add the booking form soon. For now, click below and we’ll reach out.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2 text-xs font-semibold text-black shadow-lg shadow-sky-500/30 hover:bg-sky-400"
            >
              Notify me when booking opens
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            <p className="text-[11px] text-gray-400">
              Hindi + English available • Confidential • Pan-India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-gray-400">
        {label}
      </div>
      <div className="text-xs text-gray-100">{value}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-xl space-y-2">
      <div className="text-xs uppercase tracking-[0.2em] text-gray-400">
        {eyebrow}
      </div>
      <h2 className="text-xl font-semibold text-gray-50">{title}</h2>
      <p className="text-xs text-gray-300">{text}</p>
    </div>
  );
}

function ServiceCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-gray-200">
      <div className="font-semibold text-gray-50">{title}</div>
      <ul className="space-y-1 text-[11px] text-gray-300">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <li className="rounded-2xl border border-white/10 bg-black/60 p-4">
      <div className="text-[11px] font-mono text-sky-400">{step}</div>
      <div className="mt-1 text-sm font-medium text-gray-50">{title}</div>
      <p className="mt-2 text-xs text-gray-300">{body}</p>
    </li>
  );
}

function PillList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold text-gray-50">{label}</div>
      <div className="flex flex-wrap gap-2 text-[11px]">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-gray-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Line({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-xs">
      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
      <span>{text}</span>
    </div>
  );
}

