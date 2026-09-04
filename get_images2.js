const https = require('https');

function search(query) {
  return new Promise((resolve) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent('site:unsplash.com/photos ' + query)}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = data.match(/https:\/\/unsplash\.com\/photos\/([a-zA-Z0-9-]+)/g);
        resolve(matches ? [...new Set(matches)].slice(0, 3) : []);
      });
    });
  });
}

async function run() {
  console.log('Juice:', await search('pomegranate juice'));
  console.log('Cola:', await search('cola drink'));
  console.log('Water:', await search('water bottle'));
}
run();
