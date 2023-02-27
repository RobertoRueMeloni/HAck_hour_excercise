const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle GET requests to the /shorten URL
app.get('/shorten', async (req, res) => {
  const longUrl = req.query.url;
  const apiKey = 'YOUR_API_KEY'; // replace with your Bitly API key
  const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  try {
    const response = await axios.post(apiUrl, {
      long_url: longUrl,
      domain: 'bit.ly'
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const shortUrl = response.data.link;
    res.redirect(shortUrl);
  } catch (error) {
    console.error('Error shortening URL:', error);
    res.status(500).send('Error shortening URL');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
