import {deleteById, netProfitLoss, retrieveGamesUser} from "./api/ApiService";
import React, {useState,useEffect} from "react";
import './ListGameComponent.css';
import {useAuth} from "./security/AuthContext";
import {useNavigate} from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function ListPokerGameComponent() {

    const [games,setGames] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useAuth();
    const username = authContext.username;
    const nav = useNavigate();
    const [totalNetNight, setTotalNetNight] = useState();

    useEffect(
        () => {
            refreshGames();
            getTotalNetProfitLoss(username)
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

    function getTotalNetProfitLoss (username){
        netProfitLoss(username)
            .then(response =>{
                setTotalNetNight(response.data)
                console.log(response.data)
            }).catch(error => console.log(error))
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-primary mr-2" onClick={() => updateGame(rowData.id)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger" onClick={() => deleteGame(rowData.id)} />
            </React.Fragment>
        );
    };

    const netNightTemplate = (rowData) => {
        const netNight = rowData.netNight;
        const formattedNetNight = netNight >= 0 ? `$${netNight.toFixed(2)}` : `-$${Math.abs(netNight).toFixed(2)}`;
        const netNightClass = netNight >= 0 ? 'positive-net-night' : 'negative-net-night';

        return (
            <span className={netNightClass}>{formattedNetNight}</span>
        );
    };

    return (
        <div className="listWrapper">
            <div className="listContainer">
                <h1>Welcome</h1>
                {message && <div className="alert alert-success">{message}</div>}
                <DataTable value={games} showGridlines={true} showStrippedRows = {true} size = {"small"} tableStyle={{ minWidth: '60rem' }} >
                    <Column field="date" header="Date" />
                    <Column field="buyIn" header="Buy-in" body={(rowData) => `$${rowData.buyIn.toFixed(2)}`} />
                    <Column field="endNight" header="End of Night" body={(rowData) => `$${rowData.endNight.toFixed(2)}`} />
                    <Column field="netNight" header="Net of Night" body={netNightTemplate} />
                    <Column body={actionBodyTemplate} header="Actions" />
                </DataTable>
                <h2>Total Net: ${totalNetNight}</h2>
                <Button label="Add Game" icon="pi pi-plus" className="p-button-success p-button-lg mt-3 add-game-button" onClick={addNewGame} />
            </div>
        </div>
    );
}


