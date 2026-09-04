const https = require('https');

function search(query) {
  return new Promise((resolve) => {
    https.get(`https://source.unsplash.com/800x800/?${query}`, (res) => {
      resolve(res.headers.location);
    });
  });
}

async function run() {
  console.log('Juice:', await search('pomegranate,juice'));
  console.log('Cola:', await search('cola,drink'));
  console.log('Water:', await search('water,bottle'));
}
run();
