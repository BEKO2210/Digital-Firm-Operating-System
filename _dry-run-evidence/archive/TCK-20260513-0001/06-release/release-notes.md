---
real: 2026-05-13T11:45:00Z
sim:  Day 1, 11:45
ticket: TCK-20260513-0001
released_by: { id: "048", name: "Hanna Wickström", role: "release-manager" }
version: v0.1.0
---

# Release notes — v0.1.0

## What changed
- Initial release. First ticket of the firm; first artifact through the full pipeline.

## Who built it
- Diego Rivera (frontend-engineer, 015)
- Anika Müller (qa-engineer, 037) — Gate A1, B1
- Nadia Karimi (security-officer, 041) — Gate A2
- Marcus Chen (cto, 002) + Stephan Weber (code-reviewer, 040) + Sofia Conti (ux-designer, 007) — Gate A3
- Pavel Kowalski (devops-engineer, 033) + Tariq al-Rashid (sre, 036) + Margit Halvorsen (technical-writer, 047) — Harden
- Greta Lundqvist (privacy-officer, 042) — Gate B2
- Hanna Kowalska (compliance-auditor, 043) — Gate B3
- Sofia Conti (ux-designer, 007) — Gate B4 UX Acceptance
- Hanna Wickström (release-manager, 048) — Release
- Camila Reyes (account-manager, 044) — Delivery email
- Imran Qureshi (archivist, 049) — Archive
- Anna Lindqvist (ceo, 001) + Priya Sharma (product-owner, 003) — Triage + sign-off

## Gates passed
A1-QA, A2-Security, A3-Quality, B1-Regression, B2-Privacy, B3-Compliance, B4-UX-Acceptance (7/7)

## Known limitations
- Static artifact only; no analytics, no internationalization beyond `lang="de"`.

## Upgrade path
- New versions copy through `01-sandbox → 02-staging → 03-production/vX.Y.Z`.

## Rollback target
None (first release).
