const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://news.ycombinator.com')
  .then((response) => {
    var html = response.data;
    var total = 0;
    var $ = cheerio.load(response.data);

    $('span.score').each(function(i, element) {
        var points = parseInt($(this).text().replace(' points', ''));
        total += points;
        console.log(points);
    })
    console.log("The total points on this page are: " + String(total));
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });