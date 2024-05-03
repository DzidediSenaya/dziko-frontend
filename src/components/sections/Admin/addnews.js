import React, { useState } from 'react';
import axios from 'axios';

const AddNewsForm = ({ onNewsAdded }) => {
    const [newNewsData, setNewNewsData] = useState({
        title: '',
        date: '',
        description: ''
    });
    const [message, setMessage] = useState(null); // State for success or error message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewNewsData({ ...newNewsData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/api/news', newNewsData);
            onNewsAdded(response.data); // Notify parent component that a new news has been added
            setNewNewsData({
                title: '',
                date: '',
                description: ''
            });
            setMessage({ type: 'success', content: 'News added successfully' });
        } catch (error) {
            console.error('Error adding news:', error);
            setMessage({ type: 'error', content: 'Error adding news. Please try again.' });
        }

        // Automatically hide the message after 2 seconds
        setTimeout(() => {
            setMessage(null);
        }, 2000);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add News</h2>
            {message && (
                <div
                    className={`p-2 mb-4 text-white ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                        }`}
                >
                    {message.content}
                </div>
            )}
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newNewsData.title}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">Date</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date"
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={newNewsData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                    <textarea
                        className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={newNewsData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create News</button>
            </form>
        </div>
    );
};

export default AddNewsForm;
