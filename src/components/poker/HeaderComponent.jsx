import {Link} from "react-router-dom";

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