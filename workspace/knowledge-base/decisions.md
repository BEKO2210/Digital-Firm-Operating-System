# Architectural Decision Records

_No ADRs yet._

## ADR-001: Trivial tickets skip Design and use self-only review

**Context:** First ticket through the pipeline was a single-page Hello-World demo.
**Decision:** Confirmed that Trivial tickets per CLAUDE.md §10.3 skip Design entirely and use only the Self review pass per §11.3. Gate A and Gate B both apply unchanged.
**Consequences:** Faster delivery for true trivials; risk is mitigated by Gate A1-A3 + B1-B4 still being run.
