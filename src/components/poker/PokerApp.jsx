import './PokerApp.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter, useNavigate, useParams, Link,useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './LoginComponent';
import WelcomeComponent from "./WelcomeComponent";
import Error from "./ErrorComponent";
import ListPokerGameComponent from "./ListGameComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";




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
            {/*<FooterComponent/>*/}
        </div>
    );
}









