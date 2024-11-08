const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors()); 

const apiKey = '44c74f8c495e47bf9d596e0dd46c5604';
app.get('/', (req, res) => {
  res.send('Welcome to the News API!'); 
});

app.get('/api/news', async (req, res) => {
  const category = req.query.category || 'general'; 
  const query = req.query.query || ''; 
  const country = req.query.country || 'us'; 
  
  try {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    
    if (query) {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    }
    const response = await axios.get(url);

    console.log('News API Response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
