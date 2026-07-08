---
title: "Thermal Expansion Analysis Under ASME B31.3, Step by Step"
description: "A practical walkthrough of when and how to perform flexibility analysis for process piping under ASME B31.3."
pubDate: 2026-06-01
tags: ["ASME B31.3", "Piping", "Stress Analysis"]
---

Thermal expansion is one of the most common sources of piping failures and rework on a
process project &mdash; not because the physics is exotic, but because it's easy to
under-scope the analysis. This post walks through a practical approach to deciding what
needs detailed analysis and how to carry it out.

## 1. Screen before you model everything

Not every line needs a full CAESAR II model. ASME B31.3 provides simplified criteria
(the classic "guided cantilever" style checks) for deciding whether a line is likely to
be adequately flexible by inspection. Use this pass to triage:

- Short, well-supported lines with generous routing slack are usually fine.
- Lines rigidly anchored between two pieces of rotating or sensitive equipment (pumps,
  compressors, exchangers with tight nozzle allowables) deserve a closer look regardless
  of line size.
- Lines with large temperature swings (startup/shutdown, steam-out) should be flagged
  even if the "hot" case looks benign.

## 2. Model the governing lines

For lines that fail the screen, build a stress model capturing:

- Actual routing, including elevation changes and existing supports
- Correct operating cases, not just the design case &mdash; startup, shutdown, and
  upset conditions can govern
- Nozzle loads against vendor-allowable limits (API 610, NEMA SM23, or vendor-specific
  data), not just the generic B31.3 code stress

## 3. Don't stop at "passes code stress"

A line can pass B31.3 sustained and expansion stress checks and still cause problems if
nozzle loads exceed equipment-allowable limits, or if support loads are unrealistic for
the structural design. Always close the loop with the equipment vendor's allowable
loads and the structural engineer's support design.

## 4. Document the basis, not just the result

A stress report that only shows "PASS" is much less useful during future revamps than
one that documents the governing load case, the assumptions behind it, and which lines
were screened out and why. Future engineers (including future you) will thank you.
