const axios = require('axios');
const cheerio = require('cheerio');

const getScraper = async (url) => {
    const response = await axios.get(url);
    return cheerio.load(response.data);
};

const scrapeData = async (url) => {
    const $ = await getScraper(url);
    const results = [];

    $('your_html_element').each((index, element) => {
        const data = {
            property1: $(element).find('your_child_html_element1').text().trim(),
            property2: $(element).find('your_child_html_element2').text().trim(),
            // and so on for other properties
        };
        results.push(data);
    });

    return results;
};

(async () => {
    const data = await scrapeData('your_website_url');
    console.log(data);
})();
const list = ["nama":"dillon"]
console.log(list)
