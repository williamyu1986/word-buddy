# Layered Word Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the long vocabulary-library list with a concise layered selector and connect PET, 2000 Core English Words, and 4000 Essential English Words.

**Architecture:** Keep the app as a static frontend. Add generated word-bank JavaScript files, extend the existing state with book/unit selections, and make `activeWords()` filter by the selected layer before study sessions start.

**Tech Stack:** Vanilla JavaScript, static HTML/CSS, Node test runner, locally generated word-bank files from user-provided documents plus ECDICT translations.

---

### Task 1: Word Bank Cleanup

**Files:**
- Modify: `tools/build_user_wordlists.py`
- Create: `pet-words.js`
- Create: `core2000-words.js`
- Create: `eew4000-words.js`

- [ ] Regenerate PET, 2000, and 4000 word-bank files from the user-provided files.
- [ ] Keep book and unit metadata for 2000 and 4000.
- [ ] Ensure no generated entry has `待核对释义`.

### Task 2: State And Filtering

**Files:**
- Modify: `index.html`
- Modify: `app.js`

- [ ] Load the new generated word-bank files before `app.js`.
- [ ] Add saved selections for 2000 book/unit and 4000 book/unit.
- [ ] Filter `activeWords()` by current book and unit.
- [ ] Include the new selections in local save and cloud sync payloads.

### Task 3: Layered Library UI

**Files:**
- Modify: `app.js`
- Modify: `styles.css`

- [ ] Replace the long library list with horizontal category tabs.
- [ ] Show only the selected category's second and third level controls.
- [ ] Add a compact current-selection summary and a start button.

### Task 4: Tests And Verification

**Files:**
- Create: `tests/pet-words.test.mjs`
- Create: `tests/core-books.test.mjs`
- Modify: `docs/word-bank-sources.md`

- [ ] Test generated counts and missing translations.
- [ ] Test book/unit metadata for 2000 and 4000.
- [ ] Run syntax checks and the full Node test suite.
