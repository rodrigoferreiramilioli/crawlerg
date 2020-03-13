var Crawler = require("js-crawler");
 
new Crawler().configure({depth: 3})
  .crawl("https://g1.globo.com/", function onSuccess(page) {
    console.log(page.url);
  });