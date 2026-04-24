const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // Add Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Define the 'date' filter that was missing
  eleventyConfig.addFilter("date", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(dateObj);
  });

  // Pass through CSS and JS to the compiled site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};