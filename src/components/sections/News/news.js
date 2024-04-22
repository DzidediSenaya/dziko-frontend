import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';

export default function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('/api/news')
            .then(response => setNews(response.data.news))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <section>
                <div style={{ marginTop: '300px' }}></div> {/* Add spacing here */}
                <div className="p-4">
                    <h1 className="text-2xl font-semibold mb-4 text-indigo-900">News and Events</h1>
                    {/* Display news articles */}
                    {news.map((article, index) => (
                        <div key={index}>
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
