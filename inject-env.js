const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Read the HTML file
fs.readFile('public/list/cp03/apply/completion_thanks01.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  // Replace placeholders with actual environment variable values
  let result = data.replace(/%REACT_APP_GTM_ID%/g, process.env.REACT_APP_GTM_ID)
                   .replace(/%REACT_APP_GTAG_ID%/g, process.env.REACT_APP_GTAG_ID);

  // Write the updated HTML content back to the file
  fs.writeFile('public/list/cp03/apply/completion_thanks01.html', result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing HTML file:', err);
      return;
    }
    console.log('Environment variables injected successfully!');
  });
});
