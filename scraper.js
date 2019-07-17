const cheerio = require("cheerio");
const axios = require("axios");
const topics = require("./scraperTopics");
const db = require("./models");
let results = [];

let resourcesDB = {
    updateResources: () => {
        for (let category in topics) {
            const fileUnder = category;
            const links = topics[category];
            // console.log(fileUnder + " has the following links: ", links);
            for (let index = 0; index < links.length; index++) {
                const element = links[index];
                axios.get(element).then((response) => {
                    let $ = cheerio.load(response.data);

                    $("div.media").each((i, element) => {
                        let article = {};
                        let textCol = $(element).children("div.blog_entry__text");
                        article.title = $(textCol).children("h2").text();
                        article.link = "https://www.psychologytoday.com" + $(textCol).children("h2").children("a").attr("href");
                        let bylineBlock = $(textCol).children("p.blog_entry__publish_info");
                        article.author = $(bylineBlock).children("a").first().text();
                        article.teaser = $(textCol).children("p.blog_entry__teaser").text();
                        article.category = fileUnder;
                        
                        // console.log(article.title);
                        
                        db.Article.create(article)
                            .then((articleAdded) => {
                                console.log(articleAdded);
                            })
                            .catch((err) => {
                                console.error(err);
                            });
                    });
                });
            }
        }
    }
};

module.exports = resourcesDB;