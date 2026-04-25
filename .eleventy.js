const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

  module.exports = function(eleventyConfig) {

  // 1. AUTOMATIC COLLECTION: Every .md file in the posts folder is now a "post"
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // 2. SMART TAG LIST: This only looks for the "real" tags (learning, 11ty, etc.)
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    let tagSet = new Set();
    collectionApi.getFilteredByGlob("src/posts/*.md").forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") tags = [tags];
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet].sort();
  });

    // 3. The Date Filter (from before)
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long", day: "numeric", year: "numeric"
    }).format(dateObj);
  });

  eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", () => {
  return (data) => {
    if(data.draft) return true;
    return false;
  }
});


  // Keep your other config (passthrough copies, etc.) here
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};