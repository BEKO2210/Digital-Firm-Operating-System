<!--
  This file is auto-generated from public/index.html on every session end.
  It is the Markdown mirror of the live landing page.
  Do not edit by hand. Source of truth: public/index.html template + .firm/identity.yaml + live stats.
-->

# {{firm_name}}

> {{firm_slogan}}

**Est. {{firm_founded_year}}** · Firm Day **{{firm_day}}** · Sprint **{{current_sprint}}**, Day **{{sprint_day}}/10**

---

## Live Status

| | |
|---|---|
| **Active tickets** | {{active_tickets}} / 3 |
| **Halted (awaiting reply)** | {{halted_tickets}} |
| **Current sprint** | {{current_sprint}} · Day {{sprint_day}}/10 |
| **Firm day** | {{firm_day}} |
| **Production releases** | {{releases_count}} · latest **{{latest_version}}** |
| **Last gate decision** | {{last_gate_verdict}} |
| **Open drift alerts** | {{open_drift_alerts}} |
| **Audit chain** | ✓ Verified ({{audit_seq}} entries) |
| **Page generated** | {{last_updated_real}} |

---

## What we build

A 50-person digital agency operating on **hard gates**, **multi-pass reviews**, and an **immutable production pipeline**. Every engagement runs through five phases — Discovery, Design, Build, Harden, Release — and every artifact passes Self review, Peer review, and a Devil's Advocate review before any gate. No exceptions. No shortcuts.

### Services

| Discipline | Headcount | Focus |
|---|---|---|
| **Frontend** | 8 | TypeScript-first, accessibility-first, performance budgeted |
| **Backend** | 10 | Versioned APIs (8 engineers + 2 database), idempotent endpoints |
| **Mobile** | 4 | Native or cross-platform, offline-first, battery-aware |
| **DevOps / SRE** | 4 | Reproducible builds, hash-pinned releases, day-one monitoring |
| **Security & Compliance** | 3 | OWASP scans, DSGVO by design, license + audit-trail integrity |
| **Design (UX / UI / Brand)** | 4 | Flows before screens, tokens before pixels |
| **Quality** | 5 | Adversarial testing (3 QA + 1 code review + 1 devil's advocate) |
| **Product / Project Mgmt** | 4 | Specs without ambiguity, WIP-limited delivery |
| **Customer-facing** | 3 | Account management, support, customer-language emails |
| **Documentation** | 1 | Customer-ready READMEs, changelogs, runbooks |
| **Release & Records** | 2 | Sole production write-access (1), immutable archive (1) |
| **Executive** | 2 | CEO, CTO |
| **Total** | **50** | |

---

## Team

50 named employees, each with a personal profile, a personal pool of curated reference + a working notebook, and a personality vector that evolves based on what happens to them.

Reviews stay sharp because the same person doesn't approve their own code. Seniors get strict after misses. Juniors get bolder after wins. The firm learns.

See [.firm/employees/_roster.yaml](.firm/employees/_roster.yaml) for the full roster. Individual profiles in [.firm/employees/](.firm/employees/).

### Departments

```
Executive (2)
├── CEO
└── CTO

Product Management (4)
├── Product Owners (2)
└── Project Managers (2)

Design (4)
├── UX Designers (2)
├── UI Designer (1)
└── Brand Guardian (1)

Engineering (24)
├── Frontend (8)
├── Backend (8)
├── Database (2)
├── Mobile (4)
└── DevOps + SRE (4)

Quality (5)
├── QA Engineers (3)
├── Code Reviewer (1)
└── Devil's Advocate (1)

Security & Compliance (3)
├── Security Officer
├── Privacy Officer
└── Compliance Auditor

Customer-facing (3)
├── Account Managers (2)
└── Support Engineer (1)

Operations (3)
├── Technical Writer (1)
├── Release Manager (1)
└── Archivist (1)
```

---

## Recent case studies

{{#each_case_study}}
### {{ticket_id}} — {{title}}

**Version:** {{version}} · **Delivered:** Day {{delivered_day}} · **Gates passed:** {{gates_passed_count}}/7

{{summary}}

**Built by:** {{built_by_names}}
**Tags:** {{tags_csv}}
**Audit trail:** [archive/{{ticket_id}}/](archive/{{ticket_id}}/)

---

{{/each_case_study}}

## How we work

### Coding
TypeScript and Python by default. Conventional commits. 80% test coverage minimum on changed code. No flaky tests in main. Lint clean or no merge.

### UX
WCAG 2.2 AA minimum. LCP < 2.5s, INP < 200ms, CLS < 0.1 on mid-tier mobile. Mobile-first. Every state designed (loading, empty, error).

### Security
No secrets in source. Inputs validated at trust boundaries. Auth required on every non-public endpoint. Rate limiting on auth. CSP everywhere.

### Privacy (DSGVO)
Data minimization by default. Explicit consent where required. 30-day default log retention. Right to erasure technically achievable.

### Release
Three stages — `output/01-sandbox/`, `output/02-staging/`, `output/03-production/`. Production is immutable, hash-pinned, and verified on every session start. New work = new version. Never modified.

### Audit
Append-only `logs/audit.log` with SHA-256 hash chain. Every meaningful event logged with dual timestamps (real + sim). Tamper-evident. Verified at session start.

---

## How to brief us

Drop anything into the [`inbox/`](inbox/) folder:

- Text (`.md`, `.txt`)
- Documents (`.pdf`, `.docx`)
- Data (`.csv`, `.json`, `.xlsx`)
- Images / wireframes
- Voice memo transcripts
- Raw notes — even one-liners

The firm scans the inbox on every Claude Code session. When content arrives, it starts a ticket and clears the inbox. If we have questions, you'll find a draft email in `workspace/communication/pending/`. Reply by dropping a file named `REPLY-EMAIL-####.<ext>` back into `inbox/`.

---

## Contact

**Client:** {{customer_name}}
**Email:** [{{customer_email}}](mailto:{{customer_email}})

---

<sub>
{{firm_name}} · Est. {{firm_founded_year}} · Internal language: English · Customer language: {{customer_language}}<br />
Operating system version: 2.0.0 · Page generated {{last_updated_real}} · Audit chain ✓ Verified · Drift alerts: {{open_drift_alerts}}
</sub>
