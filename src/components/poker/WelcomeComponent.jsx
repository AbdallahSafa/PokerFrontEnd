import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeComponent.css';
import {Link} from "react-router-dom";

export default function WelcomeComponent() {
    return (
        <div className="welcome-container">
            <motion.div
                className="welcome-box"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>Welcome to Pokes</h1>
                <p>
                    Track your poker game performances, analyze your stats, and improve your strategy.
                    Whether you're a beginner or a seasoned pro,
                    Pokes provides the tools you need to take your game to the next level.
                </p>
                <p>
                    Start tracking your progress!
                </p>
                <motion.button
                    className="go-to-games-button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Link to="/games" style={{ color: 'inherit', textDecoration: 'none' }}>Go track your games!</Link>
                </motion.button>
            </motion.div>
        </div>
    );
}

