import {useParams} from "react-router-dom";
import {useAuth} from "./security/AuthContext";
import {getGameById} from "./api/ApiService";
import {useEffect} from "react";

export default function PokerGameComponent(){

    const {id} = useParams();
    const authContext = useAuth();
    const username = authContext.username;

    useEffect(
        () =>
            retrieveGameById(),
        [id]
    )

    function retrieveGameById(){
        getGameById(username,id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <div className = "game ">
            <h1>asdsgasdgsagsagdasdfsdfasdfasdfsadfasdfsadfasdfasdfasdfsadfasdf</h1>
        </div>
    )
}

