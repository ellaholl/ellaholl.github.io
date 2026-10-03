---
title: Mindbody Phone App Redesign
date: 2026-10-03
tags: ux, usability, mobile-app, wellness, case-study
role: Product designer (concept project)
tools: Illustrator, Photoshop, After Effects, Figma
cover: images/mindbody_1.png
label: Book in 3 taps
labelcolor: #0d2f3a
height: 420
draft: true
---

*Draft: delete the italic prompts as you fill each section in, then remove the line `draft: true` from the top of this file and run `node build.mjs`. This is an independent concept project and is not affiliated with Mindbody.*

## Overview

*One short paragraph: what the app is, that you redesigned the phone app, and the headline result. Example: "I redesigned the Mindbody class-booking experience so first-time users can find and book a class in three taps instead of six."*

- **Role:** product designer, solo concept project
- **Platform:** phone app (mobile only)
- **Timeline:** *add weeks*
- **Focus:** usability of booking, login and membership management on a phone
- **Tools:** Illustrator, Photoshop, After Effects, Figma

**Scope:** this project covers the Mindbody phone app for class-goers. It does not cover the website, tablet layouts or the studio-owner software.

**User focus:** I designed only from the class-goer's point of view. I did not have access to the studio-owner side, so I did not design or make claims about it. Business needs appear only as constraints.

## The problem

*Describe what is hard for users today, in plain language. Keep it to three or four sentences.*

Public reviews repeatedly mention confusing navigation, slow screens, login failures that interrupt booking, and trouble managing memberships and multiple accounts. For an app people use before a workout, every extra step or error is a reason to give up.

**Problem statement:** *Write one sentence in the form "People who want to ___ struggle to ___ because ___."*

## Goals

- Make the core task, finding and booking a class, fast and obvious.
- Make sign-up and login reliable and forgiving.
- Give people clear control over bookings and memberships.
- Meet accessibility basics, including readable type and good contrast.

*Add one measurable target for each goal, such as number of taps, time to complete, or task success rate.*

## Constraints and business context

I designed for class-goers, but a real redesign has to work within business limits. These are the ones I kept in mind:

