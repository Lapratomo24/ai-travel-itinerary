import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import { FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Component Imports
import Hero from '../components/Hero';
import Form from '../components/Form';
import ItineraryCard from '../components/ItineraryCard';

const Home = () => {
    const [itinerary, setItinerary] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const generateItinerary = async (formData) => {
        setLoading(true);
        setError('');
        setItinerary(null);

        try {
            // API call to our backend server
            const response = await axios.post('http://localhost:5001/api/generate-itinerary', formData);
            setItinerary(response.data.itinerary);
        } catch (err) {
            setError('Failed to generate itinerary. Please check your inputs and try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        let yPos = 10;
        doc.setFontSize(16);
        doc.text("Your Custom Travel Itinerary", 10, yPos);
        yPos += 10;

        itinerary.forEach(day => {
            doc.setFontSize(14);
            doc.text(`Day ${day.day}`, 10, yPos);
            yPos += 7;
            doc.setFontSize(12);
            doc.text(`Morning: ${day.activities.morning.name} (${day.activities.morning.estimated_cost})`, 15, yPos);
            yPos += 7;
            doc.text(`Afternoon: ${day.activities.afternoon.name} (${day.activities.afternoon.estimated_cost})`, 15, yPos);
            yPos += 7;
            doc.text(`Evening: ${day.activities.evening.name} (${day.activities.evening.estimated_cost})`, 15, yPos);
            yPos += 10;
        });
        
        doc.save("travel-itinerary.pdf");
    };

    return (
        <div>
            <Hero />
            <div className="container mx-auto px-4 py-8">
                <Form onSubmit={generateItinerary} loading={loading} />
                {loading && (
                    <div className="flex justify-center items-center mt-8">
                        <FaSpinner className="animate-spin text-4xl text-blue-500" />
                        <p className="ml-4 text-lg">Generating your adventure...</p>
                    </div>
                )}
                {error && <p className="text-center text-red-500 mt-4">{error}</p>}
                
                {itinerary && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-bold">Your Custom Itinerary</h2>
                            <button onClick={downloadPDF} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                                Download PDF
                            </button>
                        </div>
                        <ItineraryCard itinerary={itinerary} />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Home;