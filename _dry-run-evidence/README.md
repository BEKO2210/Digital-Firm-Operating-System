# Dry-run evidence (preserved)

This folder contains the immutable evidence that the Nordlicht Digital
pipeline was exercised end-to-end before the first real customer brief.

Contents:
- `archive/<ticket>/` — the archived dry-run ticket (intake, triage, discovery,
  build, harden, release, reviews, gates).
- `production/v0.1.0/` — the released production artifact and its manifest.
- `delivery-email/EMAIL-0001.md` — the German-language delivery email.
- `reports/dry-run-report.md` — full step-by-step ledger.
- `reports/landing-page-qa.md` — the landing-page QA report.

The runtime state of the firm has been reset to "ready for the first real brief"
after this evidence was preserved. Audit chain in `logs/audit.log` continues
unbroken across the reset.
