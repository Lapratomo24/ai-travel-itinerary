import React, { useState } from 'react';

const Form = ({ onSubmit, loading }) => {
    const [formData, setFormData] = useState({
        destination: '',
        days: 5,
        budget: 'Moderate',
        interests: 'sightseeing, local cuisine'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Form Fields */}
            <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
                <input type="text" name="destination" value={formData.destination} onChange={handleChange} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
             <div>
                <label htmlFor="days" className="block text-sm font-medium text-gray-700">Days</label>
                <input type="number" name="days" value={formData.days} onChange={handleChange} min="1" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
                <select name="budget" value={formData.budget} onChange={handleChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2">
                    <option>Budget-friendly</option>
                    <option>Moderate</option>
                    <option>Luxury</option>
                </select>
            </div>
            <div>
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Interests</label>
                <input type="text" name="interests" value={formData.interests} onChange={handleChange} placeholder="e.g., museums, hiking" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div className="md:col-span-2 lg:col-span-4 text-center">
                 <button type="submit" disabled={loading} className="w-full md:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400">
                    {loading ? 'Generating...' : 'Generate Itinerary'}
                </button>
            </div>
        </form>
    );
};

export default Form;