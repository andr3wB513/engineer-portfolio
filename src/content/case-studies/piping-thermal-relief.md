---
title: "Piping System Design & Relief Sizing for a Process Unit"
summary: "ASME B31.3 piping design for a chemical process unit, including thermal flexibility analysis and pressure relief system sizing."
category: "Piping Design"
tools: ["ASME B31.3", "CAESAR II", "Relief Sizing"]
order: 1
---

## Problem

A process unit required a new piping design package covering several hot process lines
running between a reactor, heat exchangers, and downstream storage. The lines needed to
satisfy ASME B31.3 requirements for thermal expansion, support loading, and equipment
nozzle loads, and the associated relief devices needed to be sized for the governing
overpressure scenarios.

## Approach

- Developed the line list from the PFD/P&ID, capturing design temperature, pressure, and
  fluid service for each line.
- Performed a stress screening pass to identify lines requiring detailed flexibility
  analysis, then modeled the governing lines in CAESAR II to check code stress,
  displacement, and nozzle loads against allowable equipment limits.
- Identified governing overpressure scenarios (blocked outlet, fire, control valve
  failure) for each protected system and sized relief devices accordingly, then checked
  relief header sizing for the combined relief load case.
- Iterated pipe routing and support locations with the piping designer to resolve
  flexibility and interference issues before issuing for construction.

## Outcome

Delivered a piping design package (stress reports, isometrics, line list, relief
datasheets) that passed client engineering review with no code-compliance rework items,
and confirmed nozzle loads were within vendor-allowable limits for all major equipment.
