import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { BsFillCloudSunFill } from 'react-icons/bs';

const ItineraryCard = ({ itinerary }) => {
    return (
        <div className="space-y-6">
            {itinerary.map((day) => (
                <div key={day.day} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">Day {day.day}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Morning */}
                        <div className="flex items-start space-x-3">
                            <FaSun className="text-yellow-500 mt-1 text-xl" />
                            <div>
                                <h4 className="font-semibold">Morning</h4>
                                <p className="font-bold">{day.activities.morning.name}</p>
                                <p className="text-sm text-gray-600">{day.activities.morning.description}</p>
                                <p className="text-sm font-medium text-green-600">Cost: {day.activities.morning.estimated_cost}</p>
                            </div>
                        </div>
                        {/* Afternoon */}
                         <div className="flex items-start space-x-3">
                            <BsFillCloudSunFill className="text-orange-500 mt-1 text-xl" />
                            <div>
                                <h4 className="font-semibold">Afternoon</h4>
                                <p className="font-bold">{day.activities.afternoon.name}</p>
                                <p className="text-sm text-gray-600">{day.activities.afternoon.description}</p>
                                <p className="text-sm font-medium text-green-600">Cost: {day.activities.afternoon.estimated_cost}</p>
                            </div>
                        </div>
                        {/* Evening */}
                         <div className="flex items-start space-x-3">
                            <FaMoon className="text-indigo-500 mt-1 text-xl" />
                            <div>
                                <h4 className="font-semibold">Evening</h4>
                                <p className="font-bold">{day.activities.evening.name}</p>
                                <p className="text-sm text-gray-600">{day.activities.evening.description}</p>
                                <p className="text-sm font-medium text-green-600">Cost: {day.activities.evening.estimated_cost}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItineraryCard;