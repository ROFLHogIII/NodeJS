const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');
let dataPath = path.join(__dirname, '../popular-articles.json');
let redditArray = []


rp('http://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {
        redditArray.push({ Title: item.data.title, Author: item.data.author, url: item.data.url });
        fs.writeFileSync(dataPath, JSON.stringify(redditArray) + `\n`)
    });
});