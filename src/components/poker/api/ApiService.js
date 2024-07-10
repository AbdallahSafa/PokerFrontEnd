import axios from 'axios'
import {useReducedMotion} from "framer-motion";

const apiClient = axios.create(
    {baseURL: 'http://localhost:8080', withCredentials: true}
);

export const retrieveGamesUser = (username) => {
    return apiClient.get(`/users/${username}/list-poker-games`);
}




// export const retrieveGamesUser = axios.create({
//     baseURL: 'http://localhost:8080/users/safa/list-poker-games', // Adjust to your backend URL
//     withCredentials: true,
// });