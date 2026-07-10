import { useState, useEffect } from "react";
import { validateWord } from "../services/wordService";

export function useGame() {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(15);
    const [message, setMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    async function addWord(word) {
        word = word.trim().toLowerCase();
        if (!word) return;
        const exists = await validateWord(word);
        if (!exists) {
            setMessage("La palabra no existe.");
            return;
        }
        if (words.includes(word)) {
        setMessage("La palabra ya fue utilizada.");
        return;
        }
        if (words.length > 0) {
        const lastWord = words[words.length - 1];
        const lastLetter = lastWord[lastWord.length - 1];
            if (word[0] !== lastLetter) {
                setMessage("La palabra no respeta la cadena.");
                return;
            }
        }
        if (!gameStarted) {
            setGameStarted(true);
        }
        setWords([...words, word]);
        setScore(score + word.length);
        setTime(15);
        setMessage("Palabra válida.");
    }

    useEffect(() => {
        if (!gameStarted || gameOver) return;
        const interval = setInterval(() => {
            setTime(previousTime => {
                if (previousTime <= 1) {
                    clearInterval(interval);
                    setGameOver(true);
                    return 0;
                }
                return previousTime - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [gameStarted, gameOver]);

    return {
      words,
      score,
      time,
      message,
      gameOver,
      addWord
    };
}