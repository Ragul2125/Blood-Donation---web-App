import React, { useState, useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import './Event.css'
import header from "../../assets/header-img.svg";
import api from '../../api/service';

const Event = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await api.get('/events/getevents');
                setEvents(response.events || []);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch events");
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const filterEvents = (events, type) => {
        if (!Array.isArray(events)) return [];
        
        return events.filter(event => {
            if (!event) return false;
            
            const eventTitle = event.title || '';
            const searchTermLower = searchTerm.toLowerCase();
            
            const matchesSearch = eventTitle.toLowerCase().includes(searchTermLower);
            
            if (type === 'upcoming') {
                return event.status === 'upcoming' && matchesSearch;
            } else if (type === 'featured') {
                return event.status === 'ongoing' && matchesSearch;
            }
            return false;
        });
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'Date not specified';
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
        } catch {
            return 'Invalid date';
        }
    };

    const parseTiming = (timingString) => {
        if (!timingString) return { start: 'N/A', end: 'N/A' };
        try {
            const [start, end] = timingString.split(' - ');
            return { start, end };
        } catch {
            return { start: 'N/A', end: 'N/A' };
        }
    };

    if (loading) {
        return <div className="loading">Loading events...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    const upcomingEvents = filterEvents(events, 'upcoming');
    const featuredEvents = filterEvents(events, 'featured');

    return (
        <div className='event-pg'>
            <header>
                <h2>Donation Events</h2>
                <img src={header} alt="" />
            </header>
            <div className='event-body'>
                <div className='search-box'>
                    <p><IoSearchOutline /></p>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <p><FaCalendar /></p>
                </div>
                <div className='events-overall'>
                    <div className='upcoming'>
                        <h4>Upcoming Events</h4>
                        <div className='upcoming-events'>
                            {upcomingEvents.length > 0 ? (
                                upcomingEvents.map((event) => (
                                    <div className='upcoming-cards' key={event._id}>
                                        <div className='event-card'>
                                            <h2>{event.title || 'Blood Donation Camp'}</h2>
                                            <div className='timing'>
                                                <div>
                                                    <p>{formatDate(event.date)}</p>
                                                    <p>{event.timing || '10:00 AM - 4:00 PM'}</p>
                                                </div>
                                                {event.registration_start && (
                                                    <div>
                                                        <p>Registration: {formatDate(event.registration_start)}</p>
                                                        <p>to {formatDate(event.registration_end)}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No upcoming events found</p>
                            )}
                        </div>
                    </div>
                    <div className='featured'>
                        <h4>Ongoing Events</h4>
                        <div className='upcoming-events'>
                            {featuredEvents.length > 0 ? (
                                featuredEvents.map((event) => (
                                    <div className='upcoming-cards' key={event._id}>
                                        <div className='event-card'>
                                            <h2>{event.title || 'Blood Donation Camp'}</h2>
                                            <div className='timing'>
                                                <div>
                                                    <p>{formatDate(event.date)}</p>
                                                    <p>{event.timing || '10:00 AM - 4:00 PM'}</p>
                                                </div>
                                                {event.registration_start && (
                                                    <div>
                                                        <p>Registration: {formatDate(event.registration_start)}</p>
                                                        <p>to {formatDate(event.registration_end)}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No featured events found</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;