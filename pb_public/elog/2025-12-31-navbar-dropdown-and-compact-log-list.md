# UI Tweaks: Navbar dropdown & Compact Log List

> created_at: 2025-12-31T10:00:00+08:00
> related_tasks: ["navbar-dropdown", "elog-compact"]

Date: 2025-12-31

## Context

The top navigation was getting crowded on small screens, and the language toggle (EN/中文) took up space. Meanwhile, the experiment log list layout was a bit loose, and the right arrow could wrap onto the next line on narrow viewports.

## Changes

### Navigation bar

- Replaced the EN/中文 toggle with a language `<select>` dropdown to save horizontal space.
- Grouped `GitHub` and the language dropdown into a right-aligned control group that always stays at the far right.
- Kept the navbar in a single line on small screens by switching to `flex-nowrap` and allowing the left link group to horizontally scroll when space is tight.

### Experiment log list

- Made the list more compact by reducing header spacing, card padding, and inter-item gaps.
- Ensured the right arrow icon never wraps and always stays on the far right (even on small screens).

## Files

- `pb_public/static/js/navbar.js`
- `pb_public/elog/index.html`

## Verification

Open:

- `http://127.0.0.1:8090/` (check navbar: GitHub + language dropdown on the far right)
- `http://127.0.0.1:8090/elog/#/` (check log list: compact cards; right arrow pinned to the right)

Try changing language via the dropdown and confirm page content re-renders via the existing `lang-change` event.
