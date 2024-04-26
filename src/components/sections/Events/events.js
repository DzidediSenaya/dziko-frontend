import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from backend upon component mount
        axios.get('/api/events')
            .then(response => setEvents(response.data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="event-list">
            {events.map(event => (
                <div key={event._id} className="event-card">
                    <h3>{event.title}</h3>
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    <p>Location: {event.location}</p>
                    <p>Description: {event.description}</p>
                </div>
            ))}
        </div>
    );
};

export default EventList;
