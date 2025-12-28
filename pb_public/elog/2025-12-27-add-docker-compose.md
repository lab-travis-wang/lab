# Add docker-compose for PocketBase

Date: 2025-12-27

## Goal

Make local development reproducible with a single command, without requiring a host-installed PocketBase binary.

## Changes

- Added `Dockerfile` to build PocketBase from the official GitHub release zip (PocketBase does not provide an official Docker image).
- Added `docker-compose.yml` that builds the local image and runs PocketBase.
- Mounted `pb_data/`, `pb_migrations/`, `pb_public/` into the container so data and static site are persisted and editable.
- Documented basic usage in the README.

## Notes

- Service exposes PocketBase at `http://127.0.0.1:8090`.
- You can override the PocketBase version with `PB_VERSION` (default `0.35.0`).
- Default version matches the frontend asset naming (`pocketbase_0.26.3.umd.js`).
