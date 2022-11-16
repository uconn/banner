const { Liquid } = require("liquidjs");

module.exports = function (eleventyConfig) {
  let options = {
    extname: ".html",
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    root: ["_includes"]
  };

  eleventyConfig.setLibrary("liquid", new Liquid(options));
};
