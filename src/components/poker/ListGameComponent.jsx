import {deleteById, retrieveGamesUser} from "./api/ApiService";
import {useState,useEffect} from "react";
import './ListGameComponent.css';
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";

export default function ListPokerGameComponent() {


    const [games,setGames] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useAuth();
    const username = authContext.username;
    const nav = useNavigate();

    useEffect(
        () => {
            refreshGames();
        }
    )

    function refreshGames ()  {
        retrieveGamesUser(username)
            .then(response => setGames(response.data))
            .catch(error => console.log(error))
    }

    function deleteGame(id) {
        deleteById(username,id)
            .then(response => {
                setMessage(`Delete of game ${id} successful`)
                refreshGames();
            })
            .catch(error => console.log(error))
    }


    function updateGame(id){
        console.log("update clicked")
        nav(`/games/${id}`)
    }

    function addNewGame(){
        nav(`/games/-1`)
    }

    return (
        <div className="listWrapper">
            <div className = "listContainer ">
            <h1>Welcome</h1>
            {message && <div className="alert alert-success">{message}</div>}
            <table className="table table-hover ">
                <thead className="thead-dark">
                <tr>
                    <th>Date</th>
                    <th>Buy-in</th>
                    <th>End of Night</th>
                    <th>Net of Night</th>
                </tr>
                </thead>
                <tbody>
                {games.map(game => (
                    <tr key={game.id}>
                        <td>{game.date}</td>
                        <td>{game.buyIn}</td>
                        <td>{game.endNight}</td>
                        <td>{game.netNight}</td>
                        <td>
                            <button className="btn btn-danger btn-sm mr-2" onClick={() => deleteGame(game.id)}>
                                Delete
                            </button>
                            <button className="btn btn-primary btn-sm"  onClick={() => updateGame(game.id)}>
                                Update
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
            <div className="btn btn-success" onClick = {addNewGame}> Add Game</div>
        </div>
    );
}