import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ba Hein Kyaw — Group HR Manager · CHRO-Track Portfolio" },
      {
        name: "description",
        content:
          "HR Operating Framework built across Laos, Myanmar, Thailand & Indonesia — 9 systems, 89 modules. CHRO-track portfolio of Ba Hein Kyaw.",
      },
      { property: "og:title", content: "Ba Hein Kyaw — CHRO-Track Portfolio" },
      {
        property: "og:description",
        content:
          "Enterprise-grade HR infrastructure across 4 SEA jurisdictions. 9 systems · 89 modules · multi-country operations.",
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
type Module = { name: string; tag: ModuleTag; path: string; desc: string };
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
    title: "HR Operations",
    tier: "Operational Foundation",
    summary:
      "Operational backbone — employee records, contracts, compliance, leave, work permits across 4 jurisdictions.",
    modules: [
      { name: "Employee Records", tag: "Interactive", path: "1_hr-ops-tool1-employee-records.html", desc: "Central register for all employee data, employment history, and document management." },
      { name: "Contracts & Positions", tag: "Interactive", path: "2_hr-ops-tool2-contracts-positions.html", desc: "Contract lifecycle management and position control across all entity types and grades." },
      { name: "Compliance Register", tag: "Interactive", path: "3_hr-ops-tool3-compliance-register.html", desc: "Tracking framework for labour law compliance across all operating jurisdictions." },
      { name: "Onboarding & Offboarding", tag: "Interactive", path: "4_hr-ops-tool4-onboarding-offboarding.html", desc: "End-to-end joiners and leavers workflow with checklists, handover, and exit data capture." },
      { name: "Leave & Absence", tag: "Interactive", path: "5_hr-ops-tool5-leave-absence.html", desc: "Leave entitlement management, absence tracking, and statutory compliance by country." },
      { name: "Policy Library", tag: "Framework", path: "6_hr-ops-tool6-policy-library.html", desc: "Centralised repository of all HR policies with version control and review schedules." },
      { name: "Disciplinary & Grievance", tag: "Interactive", path: "7_hr-ops-tool7-disciplinary-grievance.html", desc: "Case management workflow for disciplinary processes and formal grievance handling." },
      { name: "Work Permits", tag: "Interactive", path: "8_hr-ops-tool8-work-permits.html", desc: "Permit and visa tracking for expatriate and cross-border employees across all sites." },
      { name: "Compliance Calendar", tag: "Interactive", path: "9_hr-ops-tool9-compliance-calendar.html", desc: "Regulatory filing deadlines, renewal dates, and statutory reporting schedule by jurisdiction." },
    ],
  },
  {
    id: "s02",
    code: "S02",
    title: "Talent Acquisition",
    tier: "Operational Foundation",
    summary: "Headcount planning, pipeline, sourcing, and end-to-end recruitment delivery.",
    modules: [
      { name: "Headcount Plan 2026", tag: "Interactive", path: "1_Ta_headcount_plan_2026.html", desc: "Annual headcount plan with approved positions, phasing schedule, and budget allocation by department." },
      { name: "HC Communications", tag: "Framework", path: "2_Ta_hc_comms.html", desc: "Headcount communication templates and stakeholder update cadence for hiring approvals." },
      { name: "Sourcing Strategy", tag: "Framework", path: "3_Ta_sourcing_strategy%20(1).html", desc: "Channel mix, sourcing playbooks, and direct talent attraction strategies by role family." },
      { name: "Talent Pipeline Master", tag: "Interactive", path: "4_Ta_talent_pipeline_master.html", desc: "Master pipeline tracker covering all active requisitions, candidate stages, and anticipated offers." },
      { name: "Recruitment Tracker", tag: "Interactive", path: "5_Ta_recruitment_tracker.html", desc: "Live tracker with time-to-fill metrics, hiring manager accountability, and SLA monitoring." },
      { name: "Interview Framework", tag: "Framework", path: "6_Ta_interview_framework.html", desc: "Structured interview guides, competency question banks, and scoring rubrics for consistent assessment." },
      { name: "TA Completion Kit", tag: "Framework", path: "7_Ta_ta_completion_kit%20(1).html", desc: "End-of-hire documentation, offer letter templates, and onboarding handover checklists." },
      { name: "TA Metrics Dashboard", tag: "Interactive", path: "8_Ta_metrics_dashboard.html", desc: "Recruitment analytics covering quality of hire, source effectiveness, and funnel conversion rates." },
      { name: "TA Toolkit", tag: "Framework", path: "9_Ta_ta_toolkit.html", desc: "Comprehensive recruiter toolkit including job briefs, EVP messaging, and candidate experience guides." },
    ],
  },
  {
    id: "s03",
    code: "S03",
    title: "Compensation & Benefits",
    tier: "Operational Foundation",
    summary: "Total rewards, salary bands, merit, benefits, and pay equity analytics.",
    modules: [
      { name: "Total Rewards Framework", tag: "Framework", path: "1_cb_total_rewards.html", desc: "Strategic overview of the complete employee value proposition across all reward elements." },
      { name: "Job Evaluation & Role Grading", tag: "Framework", path: "2_cb_job_evaluation.html", desc: "Structured methodology for evaluating, classifying, and grading all roles within the organisation." },
      { name: "Salary Band Management", tag: "Framework", path: "3_cb_salary_bands.html", desc: "Definition and governance of pay ranges, midpoints, and band structures across all grades." },
      { name: "Merit & Increment Matrix", tag: "Interactive", path: "4_cb_merit_matrix.html", desc: "Performance-linked pay progression guidelines and increment decision-making matrices." },
      { name: "Benefits & Allowances Register", tag: "Interactive", path: "5_cb_benefits_allowances.html", desc: "Comprehensive catalogue of all employee benefits, entitlements, and allowance policies." },
      { name: "Incentive & Variable Pay", tag: "Framework", path: "6_cb_incentive_variable_pay.html", desc: "Short and long-term incentive structures, bonus schemes, and performance-based pay design." },
      { name: "Total Rewards Statement Generator", tag: "Interactive", path: "7_cb_trs_generator.html", desc: "Automated generation of personalised total rewards statements for individual employees." },
      { name: "C&B Analytics Dashboard", tag: "Interactive", path: "8_cb_analytics_dashboard.html", desc: "Real-time compensation analytics, benchmarking insights, and workforce pay equity reporting." },
    ],
  },
  {
    id: "s04",
    code: "S04",
    title: "Performance Management",
    tier: "Operational Foundation",
    summary: "Performance cycles, reviews, PIPs, development, and succession.",
    modules: [
      { name: "PM Framework", tag: "Framework", path: "1_pm_framework_1.html", desc: "End-to-end performance management framework covering cycle design, ratings, and calibration." },
      { name: "Review System", tag: "Framework", path: "2_pm_review_system.html", desc: "Structured performance review workflows, feedback templates, and mid-year check-in processes." },
      { name: "PIP Tracker", tag: "Interactive", path: "3_pm_pip_tracker.html", desc: "Performance improvement plan management with tracking, milestones, and outcome documentation." },
      { name: "PM Dashboard", tag: "Interactive", path: "4_pm_dashboard_4.html", desc: "Analytics dashboard for tracking performance completion rates, rating distributions, and trends." },
      { name: "Manager Guide", tag: "Framework", path: "5_pm_manager_guide.html", desc: "Practical guidance for line managers on conducting meaningful performance conversations." },
      { name: "Development Planning", tag: "Framework", path: "6_pm_development.html", desc: "Individual development planning tools linking performance outcomes to growth opportunities." },
      { name: "Succession Planning", tag: "Framework", path: "7_pm_succession.html", desc: "Succession pipeline mapping for critical roles, readiness assessment, and bench strength tracking." },
    ],
  },
  {
    id: "s05",
    code: "S05",
    title: "Learning & Development",
    tier: "Strategic Layer",
    summary: "Strategy, capability building, leadership pipeline, and L&D governance.",
    modules: [
      { name: "L&D Strategy", tag: "Framework", path: "1_ld_strategy.html", desc: "Learning strategy framework aligned to capability gaps, business priorities, and growth plans." },
      { name: "Training Needs Analysis", tag: "Framework", path: "2_ld_tna.html", desc: "TNA process for identifying learning gaps across teams, roles, and development cohorts." },
      { name: "Learning Design", tag: "Framework", path: "3_ld_design.html", desc: "Instructional design principles and programme architecture for site and office learning." },
      { name: "Career Pathway", tag: "Framework", path: "4_ld_pathway.html", desc: "Structured development pathways by grade, including the driller G3→G4 progression roadmap." },
      { name: "Leadership Development", tag: "Framework", path: "5_ld_leadership.html", desc: "Leadership programme design and delivery framework for senior and high-potential cohorts." },
      { name: "L&D Measurement", tag: "Framework", path: "6_ld_measurement.html", desc: "Kirkpatrick-aligned evaluation tools to measure learning effectiveness and business impact." },
      { name: "L&D Governance", tag: "Framework", path: "7_ld_governance.html", desc: "Budget governance, vendor management, and compliance framework for learning investments." },
    ],
  },
  {
    id: "s06",
    code: "S06",
    title: "People Analytics",
    tier: "Strategic Layer",
    summary: "Workforce intelligence, attrition, productivity, and executive storytelling.",
    modules: [
      { name: "Analytics Strategy", tag: "Framework", path: "1_pa_strategy.html", desc: "People analytics maturity roadmap and data-driven HR decision framework." },
      { name: "Data Infrastructure", tag: "Framework", path: "2_pa_data_infra.html", desc: "HR data architecture, source systems mapping, and data quality governance standards." },
      { name: "Workforce Dashboard", tag: "Interactive", path: "3_pa_workforce_dashboard.html", desc: "Live workforce composition, headcount trends, and demographic snapshot across all sites." },
      { name: "Attrition Analytics", tag: "Interactive", path: "4_pa_attrition.html", desc: "Turnover root cause analysis, flight risk modelling, and retention intervention targeting." },
      { name: "Pipeline Analytics", tag: "Interactive", path: "5_pa_pipeline.html", desc: "Talent pipeline funnel analysis, conversion benchmarks, and sourcing effectiveness metrics." },
      { name: "Workforce Planning Analytics", tag: "Interactive", path: "6_pa_workforce.html", desc: "Demand forecasting models and supply-gap visualisation for strategic headcount planning." },
      { name: "Compensation Analytics", tag: "Interactive", path: "7_pa_comp.html", desc: "Pay equity analysis, market positioning benchmarks, and compa-ratio distribution reporting." },
      { name: "Productivity Analytics", tag: "Interactive", path: "8_pa_productivity.html", desc: "Workforce output metrics, utilisation rates, and operational productivity benchmarking." },
      { name: "Reporting & Storytelling", tag: "Framework", path: "9_pa_reporting_storytelling.html", desc: "Executive reporting frameworks and data narrative techniques for people insights presentation." },
    ],
  },
  {
    id: "s07",
    code: "S07",
    title: "HR Business Partnering",
    tier: "Strategic Layer",
    summary: "Strategic HRBP role architecture, diagnostics, and business-aligned partnering.",
    modules: [
      { name: "HRBP Role Model", tag: "Framework", path: "1_hrbp_role_model.html", desc: "Defining the strategic and operational role of HR Business Partners within the organisation." },
      { name: "Business Acumen", tag: "Framework", path: "2_hrbp_business_acumen.html", desc: "Frameworks for building commercial awareness and business-aligned HR decision-making." },
      { name: "Stakeholder Management", tag: "Framework", path: "3_hrbp_stakeholder.html", desc: "Tools and methods for managing relationships with key internal and external stakeholders." },
      { name: "Org Diagnostic", tag: "Framework", path: "4_hrbp_org_diagnostic.html", desc: "Diagnostic frameworks for assessing organisational health, capability gaps, and people risks." },
      { name: "HRBP Scorecard", tag: "Interactive", path: "5_hrbp_scorecard.html", desc: "Performance measurement tools and KPIs to track the impact and effectiveness of HR business partners." },
      { name: "Workforce Planning", tag: "Framework", path: "6_hrbp_workforce_planning.html", desc: "Strategic headcount forecasting and workforce planning processes aligned to business cycles." },
      { name: "Business Review", tag: "Framework", path: "7_hrbp_business_review.html", desc: "Structured HR business review cadence, reporting templates, and quarterly people insights." },
      { name: "Change Management", tag: "Framework", path: "8_hrbp_change_management.html", desc: "HR-led change frameworks, stakeholder impact mapping, and communication planning tools." },
      { name: "Talent Strategy", tag: "Framework", path: "9_hrbp_talent_strategy.html", desc: "Business unit talent strategies covering attraction, retention, and critical role succession." },
      { name: "Leadership Coaching", tag: "Framework", path: "10_hrbp_leadership_coaching.html", desc: "Coaching frameworks and tools for HRBPs to develop leadership capability across the organisation." },
    ],
  },
  {
    id: "s08",
    code: "S08",
    title: "Employee Experience & Culture",
    tier: "Enterprise Infrastructure",
    summary: "EX strategy, culture, engagement, recognition, wellbeing, and exit signals.",
    modules: [
      { name: "EX Strategy", tag: "Framework", path: "1_ex_strategy.html", desc: "Employee experience strategy framework covering moments that matter across the full lifecycle." },
      { name: "Culture Framework", tag: "Framework", path: "2_ex_culture.html", desc: "Organisational culture definition, values activation, and culture measurement tools." },
      { name: "Onboarding Experience", tag: "Framework", path: "3_ex_onboarding.html", desc: "Structured onboarding journey design to accelerate time-to-productivity and early retention." },
      { name: "Engagement", tag: "Framework", path: "4_ex_engagement.html", desc: "Employee engagement survey design, pulse listening tools, and action planning frameworks." },
      { name: "Recognition", tag: "Framework", path: "5_ex_recognition.html", desc: "Recognition programme design linking appreciation to values, performance, and retention outcomes." },
      { name: "Wellbeing", tag: "Framework", path: "6_ex_wellbeing.html", desc: "Holistic wellbeing framework for site and office workforce, including mental health provisions." },
      { name: "Exit Analytics", tag: "Interactive", path: "7_ex_exit_analytics.html", desc: "Exit interview data analysis, leaver themes, and retention signal reporting by site and grade." },
      { name: "Culture Consistency", tag: "Framework", path: "8_ex_culture_consistency.html", desc: "Multi-country culture alignment tools to maintain values coherence across all operating sites." },
    ],
  },
  {
    id: "s09",
    code: "S09",
    title: "Organisation Design",
    tier: "Enterprise Infrastructure",
    summary: "Structure models, role design, spans/layers, and restructure delivery.",
    modules: [
      { name: "OD Foundations", tag: "Framework", path: "1_od_foundations.html", desc: "Core principles and theoretical foundations underpinning organisation design practice." },
      { name: "Structure Models", tag: "Framework", path: "2_od_structure_models.html", desc: "Comparative structural archetypes and model selection criteria for drilling organisations." },
      { name: "Role Design", tag: "Framework", path: "3_od_role_design.html", desc: "Methodology for defining, sizing, and architecting roles to match organisational purpose." },
      { name: "Spans & Layers", tag: "Framework", path: "4_od_spans_layers.html", desc: "Framework for optimising management spans of control and flattening organisational layers." },
      { name: "Org Health", tag: "Framework", path: "5_od_org_health.html", desc: "Assessment tools for diagnosing and improving organisational health and team effectiveness." },
      { name: "Restructure Playbook", tag: "Framework", path: "6_od_restructure.html", desc: "End-to-end restructure planning guide covering design, consultation, and implementation phases." },
      { name: "OD Interventions", tag: "Framework", path: "7_od_intervention.html", desc: "Targeted OD intervention strategies to address team dysfunction, culture drift, and capability gaps." },
      { name: "OD Scenarios", tag: "Framework", path: "8_od_scenarios.html", desc: "Scenario planning tools for modelling future organisational structures under different growth assumptions." },
      { name: "OD Governance", tag: "Framework", path: "9_od_governance.html", desc: "Governance structures, approval frameworks, and accountability mechanisms for OD decisions." },
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
                ["HRIS", "Built from scratch · no vendor"],
                ["Systems", "9 · live"],
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
            ["9", "Systems"],
            ["89", "Modules"],
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
              Nine integrated systems organized across three tiers — from
              transactional foundations to enterprise architecture.
            </p>
          </div>
          <div className="mono text-[11px] tracking-widest text-neutral-500">
            9 SYSTEMS · 89 MODULES
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
                    href={HR_BASE + m.path}
                    target="_blank"
                    rel="noreferrer"
                    className="card-bg border hairline p-4 hover:border-neutral-500 transition group flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="mono text-[10px] text-neutral-500 mb-1">
                          {s.code}.{String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="text-sm text-neutral-100 group-hover:text-white font-medium">
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
                    <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
                      {m.desc}
                    </p>
                    <div className="mt-3 pt-3 border-t hairline mono text-[10px] tracking-widest text-neutral-500 group-hover:accent">
                      OPEN MODULE →
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
