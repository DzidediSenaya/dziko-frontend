import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsList = ({ onNewsDeleted }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch news from the backend when the component mounts
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/news');
                setNews(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchNews();
    }, [onNewsDeleted]); // Refresh news list when news is deleted

    const handleDeleteNews = async (newsId) => {
        try {
            await axios.delete(`http://localhost:9000/api/news/${newsId}`);
            // Update news list after deletion
            setNews(news.filter(item => item._id !== newsId));
            onNewsDeleted(); // Notify parent component that a news has been deleted
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">News List</h2>
            {news.length === 0 ? (
                <div>No news found.</div>
            ) : (
                <ul>
                    {news.map(item => (
                        <li key={item._id}>
                            <div>{item.title}</div>
                            <div>{item.date}</div>
                            <div>{item.description}</div>
                            <button onClick={() => handleDeleteNews(item._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NewsList;
