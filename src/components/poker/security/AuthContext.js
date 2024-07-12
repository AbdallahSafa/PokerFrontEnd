import {createContext, useContext, useState} from "react";
import {authenticateService} from "../api/ApiService";
import {apiClient} from "../api/ApiClient";


export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {


    const [auth, setAuth] = useState(null);
    const [username, setUsername] = useState(null);
    const [token,setToken] = useState(null);


    const login = async (username, password) => {
        const token = 'Basic ' + window.btoa(username + ':' + password);

        try {
            const response = await authenticateService(token);
            if (response.status === 200) {
                setAuth(true)
                setUsername(username)
                setToken(token)
                apiClient.interceptors.request.use(
                (config) => {
                    config.headers.Authorization = token;
                    return config
                })
                return true
            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    };

    const logout = () => {
        setAuth(false);
        setToken(null)
        setUsername(null)
    };


    return (
        <AuthContext.Provider value={ { auth, login, logout,username,token}}>
            {children}
        </AuthContext.Provider>
    );
}

