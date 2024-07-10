import {retrieveGamesUser} from "./api/ApiService";
import {useState,useEffect} from "react";
import './ListGameComponent.css';

export default function ListPokerGameComponent() {


    const [games,setGames] = useState([]);

    useEffect(
        () => {
            refreshGames();
        }
    )

    function refreshGames ()  {
        retrieveGamesUser("safa")
            .then(response => setGames(response.data))
            .catch(error => console.log(error))
    }


    return (
        <div className= "styleTable">
            <div className="container">
                <h1>Welcome</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>date</th>
                        <th>buy-in</th>
                        <th>end of night</th>
                        <th>net of night</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        games.map(
                            game =>
                                <tr key = {game.id}>
                                    <td>{game.id}</td>
                                    <td>{game.date}</td>
                                    <td>{game.buyIn}</td>
                                    <td>{game.endNight}</td>
                                    <td>{game.netNight}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>

);
}