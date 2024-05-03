import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = ({ onEventDeleted }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch events from the backend when the component mounts
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:9000/api/events');
                setEvents(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchEvents();
    }, [onEventDeleted]); // Refresh event list when an event is deleted

    const handleDeleteEvent = async (eventId) => {
        try {
            await axios.delete(`http://localhost:9000/api/events/${eventId}`);
            // Update event list after deletion
            setEvents(events.filter(item => item._id !== eventId));
            onEventDeleted(); // Notify parent component that an event has been deleted
        } catch (error) {
            console.error('Error deleting event:', error);
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
            <h2 className="text-2xl font-semibold mb-4">Event List</h2>
            {events.length === 0 ? (
                <div>No events found.</div>
            ) : (
                <ul>
                    {events.map(item => (
                        <li key={item._id}>
                            <div>{item.title}</div>
                            <div>{item.date}</div>
                            <div>{item.description}</div>
                            <div>{item.location}</div>
                            <button onClick={() => handleDeleteEvent(item._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