- Studios set class capacity, pricing, waitlists and cancellation rules, so the app must display them clearly and cannot change them.
- Reviews and a third-party summary report that Mindbody charges studios a commission on bookings made through its consumer marketplace, which affects how the app presents studio discovery. [Source: Vibefam review](https://vibefam.com/mindbody-review-pricing-features-pros-cons-2026/) *(verify against Mindbody's own pricing page before publishing)*
- Payments, waivers and memberships involve legal and billing rules that I cannot see or change, so my designs show clarity and confirmation, not new policies.

## Research

### What public reviews say

I read recent public reviews of Mindbody on software-review sites and complaint boards (collected October 2026). Many reviewers are studio owners and staff, so I treated owner-written reviews as secondary evidence and used them only where the problem also affects class-goers, such as booking and login. I give more weight to consumer sources, and I label each source below. Reviews lean negative because unhappy people are more likely to write them, and some reviewers are very happy, so I treated these as leads to test in interviews and not as facts.

**Theme 1: Booking feels complicated.** Reviewers describe confusing scheduling and navigation, with one saying the app creates "more friction than it solves" for simple bookings like massages and sauna sessions. Others mention slow load times and a mobile experience that lacks the one-tap simplicity people expect today. Sources: Capterra, G2, Software Finder.

**Theme 2: Login and app reliability.** Users report being unable to log in, the app not recognizing their credentials during booking, and sign-up starting over each time. Operators also say clients struggle to log in, purchase and schedule. Source: Trustpilot reviews summarized by CheckThat.ai.

**Theme 3: Missing features on mobile.** Some reviewers say essential tasks still require a laptop, and one wishes the desktop experience matched the app. A software-review roundup also notes frequent glitches and slow, error-filled experiences in app store ratings. Sources: Software Advice, Capterra, The Salon Business.

**Theme 4: Accounts and families.** One consumer reported multiple accounts under their name, one meant for their child, and found the app hard to navigate with no help available. Source: Pissed Consumer.

**Theme 5: Memberships, billing and cancellation.** Reviewers report charges continuing after a failed cancellation, free classes leading to a paid membership, and rules that stop members from booking a class after a pause ends. Sources: Pissed Consumer, Software Finder.

**Theme 6: Support is hard to reach.** Several reviewers describe long waits, unresolved issues and phone numbers that do not work. This is outside the app's interface, but it raises the importance of clear in-app help and self-service. Sources: Pissed Consumer, Software Advice, Software Finder.

**What people like.** Reviewers praise the practitioner bios, the ratings shown before choosing a class, and an easy booking system with integrated payments. These strengths are worth keeping. Sources: Capterra.

**What this means for the redesign:** simplify the booking path, make login forgiving, give clear control over memberships and cancellation, and support booking for family members without a second account.

**Sources**

- [Mindbody reviews, Capterra](https://www.capterra.com/p/40229/MINDBODY/reviews/) (mostly studio owners and staff, some members; early 2026)
- [Mindbody reviews, Capterra page 3](https://capterra.com/p/40229/MINDBODY/reviews/?page=3) (mostly studio owners and staff, some members; February 2026)
- [Mindbody pros and cons, G2](https://www.g2.com/products/mindbody/reviews?qs=pros-and-cons) (mostly business users; reviews through April 2026)
- [Mindbody reviews, Software Advice](https://www.softwareadvice.com/gymnastics/mindbody-profile/) (mostly business users)
- [Mindbody reviews, Software Finder](https://softwarefinder.com/retail/mindbody/reviews) (business users)
- [The Ultimate Mindbody Software Review, The Salon Business](https://thesalonbusiness.com/mindbody-software-review/) (industry reviewer, business-focused)
- [Mindbody reviews, Pissed Consumer](https://mindbody.pissedconsumer.com/review.html) (class-goers and consumers; 2026)
- [Mindbody reviews, CheckThat.ai](https://checkthat.ai/brands/mindbody/reviews) (summary of Trustpilot, G2 and Capterra; mixed owners and consumers)

*Add the app store reviews and member threads you read yourself (for example from the App Store, Google Play or fitness communities), since consumer evidence matters most for this project.*

*Add the date you checked each source, and re-check before publishing because reviews and the app change.*

### Audit of the current app

*Add annotated screenshots of the existing flows (images/mindbody-audit-1.jpg). Mark each usability problem with a number and list them below.*

1. *Problem you found, where it happens, and which heuristic it breaks*
2. *...*
3. *...*

### Heuristic review

*Score the app against the 10 usability heuristics (visibility of system status, error prevention, recognition over recall, and so on). Note the three weakest.*

### User interviews

*Number of participants, how you found them, and the tasks you asked them to attempt. Keep notes anonymous.*

> *Add one short, powerful quote from a participant here.*

## Insights

*Turn your research into three to five insights. Each one should lead to a design decision.*

- **Insight 1:** *what you learned*
- **Insight 2:** *what you learned*
- **Insight 3:** *what you learned*

## Design principles

*Choose three principles that guided every decision.*

- **Calm:** *what this means in the interface*
- **Clear:** *what this means in the interface*
- **Forgiving:** *what this means in the interface*

## Process

### Sketches and flows

*Add photos or scans of your early sketches (images/mindbody-sketches.jpg) and a simple flow diagram of the new booking path.*

### Wireframes

*Add low-fidelity phone wireframes for each flow (use a standard phone frame such as 390 x 844 px) and explain the main decisions you made and what you rejected.*

### Visual system

*Show your color palette, type choices, spacing and key components such as buttons, class cards and form fields. Explain why they suit a wellness product.*

## The solution

### 1. Discover and book a class

*Before and after screens (images/mindbody-booking-before.jpg, images/mindbody-booking-after.jpg).*

*What changed, why it is easier, and how many taps or steps you removed.*

### 2. Sign up and log in

*Show clear error messages, easy password recovery and social sign-in options.*

*Explain how the new flow prevents users from losing progress when something goes wrong.*

### 3. Manage bookings and memberships

*Show upcoming classes, cancelling, rescheduling and pausing a membership, with clear confirmation of fees and dates before the user commits.*

### 4. Family and multiple accounts

*Show how someone books for a child or partner without creating a second login.*

### Motion and feedback

*Describe the animated booking confirmation made in After Effects and what it communicates. Add a short video or GIF if you can.*

## Usability testing

*Test your prototype with five people. Describe the tasks, what you measured and what you changed afterward.*

- **Task 1:** book a class for tomorrow morning. *Result:* *completion rate and time*
- **Task 2:** cancel a booking. *Result:* *completion rate and time*
- **Task 3:** pause a membership. *Result:* *completion rate and time*

**What I changed after testing:** *list two or three improvements.*

## Accessibility

*Note contrast ratios, minimum text size, tap target size for thumbs, screen reader labels and support for larger system text.*

## Results

*Compare old and new using your own numbers.*

- Booking steps: *before* to *after*
- Task success rate: *before* to *after*
- Average time to book: *before* to *after*

## Reflection

*What went well, what you would do differently, and what you learned about designing for usability. Two or three honest sentences are enough.*

## Next steps

- *Test with a larger group.*
- *Adapt the design to other platforms: the other phone OS, tablet and a desktop browser.*
- *Design a version for first-time users.*
