require('dotenv').config();
const axios = require('axios');
const token = process.env.BRAWLSTARS_KEY;

const brawlstars = axios.create({
  baseURL: 'https://api.brawlstars.com/v1',
  headers: {
    authorization: `Bearer ${token}`,
  },
});

module.exports = {
  brawlstars,
};
