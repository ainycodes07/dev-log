---
layout: post.njk
title: LOG 01 _ Why I Built Dev-Log
date: 2026-04-25
tags: 
  - Dev-Log
---


# Why I Built This
<br>

I needed a place to write, so I made one.
<br>
<br>

I've been learning frontend development for a while now, and I kept wanting to document things—small wins, mistakes, things I figured out. But every blogging platform felt wrong. Too polished. Too much. I wanted something that felt like mine.
<br>
<br>

So I built `Dev-Log`.
<br>
<br>
<br>

## >> What It Actually Is
<br>

It's just a blog. Not a portfolio. Not a showcase. Just a place where I can write about what I'm learning and building.
<br>
<br>

I used `Eleventy (11ty)` because it's simple. You write markdown files, and it turns them into a website. No heavy frameworks. No React. No complicated setup. It felt right for someone who just wants to focus on writing and learning, not fighting with tools.
<br>
<br>

The design looks like a terminal because that's what I stare at every day. Dark background. Green text. Simple. I didn't want it to look like every other blog with the same soft colors and rounded corners. This feels more like... me, I guess.
<br>
<br>
<br>

## >> Making It Fast
<br>

I got a `100/100 Lighthouse Score` on desktop, which surprised me honestly. I wasn't trying to optimize everything perfectly—I just wanted it to load fast because slow websites annoy me.
<br>
<br>

Here's what helped:
<br>
<br>

`Critical CSS` I put the important styles directly in the HTML instead of making the browser wait for external files. This made the text show up instantly.
<br>
<br>

`No framework bloat` Eleventy builds static HTML. No JavaScript unless you actually need it. The whole site is just HTML and CSS, which browsers are really good at loading quickly.
<br>
<br>

`Simple fonts` I used system fonts at first, then added custom ones later. But I made sure they didn't block the page from loading.
<br>
<br>

The mobile score is 91, which is fine. I could probably get it to 100 if I removed some animations, but I like how they look, so I kept them.
<br>
<br>
<br>

## >> Why I'm Doing This
<br>

Honestly? I forget things. A lot. When I solve a problem or learn something new, it feels clear in the moment. Then two weeks later, I'm googling the same thing again.
<br>
<br>

Writing helps. It forces me to actually understand what I did instead of just copying code and moving on. And if I write it down here, maybe I'll remember. Or maybe I won't, but at least I'll have a place to look.
<br>
<br>

Also, I like the idea of having a space that's just mine. Not on Medium. Not on someone else's platform. Just a small corner of the internet where I can put thoughts without worrying about algorithms or any of that.
<br>
<br>
<br>

## >> What You'll Find Here
<br>

Mostly frontend stuff—HTML, CSS, JavaScript. Things I'm figuring out with Vanilla JS, 11ty, UI/UX. Sometimes performance or accessibility when I learn something new about them.
<br>
<br>

But also just... thoughts. What it's like learning this stuff. Mistakes I made. Things that confused me. The boring, real parts of development that don't make it into tutorials.
<br>
<br>

It won't always be polished. That's kind of the point.
<br>
<br>

`// system ready`