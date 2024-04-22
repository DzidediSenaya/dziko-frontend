import React from 'react';
import axios from 'axios';

export default function Event() {
    const [setEvents] = React.useState([]);

    React.useEffect(() => {
        axios.get('/api/events')
            .then(response => setEvents(response.data.events))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Events</h1>
            {/* Display events */}
        </div>
    );
}
