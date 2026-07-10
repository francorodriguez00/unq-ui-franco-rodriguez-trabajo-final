import { useState } from "react";
import { validateWord } from "../services/wordService";

export function useGame() {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(15);
    const [message, setMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);

    async function addWord(word) {
        const exists = await validateWord(word);
        if (!exists) {
            setMessage("La palabra no existe.");
            return;
        }
        setWords([...words, word]);
        setScore(score + word.length);
        setMessage("Palabra válida.");
    }

    return {
      words,
      score,
      time,
      message,
      gameOver,
      addWord
    };
}