import { useState } from "react";
import { validateWord } from "../services/wordService";

export function useGame() {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(15);
    const [message, setMessage] = useState("");
    const [gameOver, setGameOver] = useState(false);

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