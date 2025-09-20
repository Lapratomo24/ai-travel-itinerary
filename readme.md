# ✈️ AI Travel Itinerary Generator

A smart travel planner that uses the OpenAI API to generate personalized, day-by-day itineraries based on your destination, budget, and interests.



## ✨ Features

-   **Dynamic Itinerary Generation**: Get custom travel plans in seconds.
-   **Personalized Inputs**: Specify your destination, trip duration, budget, and interests.
-   **Detailed Breakdown**: View activities for morning, afternoon, and evening for each day.
-   **Cost Estimates**: Each activity includes an estimated cost to help with budgeting.
-   **Download as PDF**: Save your generated itinerary for offline access.
-   **Responsive Design**: Plan your trip from any device, desktop or mobile.

## 🛠️ Tech Stack

-   **Frontend**: React, Vite, Tailwind CSS
-   **Backend**: Node.js, Express
-   **AI**: OpenAI API (GPT-4o)
-   **Libraries**: Axios, Framer Motion, jsPDF, React Icons

## 📂 Project Structure

```
/ai-travel-itinerary
├── /client           (React Frontend)
│   ├── /src
│   │   ├── /components
│   │   ├── /pages
│   │   └── App.jsx
│   ├── tailwind.config.js
│   └── package.json
├── /server           (Node.js Backend)
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   `npm` or `yarn`
-   An OpenAI API Key.

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/ai-travel-itinerary.git](https://github.com/your-username/ai-travel-itinerary.git)
cd ai-travel-itinerary
```

### 2. Backend Setup

Navigate to the server directory, install dependencies, and set up your environment variables.

```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory and add your OpenAI API key:

```env
# /server/.env
OPENAI_API_KEY="sk-..."
PORT=5001
```

### 3. Frontend Setup

Navigate to the client directory and install dependencies.

```bash
cd ../client
npm install
```

### 4. Running the Application

You'll need to run both the backend and frontend servers in separate terminals.

**Terminal 1: Start the Backend Server**
```bash
# In the /server directory
npm start 
# Or use nodemon for auto-reloading
# npx nodemon server.js
```
The server will be running on `http://localhost:5001`.

**Terminal 2: Start the Frontend Development Server**
```bash
# In the /client directory
npm run dev
```
The React app will be available at `http://localhost:5173`.

## 🤖 Example AI API Request/Response

The frontend sends a simple JSON object to the backend:

#### Request from Frontend to Backend

```json
{
  "destination": "Kyoto, Japan",
  "days": "3",
  "budget": "Moderate",
  "interests": "temples, local food, nature walks"
}
```

The backend then constructs a detailed prompt and receives a structured JSON response from the OpenAI API.

#### Expected JSON Response from OpenAI

```json
{
  "itinerary": [
    {
      "day": 1,
      "date": "2025-10-26",
      "activities": {
        "morning": {
          "name": "Visit Kinkaku-ji (Golden Pavilion)",
          "description": "A stunning Zen Buddhist temple covered in gold leaf, set beside a large pond.",
          "estimated_cost": "500 JPY"
        },
        "afternoon": {
          "name": "Explore Arashiyama Bamboo Grove",
          "description": "Walk through the enchanting, towering bamboo stalks. A truly iconic Kyoto experience.",
          "estimated_cost": "Free"
        },
        "evening": {
          "name": "Dinner in Gion District",
          "description": "Explore Kyoto's traditional entertainment district and enjoy a meal. You might even spot a geisha.",
          "estimated_cost": "4000-8000 JPY"
        }
      }
    },
    {
      "day": 2,
      "date": "2025-10-27",
      "activities": {
        "morning": {
            "name": "Fushimi Inari Shrine",
            "description": "Hike through thousands of vibrant red torii gates that wind through the wooded forest.",
            "estimated_cost": "Free"
        },
        "afternoon": {
            "name": "Nishiki Market",
            "description": "A bustling market known as 'Kyoto's Kitchen', perfect for sampling local delicacies.",
            "estimated_cost": "2000-4000 JPY for snacks"
        },
        "evening": {
            "name": "Pontocho Alley",
            "description": "A narrow, atmospheric alley packed with a variety of restaurants and bars.",
            "estimated_cost": "5000-10000 JPY for dinner"
        }
      }
    }
  ]
}
```