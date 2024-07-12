import {useNavigate, useParams} from "react-router-dom";
import {useAuth} from "./security/AuthContext";
import {getGameById, updateGame} from "./api/ApiService";
import {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import './PokerGameComponent.css'
import {createGame} from "./api/ApiService";
import moment from "moment";

export default function PokerGameComponent(){

    const {id} = useParams();
    const authContext = useAuth();
    const username = authContext.username;
    const [buyIn,setBuyIn] = useState()
    const  [date,setDate] = useState()
    const [endNight,setEndNight] = useState()
    const navigate = useNavigate()



    useEffect(
        () =>
            retrieveGameById(),
        [id]
    )

    function retrieveGameById(){
        if (id !== "-1") {
            getGameById(username, id)
                .then(response => {
                    console.log(response.data)
                    setBuyIn(response.data.buyIn)
                    setDate(response.data.date)
                    setEndNight(response.data.endNight)
                })
                .catch(error => console.log(error))
        }
    }


    function onSubmit(values){
        const game = {
            id:id,
            date: values.date,
            buyIn: values.buyIn,
            endNight: values.endNight,
            netNight: values.endNight - values.buyIn
        }
        if (id === -1){
            createGame(username,game)
                .then(response => {
                    navigate('/games')
                })
                .catch(error => console.log(error))
        }else {
            updateGame(username, id, game)
                .then(response => {
                    navigate('/games')
                })
                .catch(error => console.log(error))
        }
    }


    //dont work
    function validate(values){
        let errors = {

        }
        if(values.buyIn <= 0){
            errors.buyIn = "Enter a valid buy-in"
        }
        if (values.date === "" || values.date === null ||! moment(values.date).isValid()) {
            errors.date = "Enter a valid date"
        }
        if (values.endNight <= 0){
            errors.endNight = "Enter a valid end of night"
        }
        console.log(errors)
        return errors
    }

    return (
        <div className = "updateWrapper">
            <div className = "gameUpdate">
                <h1>Poker Session Details</h1>
                <div>
                    <Formik className ="updateBox" initialValues={ {date,buyIn,endNight}} enableReinitialize={true} validate={validate} validateOnChange={false} validateOnBlur={false}
                        onSubmit={onSubmit}>
                        {
                        (props) => (
                            <div>
                                <Form>

                                    <ErrorMessage name="date" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="buyIn" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="endNight" component="div" className="alert alert-warning"/>

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
        </div>
    )
}

