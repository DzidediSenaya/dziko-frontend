import React, { useState } from 'react';
import axios from 'axios';

const AddEventForm = ({ onEventAdded }) => {
    const [newEventData, setNewEventData] = useState({
        title: '',
        description: '',
        date: '',
        location: ''
    });
    const [message, setMessage] = useState(null); // State for success or error message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEventData({ ...newEventData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:9000/api/events', newEventData);
            onEventAdded(response.data); // Notify parent component that a new event has been added
            setNewEventData({
                title: '',
                description: '',
                date: '',
                location: ''
            });
            setMessage({ type: 'success', content: 'Event added successfully' });
        } catch (error) {
            console.error('Error adding event:', error);
            setMessage({ type: 'error', content: 'Error adding event. Please try again.' });
        }

        // Automatically hide the message after 2 seconds
        setTimeout(() => {
            setMessage(null);
        }, 2000);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add New Event</h2>
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
                        value={newEventData.title}
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
                        value={newEventData.description}
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
                        value={newEventData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">Location</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={newEventData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default AddEventForm;
