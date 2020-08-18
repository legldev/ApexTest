const scrapeIt = require("scrape-it");
const axios = require('axios');
const cheerio = require('cheerio');

cheerioScrap = async (req, res)  => {
    const pageContent = await axios.get('https://www.naranja.com/comercios-amigos');
    const $ = cheerio.load(pageContent.data);
    const presentations = $('dl').map((_, el) => {
        el = $(el);
        const title = el.find('div.faq-title_question').text();
        const value = el.find('dd').text();
        return { title, value };
    }).get();
  return res.status(200).json({ success: true, data: presentations });
}

module.exports = {
    cheerioScrap
  };
  