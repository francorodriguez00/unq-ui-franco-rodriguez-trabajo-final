import axios from "axios";

const API_URL = "https://word-api-hmlg.vercel.app/api";

export async function validateWord(word) {
    word = word.trim().toLowerCase();
    if (!word) return;
    const response = await axios.get(`${API_URL}/validate`, {params: {word}});
    return response.data.exists;
}