import {useAuth} from "./security/AuthContext";

export default function LogoutComponent() {

    const authContext = useAuth();

    return (
        <div className="LogoutForm">
            <h1>You are logged out!</h1>
            <div>thank you !</div>
            {authContext.logout()}
        </div>
    );
}