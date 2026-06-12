# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a learning repository currently in **Phase 1: JavaScript Foundations**. There is no npm project, no `package.json`, and no Playwright configuration yet. Phase 2 will introduce Playwright; Phase 3 will build full automation frameworks.

## Running Files

All exercises are plain JavaScript run directly with Node.js:

```bash
node chapter_01_basics/03_JS_commands.js
node chapter_xx_promise/05_promise_real.js
```

No build step, no test runner, no npm install required.

## Repository Structure

Chapters progress sequentially through JavaScript fundamentals:

- **chapter_01_basics** — console methods, process object, JS execution
- **chapter_02_javascript_concepts** — variables, scope, hoisting, TDZ
- **chapter_03_identifier_literals / chapter_05_literals** — literals, identifiers
- **chapter_04_javascript_concept** — closures, advanced concepts
- **chapter_06_operators** — all operator types, equality comparisons
- **chapter_07_if_else** — conditionals
- **chapter_08_switch_statement** — switch/case
- **chapter_09_UserInput** — reading user input
- **chapter_10_Loops** — for, while, do-while, forEach
- **chapter_11_Arrays** — array creation, indexing, methods
- **chapter_12_Funtions / chapter_12_function** — function types, HOF, callbacks
- **chapter_13_String** — string methods
- **chapter_xx_promise** — Promises, async/await with automation-themed examples (browser open → login → navigate chains)

Each chapter contains `.js` exercise files and companion `.md` interview/notes files.

## Code Patterns

- Files are small and single-concept focused
- Promise examples use automation-themed names (`openBrowser`, `loginTest`, `goToLogin`) to build mental models for future Playwright work
- Higher-order function examples mirror test runner patterns (functions passed to a `runWithLogging(testFn, testName)` wrapper)
- No external dependencies — pure Node.js built-ins only
