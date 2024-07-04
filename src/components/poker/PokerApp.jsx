import './PokerApp.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom';

export default function PokerApp() {
    return (
        <div className="PokerApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome" element={<WelcomeComponent />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);
    const nav = useNavigate();

    function userChange(event) {
        setUsername(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        // Replace this with your actual login logic
        if (username === 'user' && password === 'pass') {
            setLoginStatus('success');
            nav('/welcome')
        } else {
            setLoginStatus('fail');
        }
    }

    return (
        <div className="Login">
            <div className="LoginForm">
                <div className="FormField">
                    <label className="FormField_Label" htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="FormField_Input"
                        onChange={userChange}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="FormField">
                    <label className="FormField_Label" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="FormField_Input"
                        onChange={passwordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <div className="FormField">
                    <button className="FormField_Button" onClick={handleLogin}>Login</button>
                </div>
                {loginStatus === 'success' && <p className="SuccessMessage">Login successful!</p>}
                {loginStatus === 'fail' && <p className="ErrorMessage">Login failed. Try again.</p>}
            </div>
        </div>
    );
}

function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    );
}