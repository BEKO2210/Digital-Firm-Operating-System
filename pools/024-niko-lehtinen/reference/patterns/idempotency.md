# Idempotency

Mutating endpoints accept an `Idempotency-Key` header. Store the result for ≥24h and replay on duplicate keys.
