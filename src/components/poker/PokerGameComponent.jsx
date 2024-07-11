import {useParams} from "react-router-dom";
import {useAuth} from "./security/AuthContext";
import {getGameById} from "./api/ApiService";
import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import './PokerGameComponent.css'

export default function PokerGameComponent(){

    const {id} = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [buyIn,setBuyIn] = useState()
    const  [date,setDate] = useState()
    const [endNight,setEndNight] = useState()



    useEffect(
        () =>
            retrieveGameById(),
        [id]
    )

    function retrieveGameById(){
        getGameById(username,id)
            .then(response => {
                console.log(response.data)
                setBuyIn(response.data.buyIn)
            setDate(response.data.date)
            setEndNight(response.data.endNight)})
            .catch(error => console.log(error))
    }

    function onSubmit(values){

    }

    return (
        <div className = "gameUpdate">
            <h1>Game Information</h1>
            <div>
                <Formik className ="updateBox" initialValues={ {date,buyIn,endNight}} enableReinitialize={true}
                    onSubmit={onSubmit}>
                    {
                    (props) => (
                        <div>
                            <Form>
                                <fieldset className="form-group">
                                    <label>date</label>
                                    <Field className="form-control" type="text" name="date"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>buy-in</label>
                                    <Field className="form-control" type="text" name="buyIn"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>end of night</label>
                                    <Field className="form-control" type="text" name="endNight"/>
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        </div>
                    )
                    }
                </Formik>
            </div>
        </div>
    )
}

