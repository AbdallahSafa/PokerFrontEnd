import {Link} from "react-router-dom";
import {useContext} from "react";
import {useAuth} from "./security/AuthContext";
import './HeaderComponent.css'

export default function HeaderComponent() {
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

    const authContext = useAuth();
    const isAuthenticated = authContext.auth;

    return (
        <header className= "border-bottom border-dark bg-dark border-3  p-2 fixed-top">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-white"
                           href="https://www.pokes.com">Pokes</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5 text-white">{isAuthenticated && <Link className="nav-link"  to="/welcome/user">Home</Link>}
                                </li>
                                <li className="nav-item fs-5 text-white">{isAuthenticated &&<Link className="nav-link" to="/games">Games</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5 text-white"> {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}</li>
                            <li className="nav-item fs-5 text-white"> {isAuthenticated && <Link className="nav-link" to="/logout">Logout</Link>} </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}