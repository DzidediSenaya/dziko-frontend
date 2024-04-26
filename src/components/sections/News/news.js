import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
    const [news, setNews] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        axios.get('/api/news')
            .then(response => setNews(response.data.news))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleCloseModal = () => {
        setSelectedArticle(null);
    };

    return (
        <div>
            <h1>Latest News</h1>
            {news.map((article, index) => (
                <div key={index} className="news-card" onClick={() => handleArticleClick(article)}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
            ))}
            {selectedArticle && (
                <NewsDetailsModal article={selectedArticle} onClose={handleCloseModal} />
            )}
        </div>
    );
};

const NewsDetailsModal = ({ article, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>{article.content}</p> {/* Additional content */}
                <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default News;
