const { Liquid } = require("liquidjs");

module.exports = function (eleventyConfig) {

  const pathPrefix = process.env.ENVIRONMENT === 'production' ? '/banner' : '/'
  const output = process.env.ENVIRONMENT === 'production' ? '_site' : '_dev-site'
  
  let options = {
    extname: ".html",
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    root: ["_includes"]
  };

  eleventyConfig.setLibrary("liquid", new Liquid(options));

  return {
    pathPrefix,
    dir: {
      output,
    }
  }
};
