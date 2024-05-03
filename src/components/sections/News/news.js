import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';


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
            <Navbar />
            <div className="bg-indigo-900 py-4"></div>
            <h2 className="text-3xl font-bold mb-6 mt-52 sm:max-w-50 mx-5 px-04 text-indigo-900">Latest News</h2>
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
            <Footer />
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
