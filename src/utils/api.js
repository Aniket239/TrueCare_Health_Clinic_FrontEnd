import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 10000, // Optional: request timeout in ms
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        // You can add Authorization or other default headers here if needed
    },
});