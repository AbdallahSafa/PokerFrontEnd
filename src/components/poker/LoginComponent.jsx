import {useState} from "react";
import {useNavigate} from "react-router-dom";
import './LoginComponent.css';
import {useAuth} from "./security/AuthContext";

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const nav = useNavigate();
    const authContext = useAuth();

    function userChange(event) {
        setUsername(event.target.value);
    }

    function passwordChange(event) {
        setPassword(event.target.value);
    }

    function handleLogin() {
        if (username === 'safa' && password === 'safa') {
            authContext.login(username);
            nav(`/welcome/${username}`)
        } else {
            authContext.logout();
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
                {authContext.auth === true && <p className="SuccessMessage">Login successful!</p>}
                {authContext.auth === false && <p className="ErrorMessage">Login failed. Try again.</p>}
            </div>
        </div>
    );
}