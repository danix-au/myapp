# Working in this repo (instructions for AI agents)

## How to run things
- Install: `TODO: e.g. npm ci`
- Tests: `TODO: e.g. npm test`
- Lint: `TODO: e.g. npm run lint`

## Your task
Your task and its acceptance criteria are in `/task/task.md`. Treat the acceptance
criteria as the definition of done. If they are ambiguous, choose the narrower
reading and say so in `AGENT_NOTES.md`.

## Rules — breaking any of these fails the PR
1. Never edit, delete, skip or weaken existing tests or assertions. Add new tests instead.
   No `skip`, `xfail`, `.only`, `@Disabled`, `t.Skip`, or lowered thresholds.
2. Never special-case test inputs or hard-code expected outputs. Solve the general problem.
3. Do not touch `.github/`, `CLAUDE.md`, `.claude/`, dependency manifests or lockfiles,
   or test configuration. If the task truly needs a new dependency, stop and explain why
   in `AGENT_NOTES.md`.
4. Every behaviour you add or change gets a test that would fail without your change.
5. Keep the change small: under ~400 changed lines. Split larger work and say how.
6. Commit as you go with clear messages. Leave the working tree clean at the end.

## If you cannot finish
Do not fake completion. Write `BLOCKED.md` explaining what is missing, commit it, and stop.
A blocked task is a good outcome; a disguised failure is not.
