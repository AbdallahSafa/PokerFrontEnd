import {deleteById, retrieveGamesUser} from "./api/ApiService";
import {useState,useEffect} from "react";
import './ListGameComponent.css';

export default function ListPokerGameComponent() {


    const [games,setGames] = useState([]);
    const [message,setMessage] = useState(null);

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

    function deleteGame(id) {
        deleteById("safa",id)
            .then(response => {
                setMessage(`Delete of game ${id} successful`)
                refreshGames();
            })
            .catch(error => console.log(error))
    }


    return (
        <div className= "styleTable">
            <div className="container">
                <h1>Welcome</h1>
                {message && <div className="alert alert-success">{message}</div>}
                <table className = "table table-striped">
                    <thead>
                    <tr>
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
                                    <td>{game.date}</td>
                                    <td>{game.buyIn}</td>
                                    <td>{game.endNight}</td>
                                    <td>{game.netNight}</td>
                                    <td> <button className = "btn btn-warning" onClick= {() => deleteGame(game.id)}> Delete</button></td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>

);
}