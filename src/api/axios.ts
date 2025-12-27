import axios, {AxiosError} from "axios";
import {API_BASE_URL} from "./globals.variables.ts";

export const API = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

API.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        let message = "Erreur de connexion au serveur.";

        if (error.response) {
            message = error.message
        }
        else if (error.code === 'ECONNABORTED') {
            message = "Le délai d'attente est dépassé.";
        }

        return Promise.reject({ ...error, message });
    }
);