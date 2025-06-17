import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Analyse from './pages/Analyse';
import AnalyseStep2 from './pages/Analyse-step-2';
import Result from './pages/Result';
import Header from './components/Header';
import Footer from './components/Footer';
import Waiting from './pages/Waiting';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="header-container">
                    <Header />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/analyse" element={<Analyse />} />
                    <Route path="/analyse-step-2" element={<AnalyseStep2 />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/waiting" element={<Waiting />} />
                </Routes>
                <div className="footer-container">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App; 