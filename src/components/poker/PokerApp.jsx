import './PokerApp.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter, useNavigate, useParams, Link,useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PokerApp() {
    return (
        <div className="PokerApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<LoginComponent />} />
                    <Route path="/login" element={<LoginComponent />} />
                    <Route path="/welcome/:username" element={<WelcomeComponent />} />
                    <Route path='*' element={<Error />} />
                    <Route path="/games" element={<ListPokerGameComponent />} />
                    <Route path="/logout" element={<LogoutComponent />} />
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
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
            nav(`/welcome/${username}`)
        } else {
            setLoginStatus('fail');
            nav('error')
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
    const {username} = useParams();

    return (
        <div className="Welcome">
            <h1>Welcome {username} !</h1>
            <div>
                Welcome Component
                Your games are <Link to="/games">here</Link>
            </div>
        </div>
    );
}

function Error() {
    return (
        <div className="error">
            <h1>
                Sorry! Page not found.
            </h1>
            <div>
                <a href="/login">Go to Login</a>
            </div>
        </div>
    );
}

function ListPokerGameComponent() {
    const game = {id:1,buyin:10, endNight: 20, netNight: 10}

    return (
        <div className="container">
            <h1>Poker Games</h1>
            <div className= "table">
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>buy in</td>
                            <td>end night</td>
                            <td>net night</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{game.id}</td>
                            <td>{game.buyin}</td>
                            <td>{game.endNight}</td>
                            <td>{game.netNight}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function HeaderComponent() {
    //const location = useLocation();

    // const getNavbarClass = () => {
    //     switch (location.pathname) {
    //         case '/welcome':
    //             return "border-bottom border-light border-3  p-2 ";
    //         case '/games':
    //             return 'navbar navbar-expand-lg navbar-light bg-success fixed-top';
    //         case '/login':
    //             return "border-bottom border-light border-3 bgp-2 ";
    //         case '/logout':
    //             return 'navbar navbar-expand-lg navbar-light bg-danger fixed-top';
    //         default:
    //             return 'navbar navbar-expand-lg navbar-light bg-dark fixed-top';
    //     }
    // };

    //<header className="border-bottom border-light border-3  p-2 ">

        return (
        <header className= "border-bottom border-light bg-light border-3  p-2">
            <div className="container">
            <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black"
                           href="https://www.pokes.com">Poker</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link"
                                                                    to="/welcome/user">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/games">Poker Games</Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        );
        }


        function FooterComponent() {
        return (
        <div className="footer">
        <h1>Footer</h1>
        </div>
        );
    }

        function LogoutComponent() {
        return (
        <div className="LogoutForm">
        <h1>You are logged out!</h1>
        <div>thank you !</div>
        </div>
        );
    }