---
title: "Self-Tailored — Body Measurement App"
summary: "A mobile app for recording your own body measurements with guided diagrams, then exporting a clean tailoring spec sheet as a PDF or JPG."
category: "Mobile App"
tools: ["React Native", "Expo", "TypeScript", "Supabase"]
order: 2
---

## What it is

If you're like me, you find clothes that actually fit you by chance, and wear them until they become rags.
Unfortunately, most of the clothes in my closet go unworn. This doesn't happen because I dislike the design or the materials,
they just don't fit quite right, and therefore I rarely find myself reaching for them. Now imagine you could take all
of the clothes you rarely wear to someone who can make alterations along with a printed list of your key measurements,
and when you get back everything fits perfectly.

Self-Tailored turns that process into something you
can do yourself: the app walks you through each measurement with a diagram showing
exactly where the tape goes, stores everything in a profile, and exports a
professional-looking measurement sheet you can hand to a tailor or upload to an order
form.

The app is primarily for one of x3 main types of users:
- People who want custom made clothes from a tailor.
- People who want existing clothes altered to fit better.
- People who need to submit measurements for group functions - example: wedding party getting measurements.

## How it's built

- **React Native + Expo** with TypeScript and file-based routing, so one codebase runs
  on iOS and Android.
- **Guided measurement flow** — each measurement has an anatomical diagram and
  instructions, so the numbers are repeatable, not guesses.
- **Supabase** handles authentication and syncs measurement profiles, so your data
  follows you across devices.
- **Document export** — generates a formatted spec sheet client-side as a PDF or JPG,
  ready to share.

## Status

In active development, pinned to Expo SDK 54 and running in Expo Go while heading
toward store release. Will post a link to the web-app home and iPhone app download once active (coming Summer 2026).
