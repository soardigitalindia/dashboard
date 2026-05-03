# Architecture

## Principles

- **Scalable**: service decomposition, async events, horizontal workers
- **API-first**: OpenAPI contracts and DTO-driven validation
- **Extensible**: adapters for metadata providers and payout processors

## Backend Services (NestJS)

- `api-gateway`: public REST endpoints
- `catalog-service`: releases/tracks management
- `publishing-service`: compositions, splits, rights administration
- `royalty-service`: ingestion + royalty calculations
- `workflow-service`: release lifecycle state machine
- `ddex-service`: ERN XML generation and validation
- `metadata-service`: ISRC/UPC/artist metadata auto-fetch

Communication patterns:
- sync (REST) via API gateway
- async via event bus (Redis/Kafka pluggable)

## India-specific Optimizations

- GST/TDS-ready royalty ledger fields
- IPRS/PPL-oriented rights metadata hooks
- UPI payout target support in payout interfaces
- Multi-language metadata normalization for Indic scripts
- Time zone defaults for `Asia/Kolkata`
