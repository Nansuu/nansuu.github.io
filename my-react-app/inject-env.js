require('dotenv').config();
const fs = require('fs');
const path = require('path');

const config = {
  REACT_APP_GTM_ID: process.env.REACT_APP_GTM_ID,
  REACT_APP_GTAG_ID: process.env.REACT_APP_GTAG_ID,
  REACT_APP_OPTIMIZE_NEXT_ID: process.env.REACT_APP_OPTIMIZE_NEXT_ID
};

const configPath = path.join(__dirname, 'public', 'config.json');
fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');

console.log('config.json has been generated from .env');
