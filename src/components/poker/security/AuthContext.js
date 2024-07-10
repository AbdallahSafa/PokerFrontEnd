import {createContext, useContext, useState} from "react";


export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {


    const [auth, setAuth] = useState(null);
    const [username, setUsername] = useState(null);



    const login = (username) => {
        setAuth(true);
        setUsername(username);
    };

    const logout = () => {
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={ { auth, login, logout,username} }>
            {children}
        </AuthContext.Provider>
    );
}

