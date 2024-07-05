import './PokerApp.css';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    useNavigate,
    useParams,
    Link,
    useLocation,
    Navigate
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './LoginComponent';
import WelcomeComponent from "./WelcomeComponent";
import Error from "./ErrorComponent";
import ListPokerGameComponent from "./ListGameComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AuthProvider, {useAuth} from "./security/AuthContext";

function AuthenticatedRoute({ children }) {
    const navigate = useNavigate();
    const authContext = useAuth()
    if (authContext.auth === true) {
        return children;
    }
    return <Navigate to ='/' />
}

export default function PokerApp() {
    return (
        <div className="PokerApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome/:username" element={
                         <AuthenticatedRoute>
                            <WelcomeComponent />
                         </AuthenticatedRoute>
                        }/>
                        <Route path='*' element={<Error />} />
                        <Route path="/games" element={
                            <AuthenticatedRoute>
                                <ListPokerGameComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                    </Routes>
                </BrowserRouter>
                {/*<FooterComponent/>*/}
            </AuthProvider>
        </div>
    );
}









