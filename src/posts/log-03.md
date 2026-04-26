---
layout: post.njk
title: LOG 03 _ How I Built Dev-Log - A Step by Step Guide to My Minimalist Blog
date: 2026-04-26
tags: 
  - learning
  - buildinpublic
  - tutorial
  - showdev
  - devlog
---

# How I Built Dev-Log: A Step-by-Step Guide to My Minimalist Blog

When I decided to build my own developer blog, I knew I wanted something that felt calm and easy to manage. I spend a lot of my time writing code, and I wanted a personal space where I could document my learning journey without having to deal with the complexity of modern web frameworks. I chose a tool called Eleventy because it allows me to write in simple Markdown while it handles all the heavy lifting of turning those files into a website.

## > A Quick Summary of the Project
In this project, I built a static blog called **Dev-Log**. I used a tool called Eleventy (also known as 11ty) because it is very lightweight and does not send any unnecessary code to the person reading the site. My main goal was to create a system where I could just write a new post, save it, and have the website update itself automatically. I also made sure the design was high-contrast and easy to read by focusing on a black-and-white theme that works well in both light and dark modes.



## > What You Need Before You Start
If you want to follow along or build something similar, you will need a few basic things on your computer:

&nbsp; &nbsp; **🠊 &nbsp; Node.js:** This is the environment that allows us to run the tools needed for the blog.

&nbsp; &nbsp; **🠊 &nbsp; A Terminal:** You will need to use your command prompt or terminal to run build commands.

&nbsp; &nbsp; **🠊 &nbsp; Basic Web Knowledge:** I used standard HTML, CSS, and a little bit of JavaScript to make everything work.



## > Step 1: Setting Up the Foundation
The first thing I had to do was set up my project folder and install the necessary software. I created a folder called `dev-log` and installed Eleventy. To make sure the website stays organized, I created an configuration file called `eleventy.config.js`.

```javascript
// This is the main configuration file for the blog.
module.exports = function(eleventyConfig) {
  
  // I added these lines to tell Eleventy to copy my folders 
  // directly to the final website so my styles and images work.
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/images");

  return {
    dir: {
      input: "src",    // This is where I write my code.
      output: "_site"  // This is where the finished website goes.
    }
  };
};
```
<br>

This file is important because it acts as the "manager" for the whole project. It tells the computer exactly where my files are located and where the finished website should be placed.



## > Step 2: Automating My Post Collection
One problem I faced was how to tell the website which files were blog posts and which were just regular pages. At first, I was manually tagging every file, but that felt like too much repetitive work. I decided to use a feature called "Globbing" to automate this.

```javascript
// I added this to my configuration file.
eleventyConfig.addCollection("posts", function(collectionApi) {
  // This line tells the system to look inside the "posts" folder.
  // Every Markdown file it finds there is automatically treated as a blog post.
  return collectionApi.getFilteredByGlob("src/posts/*.md");
});
```
<br>

By adding this logic, I never have to manually categorize a post again. As long as I save my file in the correct folder, it will appear on my homepage and the archive page automatically. This reduces the chance of me making a mistake or forgetting to add a tag.



## > Step 3: Designing for Focus and Contrast
I wanted my design to be very simple so that the reader can focus entirely on the text. I used CSS variables to create a high-contrast theme. I chose black and white because it looks professional and is easy on the eyes.

```css
/* I used variables so I could change colors in one place. */
:root {
  --bg: #ffffff;      /* White background for light mode */
  --text: #1a1a1a;    /* Dark gray text for readability */
  --border: #e0e0e0;  /* Light lines to separate sections */
}

/* This section changes the colors if the user prefers dark mode. */
[data-theme="dark"] {
  --bg: #0a0a0a;
  --text: #f0f0f0;
  --border: #333333;
}
```
<br>

Using these variables allowed me to create a theme toggle button. When a user clicks the button, a small piece of JavaScript changes the "data-theme" attribute, and the whole site instantly switches colors without needing to reload the page.



## > Step 4: Building the Dynamic Explore Page
I wanted an "Explore" page where people could filter my posts by topic. I also wanted to show exactly how many posts I have written for each topic, such as "Learning (2)" or "Webdev (5)."

```html
{% raw %}
<div class="tag-grid">
    {% for tag in collections.tagList %}
        <button class="explore-tag" data-tag="{{ tag }}">
            #{{ tag | upper }} ({{ collections[tag].length }})
        </button>
    {% endfor %}
</div>
{% endraw %}
```
<br>

In this code, the system loops through all the unique tags I have used in my posts. The `collections[tag].length` part is very helpful because it automatically counts my posts. This means I don't have to update the numbers myself; the website does the math every time I publish something new.



## > Common Pitfalls and How I Fixed Them
During this build, I ran into a frustrating issue where a tag called "#post" kept showing up on my screen even though I didn't want it there. I tried deleting it from my Markdown files, but it wouldn't go away.

I eventually discovered that I had a file named `posts.json` in my folder that was forcing that tag onto every single page. Once I removed the tag from that JSON file, the website finally looked exactly the way I wanted it to. I learned that in Eleventy, files can sometimes "inherit" data from their folders, so you have to be careful about what you put in your configuration files.



## > Conclusion
Building [Dev-Log](https://dev-log-ainycodes07.netlify.app/) has been a great way for me to practice my engineering skills while creating something useful. By using complete sentences and simple logic, I was able to build a site that is very fast and very easy to maintain. I am very happy with the result because it feels like a digital version of a clean, quiet notebook.

If you are interested in seeing how it all works together, I recommend trying to build a small site with Eleventy yourself. It is a great way to learn how the web works without getting lost in complicated software. If you have any questions about my process, [feel free to reach out](https://dev-log-ainycodes07.netlify.app/about/)!

