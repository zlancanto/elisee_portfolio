import axios from "axios";
import {API_BASE_URL} from "./globals.variables.ts";

export const API = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});