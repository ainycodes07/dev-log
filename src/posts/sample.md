---
layout: post.njk
title: Why I Chose Vanilla JS
date: 2026-04-24
tags: 
  - performance
  - frontend
  - ui/ux
---

<p style="color: var(--text-muted); font-style: italic;">
// Initializing logic_audit.sh... <br>
// Environment: Production <br>
// Status: Optimal
</p>

<br>
It's tempting to reach for a heavy framework when starting a new project. But for a personal log, `speed` is a primary feature, not an afterthought.

<br>
<br>

## 01. The Problem with Bloat
<br>
&nbsp; &nbsp; Modern web development often assumes you need a virtual DOM. For a static site, you don't. When you use `Vanilla JavaScript`, you are communicating directly with the browser's engine without a "middle-man."
<br>
<br>
<p style="border-left: 3px solid var(--border); padding-left: 1rem; color: var(--text-muted);">
<strong>System Note:</strong> Every kilobyte of JS added increases the <code>Total Blocking Time</code> on mobile devices.
</p>
<br>

## 02. Execution: Theme Engine

Here is how I handle theme toggling with zero dependencies. It’s lightweight, persists in `localStorage`, and triggers via the `T` key on your hardware.


```javascript
/**
 * @file theme_engine.js
 * @description Native performance theme switcher
 */

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 't') {
    const doc = document.documentElement;
    const current = doc.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    // Direct DOM manipulation is faster for single-toggle states
    doc.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }
});