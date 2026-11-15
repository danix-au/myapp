# Agent notes — "Hello World" landing page

## Criterion: a simple HTML landing page showing "Hello World"
- Page: `index.html` (repo root, so it is served as the default page by any static host).
  - `index.html:6` — `<title>Hello World</title>`
  - `index.html:21` — `<h1>Hello World</h1>` inside `<main>` in `<body>`
  - Plain HTML5 with a small inline `<style>` to center the heading; no JS, no external assets.
- Tests: `test/index.test.mjs` (3 tests: valid HTML5 skeleton, title, visible `<h1>` in body).
  They fail before `index.html` exists (verified) and pass after.

## How to run tests
`node --test` (Node >= 18). Uses only the built-in `node:test` runner, so no
`package.json` or dependency was added (manifests are off-limits per CLAUDE.md).

## Judgement calls
- The task is minimal; I chose the narrow reading: one static page, no build tooling,
  no framework. Placed at repo root as `index.html`.
- CLAUDE.md's "How to run things" still lists TODOs; I did not edit CLAUDE.md (forbidden).
  The test command is documented here instead.
