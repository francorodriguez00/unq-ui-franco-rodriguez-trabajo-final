import { useState, useEffect } from "react";
import { validateWord } from "../services/wordService";
import { getLeaderboard, saveScore } from "../services/leaderboardService";

export function useGame() {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(15);
    const [message, setMessage] = useState({text: "", type: ""});
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [leaderboard, setLeaderboard] = useState(getLeaderboard());

    async function addWord(word) {
        word = word.trim().toLowerCase();
        if (!word) return;
        const exists = await validateWord(word);
        if (!exists) {
            setMessage({text: "La palabra no existe.", type: "error"});            
            return;
        }
        if (words.includes(word)) {
        setMessage({text: "La palabra ya fue utilizada.", type: "error"});
        return;
        }
        if (words.length > 0) {
        const lastWord = words[words.length - 1];
        const lastLetter = lastWord[lastWord.length - 1];
            if (word[0] !== lastLetter) {
                setMessage({text: "La palabra no respeta la cadena.", type: "error"});
                return;
            }
        }
        if (!gameStarted) {
            setGameStarted(true);
        }
        setWords([...words, word]);
        setScore(score + word.length);
        setTime(15);
        setMessage({text: "Palabra válida.", type: "success"});
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

    useEffect(() => {
        if (gameOver) {
            saveScore(score);
            setLeaderboard(getLeaderboard());
        }
    }, [gameOver]);

    function restartGame() {
        setWords([]);
        setScore(0);
        setTime(15);
        setMessage("");
        setGameOver(false);
        setGameStarted(false);
    }

    return {
      words,
      score,
      time,
      message,
      gameOver,
      leaderboard,
      addWord, 
      restartGame
    };
}