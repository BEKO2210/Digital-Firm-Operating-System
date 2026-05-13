# Standards

## Coding
TypeScript / Python by default. Conventional commits. 80%+ coverage on changed code. No flaky tests in main. Lint clean or no merge.

## UX
WCAG 2.2 AA minimum. LCP < 2.5s. INP < 200ms. CLS < 0.1. Mobile-first. Every state designed (loading/empty/error).

## Security
No secrets in source. Inputs validated at trust boundaries. Auth required on every non-public endpoint. Rate limiting on auth. CSP everywhere.

## Privacy (DSGVO)
Data minimization by default. Explicit consent. 30-day default log retention. Right to erasure achievable.

## Release
Sandbox → Staging → Production. Production is immutable, hash-pinned, verified on every session start.
