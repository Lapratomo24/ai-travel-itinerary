// Import necessary packages
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const OpenAI = require('openai');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5001; // Use port from .env or default to 5001

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON request bodies

// --- API Route for Generating Itinerary ---
app.post('/api/generate-itinerary', async (req, res) => {
    // Destructure the request body to get user inputs
    const { destination, days, budget, interests } = req.body;

    // Basic validation
    if (!destination || !days) {
        return res.status(400).json({ error: 'Destination and number of days are required.' });
    }

    try {
        // Construct a detailed prompt for the OpenAI API
        const prompt = `
            Create a travel itinerary for a trip to ${destination} for ${days} days.
            The traveler's budget is around ${budget} and their interests include: ${interests}.
            Please provide a day-by-day breakdown with activities for Morning, Afternoon, and Evening.
            For each activity, include a short description and an estimated cost in local currency or USD.
            The final output must be a valid JSON object. Do not include any text, explanation, or markdown before or after the JSON.
            The JSON structure should be:
            {
              "itinerary": [
                {
                  "day": 1,
                  "date": "YYYY-MM-DD",
                  "activities": {
                    "morning": { "name": "Activity Name", "description": "...", "estimated_cost": "..." },
                    "afternoon": { "name": "Activity Name", "description": "...", "estimated_cost": "..." },
                    "evening": { "name": "Activity Name", "description": "...", "estimated_cost": "..." }
                  }
                }
              ]
            }
        `;

        // Make the API call to OpenAI
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o', // Or gpt-4, gpt-3.5-turbo
            messages: [{ role: 'user', content: prompt }],
            response_format: { type: "json_object" }, // Enforce JSON output
        });

        // Extract and parse the JSON response
        const itineraryJson = JSON.parse(completion.choices[0].message.content);

        // Send the parsed JSON back to the frontend
        res.json(itineraryJson);

    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'Failed to generate itinerary. Please try again.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});