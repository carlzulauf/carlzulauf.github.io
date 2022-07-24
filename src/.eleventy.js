module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  // Return your Object options:
  return {
    dir: {
      input: ".",
      output: ".."
    }
  }
};