require('dotenv').config();
const request = require('request');

let countriesMap = require('./world.json');

for(let i = 0; i < process.env.ORDERS_AMOUNT; i++) {
  setTimeout(()=> {
      let countryItem = countriesMap[Math.floor(Math.random()*countriesMap.length)];
      request.post(process.emv.ORDERS_ENDPOINT, {'country': countryItem.code}, (err, res) => {

        if(err)
          console.log(err);

      })
  }, process.env.DELAY_MS || 500);
};