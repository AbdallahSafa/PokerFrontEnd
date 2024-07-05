import {createContext, useContext, useState} from "react";


export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {


    const [auth, setAuth] = useState(null);

    const login = () => {
        setAuth(true);
    };

    const logout = () => {
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={ { auth, login, logout } }>
            {children}
        </AuthContext.Provider>
    );
}

