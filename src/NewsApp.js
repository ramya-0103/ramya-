import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [articles, setArticles] = useState([]);

  // Fetch data from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=44c74f8c495e47bf9d596e0dd46c5604');
        const data = await response.json();
        setArticles(data.articles);  // Store articles in state
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>News Headlines</h1>
      {articles.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
              <img src={article.urlToImage} alt={article.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsApp;
