import axios from 'axios'
import {useReducedMotion} from "framer-motion";

const apiClient = axios.create(
    {baseURL: 'http://localhost:8080', withCredentials: true}
);

export const retrieveGamesUser = (username) => {
    return apiClient.get(`/users/${username}/list-poker-games`);
}


export const getGameById = (username,id) => {
    return apiClient.get(`/users/${username}/list-poker-games/${id}`);
}

export const deleteById = (username,id) => {
    return apiClient.delete(`/users/${username}/list-poker-games/${id}`);
}

export const updateGame = (username,id,game) => {
    return apiClient.put(`/users/${username}/list-poker-games/${id}`,game);
}

export const createGame = (username,game) => {
    return apiClient.post(`/users/${username}/list-poker-games/`,game);
}