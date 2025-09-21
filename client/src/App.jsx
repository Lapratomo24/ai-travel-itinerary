import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;