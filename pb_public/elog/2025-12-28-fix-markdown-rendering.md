# Fix Markdown rendering in Experiment Logs

Date: 2025-12-28

## Context

The experiment log detail page could render markdown content, but common elements (e.g. headings and lists) looked unstyled. This is expected when using Tailwind CSS without a dedicated typography layer: Tailwind’s preflight resets default browser styles for tags like `h1`, `ul`, `li`, etc.

## Root Cause

- The page relied on semantic HTML output from `marked`, but there was no typography styling applied.
- Additionally, the log detail template had malformed closing tags, which could break the DOM structure and cause inconsistent rendering.

## Changes

- Switched `marked` to a pinned local asset to avoid CDN dependency.
- Added a custom `marked.Renderer` to inject Tailwind utility classes into common markdown elements:
  - headings (`h1`-`h4`), paragraphs, lists, blockquotes
  - inline code + fenced code blocks
  - tables, links, images
- Tightened spacing to a compact reading style.
- Added a small rendering fixture section in an existing log entry to quickly verify output.

## Verification

Open:

- `http://127.0.0.1:8090/elog/#/2025-12-26-init.md`

Check that headings, lists, code blocks, tables, and links render with consistent spacing and typography.
