import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ba Hein Kyaw — Group HR Manager · CHRO-Track Portfolio" },
      {
        name: "description",
        content:
          "HR Operating Framework built across Laos, Myanmar, Thailand & Indonesia — 11 systems, 89 modules. CHRO-track portfolio of Ba Hein Kyaw.",
      },
      { property: "og:title", content: "Ba Hein Kyaw — CHRO-Track Portfolio" },
      {
        property: "og:description",
        content:
          "Enterprise-grade HR infrastructure across 4 SEA jurisdictions. 11 systems · 89 modules · multi-country operations.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const HR_BASE = "https://heindaries.github.io/hr_system/";
const LINKEDIN = "https://www.linkedin.com/in/ba-hein-kyaw";

type ModuleTag = "Interactive" | "Framework";
type Module = { name: string; tag: ModuleTag };
type System = {
  id: string;
  code: string;
  title: string;
  tier: "Operational Foundation" | "Strategic Layer" | "Enterprise Infrastructure";
  summary: string;
  modules: Module[];
};

const SYSTEMS: System[] = [
  {
    id: "s01",
    code: "S01",
    title: "Talent Acquisition & Onboarding",
    tier: "Operational Foundation",
    summary: "End-to-end hiring pipeline across 4 jurisdictions with structured onboarding.",
    modules: [
      { name: "Recruitment Pipeline Dashboard", tag: "Interactive" },
      { name: "Hiring Requisition Generator", tag: "Interactive" },
      { name: "Candidate Scoring Scorecard", tag: "Interactive" },
      { name: "Offer Letter Generator", tag: "Interactive" },
      { name: "Onboarding Tracker", tag: "Interactive" },
      { name: "Recruitment Policy", tag: "Framework" },
      { name: "Selection Methodology", tag: "Framework" },
      { name: "Onboarding Playbook", tag: "Framework" },
    ],
  },
  {
    id: "s02",
    code: "S02",
    title: "Payroll & Compensation",
    tier: "Operational Foundation",
    summary: "Multi-currency payroll with country-specific statutory deductions.",
    modules: [
      { name: "Multi-Country Payroll Calculator", tag: "Interactive" },
      { name: "Salary Band Dashboard", tag: "Interactive" },
      { name: "Variable Pay Calculator", tag: "Interactive" },
      { name: "Payslip Generator", tag: "Interactive" },
      { name: "Statutory Deduction Tracker", tag: "Interactive" },
      { name: "Compensation Philosophy", tag: "Framework" },
      { name: "Pay Equity Framework", tag: "Framework" },
      { name: "Allowance & Benefits Policy", tag: "Framework" },
      { name: "Salary Review Methodology", tag: "Framework" },
    ],
  },
  {
    id: "s03",
    code: "S03",
    title: "Performance Management",
    tier: "Operational Foundation",
    summary: "KPI cascades, calibration, and performance review cycles.",
    modules: [
      { name: "KPI Cascade Dashboard", tag: "Interactive" },
      { name: "Performance Review Tracker", tag: "Interactive" },
      { name: "Calibration Scorecard", tag: "Interactive" },
      { name: "Goal-Setting Generator", tag: "Interactive" },
      { name: "Performance Framework", tag: "Framework" },
      { name: "Review Cycle Playbook", tag: "Framework" },
      { name: "PIP Methodology", tag: "Framework" },
    ],
  },
  {
    id: "s04",
    code: "S04",
    title: "Learning & Development",
    tier: "Operational Foundation",
    summary: "Capability building, training ROI, and certification tracking.",
    modules: [
      { name: "Training Calendar Dashboard", tag: "Interactive" },
      { name: "Competency Matrix Tracker", tag: "Interactive" },
      { name: "Training ROI Calculator", tag: "Interactive" },
      { name: "Certification Tracker", tag: "Interactive" },
      { name: "IDP Generator", tag: "Interactive" },
      { name: "L&D Strategy", tag: "Framework" },
      { name: "Capability Framework", tag: "Framework" },
      { name: "Training Evaluation Methodology", tag: "Framework" },
    ],
  },
  {
    id: "s05",
    code: "S05",
    title: "Workforce Planning & Analytics",
    tier: "Strategic Layer",
    summary: "Headcount planning, attrition modeling, and workforce intelligence.",
    modules: [
      { name: "Headcount Planning Dashboard", tag: "Interactive" },
      { name: "Attrition Analytics Dashboard", tag: "Interactive" },
      { name: "Manpower Forecast Planner", tag: "Interactive" },
      { name: "Cost-per-Hire Calculator", tag: "Interactive" },
      { name: "Workforce Demographics Tracker", tag: "Interactive" },
      { name: "Strategic Workforce Planning Framework", tag: "Framework" },
      { name: "People Analytics Methodology", tag: "Framework" },
      { name: "Workforce Risk Playbook", tag: "Framework" },
    ],
  },
  {
    id: "s06",
    code: "S06",
    title: "Succession & Talent Review",
    tier: "Strategic Layer",
    summary: "9-box, succession depth charts, and critical role coverage.",
    modules: [
      { name: "9-Box Talent Dashboard", tag: "Interactive" },
      { name: "Succession Depth Tracker", tag: "Interactive" },
      { name: "Critical Role Scorecard", tag: "Interactive" },
      { name: "Talent Review Generator", tag: "Interactive" },
      { name: "Successor Readiness Tracker", tag: "Interactive" },
      { name: "Succession Framework", tag: "Framework" },
      { name: "Talent Review Playbook", tag: "Framework" },
      { name: "Critical Role Methodology", tag: "Framework" },
    ],
  },
  {
    id: "s07",
    code: "S07",
    title: "Employee Engagement & Culture",
    tier: "Strategic Layer",
    summary: "Engagement diagnostics, pulse surveys, and culture intervention.",
    modules: [
      { name: "Engagement Pulse Dashboard", tag: "Interactive" },
      { name: "eNPS Tracker", tag: "Interactive" },
      { name: "Culture Diagnostic Scorecard", tag: "Interactive" },
      { name: "Action Plan Generator", tag: "Interactive" },
      { name: "Engagement Strategy", tag: "Framework" },
      { name: "Culture Operating Model", tag: "Framework" },
      { name: "Recognition Framework", tag: "Framework" },
    ],
  },
  {
    id: "s08",
    code: "S08",
    title: "Total Rewards Strategy",
    tier: "Strategic Layer",
    summary: "Benchmarking, benefits architecture, and reward positioning.",
    modules: [
      { name: "Market Benchmark Dashboard", tag: "Interactive" },
      { name: "Total Rewards Calculator", tag: "Interactive" },
      { name: "Benefits Utilization Tracker", tag: "Interactive" },
      { name: "Reward Statement Generator", tag: "Interactive" },
      { name: "Total Rewards Philosophy", tag: "Framework" },
      { name: "Benefits Architecture", tag: "Framework" },
      { name: "Recognition & Incentive Framework", tag: "Framework" },
      { name: "Pay Mix Methodology", tag: "Framework" },
      { name: "Long-Term Incentive Playbook", tag: "Framework" },
    ],
  },
  {
    id: "s09",
    code: "S09",
    title: "HR Governance & Compliance",
    tier: "Enterprise Infrastructure",
    summary: "Multi-jurisdiction labor law, audit, and policy governance.",
    modules: [
      { name: "Compliance Dashboard", tag: "Interactive" },
      { name: "Audit Readiness Tracker", tag: "Interactive" },
      { name: "Policy Register Scorecard", tag: "Interactive" },
      { name: "Document Generator", tag: "Interactive" },
      { name: "Governance Framework", tag: "Framework" },
      { name: "Labor Law Matrix (LA/MM/TH/ID)", tag: "Framework" },
      { name: "Policy Library", tag: "Framework" },
      { name: "Audit Methodology", tag: "Framework" },
    ],
  },
  {
    id: "s10",
    code: "S10",
    title: "Employee Relations & Case Management",
    tier: "Enterprise Infrastructure",
    summary: "Grievance handling, investigations, and disciplinary action.",
    modules: [
      { name: "Case Management Dashboard", tag: "Interactive" },
      { name: "Investigation Tracker", tag: "Interactive" },
      { name: "Disciplinary Scorecard", tag: "Interactive" },
      { name: "Case Documentation Generator", tag: "Interactive" },
      { name: "Grievance Resolution Tracker", tag: "Interactive" },
      { name: "ER Framework", tag: "Framework" },
      { name: "Investigation Playbook", tag: "Framework" },
      { name: "Disciplinary Methodology", tag: "Framework" },
      { name: "Conflict Resolution Framework", tag: "Framework" },
    ],
  },
  {
    id: "s11",
    code: "S11",
    title: "HR Operating Model & Org Design",
    tier: "Enterprise Infrastructure",
    summary: "Operating model architecture, RACI, and organizational design.",
    modules: [
      { name: "Org Structure Dashboard", tag: "Interactive" },
      { name: "Span-of-Control Calculator", tag: "Interactive" },
      { name: "RACI Generator", tag: "Interactive" },
      { name: "Role Architecture Tracker", tag: "Interactive" },
      { name: "HR Operating Model Framework", tag: "Framework" },
      { name: "Org Design Methodology", tag: "Framework" },
      { name: "Service Delivery Playbook", tag: "Framework" },
      { name: "Job Architecture Framework", tag: "Framework" },
    ],
  },
];

const TIERS = [
  "Operational Foundation",
  "Strategic Layer",
  "Enterprise Infrastructure",
] as const;

function Index() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const totalModules = SYSTEMS.reduce((n, s) => n + s.modules.length, 0);

  return (
    <div
      className="min-h-screen text-neutral-200"
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        backgroundColor: "#0a0a0b",
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <style>{`
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .accent { color: #d4a857; }
        .hairline { border-color: rgba(255,255,255,0.08); }
        .card-bg { background: rgba(20,20,22,0.65); backdrop-filter: blur(6px); }
        .pulse-dot { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); animation: pulse 2s infinite; }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(74,222,128,0.6); }
          70% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        a.sys-card:hover { border-color: #d4a857; transform: translateY(-2px); }
        a.sys-card { transition: all .2s ease; }
      `}</style>

      {/* Top bar */}
      <header className="border-b hairline">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="mono text-xs accent tracking-widest">BHK / HR-OPS</div>
            <div className="mono text-[10px] text-neutral-500 tracking-widest">
              v2026.1 · SEA
            </div>
          </div>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="mono text-xs text-neutral-400 hover:accent tracking-widest"
          >
            LINKEDIN ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="h-2 w-2 rounded-full bg-green-400 pulse-dot" />
              <span className="mono text-xs tracking-widest text-green-400">
                OPEN TO CHRO-TRACK ROLES · SEA
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
              Ba Hein Kyaw
            </h1>
            <div className="mt-4 mono text-sm tracking-widest text-neutral-400 uppercase">
              Group HR Manager · Multi-Country HR Operations
            </div>

            <p className="mt-10 text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-2xl">
              Building enterprise-grade HR infrastructure across{" "}
              <span className="accent">4 SEA jurisdictions</span> from the ground up —
              with no HRIS, minimal budget, and ~270 staff across drilling and mineral
              exploration operations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
              >
                Connect on LinkedIn
                <span className="mono">→</span>
              </a>
              <a
                href="#systems"
                className="inline-flex items-center gap-2 px-5 py-3 border hairline text-sm text-neutral-300 hover:border-neutral-500 transition"
              >
                Explore the Operating Framework
              </a>
            </div>
          </div>

          {/* Operating Theater Spec */}
          <div className="card-bg border hairline p-6">
            <div className="mono text-[10px] tracking-widest text-neutral-500 mb-4">
              OPERATING THEATER · SPEC
            </div>
            <div className="space-y-4 text-sm">
              {[
                ["Coverage", "Laos · Myanmar · Thailand · Indonesia"],
                ["Headcount", "~270 staff"],
                ["Sector", "Drilling & Mineral Exploration"],
                ["HRIS", "Built from scratch · no vendor"],
                ["Systems", "11 · live"],
                ["Modules", "89 · interactive + framework"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b hairline pb-3">
                  <span className="mono text-[11px] tracking-widest text-neutral-500 uppercase">
                    {k}
                  </span>
                  <span className="text-right text-neutral-200">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              <span className="mono text-[10px] tracking-widest text-neutral-400">
                STATUS: OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y hairline bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-3 divide-x divide-white/10">
          {[
            ["11", "Systems"],
            [String(totalModules), "Modules"],
            ["4", "Countries"],
          ].map(([n, l]) => (
            <div key={l} className="text-center px-4">
              <div className="mono text-5xl md:text-6xl text-white font-medium">{n}</div>
              <div className="mt-3 mono text-[11px] tracking-widest text-neutral-500 uppercase">
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Map */}
      <section id="systems" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="mono text-[10px] tracking-widest accent mb-3">
              / SYSTEM MAP
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-semibold tracking-tight">
              HR Operating Framework
            </h2>
            <p className="mt-3 text-neutral-400 max-w-2xl">
              Eleven integrated systems organized across three tiers — from
              transactional foundations to enterprise architecture.
            </p>
          </div>
          <div className="mono text-[11px] tracking-widest text-neutral-500">
            11 SYSTEMS · {totalModules} MODULES
          </div>
        </div>

        {TIERS.map((tier, tierIdx) => {
          const items = SYSTEMS.filter((s) => s.tier === tier);
          return (
            <div key={tier} className="mb-14">
              <div className="flex items-center gap-4 mb-6">
                <span className="mono text-[10px] tracking-widest text-neutral-500">
                  TIER {String(tierIdx + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="mono text-xs tracking-widest accent uppercase">
                  {tier}
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="sys-card card-bg border hairline p-5 block"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className="mono text-[10px] tracking-widest accent">
                        {s.code}
                      </span>
                      <span className="inline-flex items-center gap-1.5 mono text-[9px] tracking-widest text-green-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        LIVE
                      </span>
                    </div>
                    <div className="text-white font-medium leading-snug min-h-[3rem]">
                      {s.title}
                    </div>
                    <div className="mt-4 pt-4 border-t hairline flex justify-between mono text-[10px] tracking-widest text-neutral-500">
                      <span>{s.modules.length} MODULES</span>
                      <span>VIEW →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* System Detail Sections */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        {SYSTEMS.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="scroll-mt-20 py-16 border-t hairline"
          >
            <div className="grid lg:grid-cols-4 gap-10">
              <div className="lg:col-span-1">
                <div className="mono text-[10px] tracking-widest text-neutral-500 mb-2">
                  {s.tier.toUpperCase()}
                </div>
                <div className="mono text-sm accent tracking-widest mb-3">{s.code}</div>
                <h3 className="text-2xl text-white font-semibold tracking-tight leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  {s.summary}
                </p>
                <div className="mt-6 mono text-[10px] tracking-widest text-neutral-500">
                  {s.modules.length} MODULES
                </div>
              </div>

              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                {s.modules.map((m, i) => (
                  <a
                    key={m.name}
                    href={HR_BASE}
                    target="_blank"
                    rel="noreferrer"
                    className="card-bg border hairline p-4 hover:border-neutral-500 transition group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="mono text-[10px] text-neutral-500 mb-1">
                          {s.code}.{String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="text-sm text-neutral-100 group-hover:text-white">
                          {m.name}
                        </div>
                      </div>
                      <span
                        className={`mono text-[9px] tracking-widest px-2 py-1 border whitespace-nowrap ${
                          m.tag === "Interactive"
                            ? "border-green-400/40 text-green-400"
                            : "border-neutral-600 text-neutral-400"
                        }`}
                      >
                        {m.tag.toUpperCase()}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t hairline">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="mono text-[11px] tracking-widest text-neutral-500">
            Built by Ba Hein Kyaw · Group HR Manager · Multi-Country HR Operations · SEA · 2026
          </div>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="mono text-[11px] tracking-widest text-neutral-400 hover:accent"
          >
            LINKEDIN ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
