import axios, {AxiosError} from "axios";
import {API_BASE_URL,STATUS_ERROR} from "./globals.variables.ts";

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
            const status = error.response.status;
            message = status
                ? STATUS_ERROR[status]
                : "Une erreur inconnue est survenue.";
        }
        else if (error.code === 'ECONNABORTED') {
            message = "Le délai d'attente est dépassé.";
        }

        return Promise.reject({ ...error, message });
    }
);