import { useState, useEffect } from "react";
import { validateWord } from "../services/wordService";
import { getLeaderboard, saveScore } from "../services/leaderboardService";

const TURN_TIME = 15;

export function useGame() {
    const [words, setWords] = useState([]);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(TURN_TIME);
    const [message, setMessage] = useState({text: "", type: ""});
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [leaderboard, setLeaderboard] = useState(getLeaderboard());

    async function addWord(word) {
        word = word.trim().toLowerCase();
        if (!word) return;
        const exists = await validateWord(word);
        if (!exists) {
            showMessage("La palabra no existe.", "error");            
            return;
        }
        if (words.includes(word)) {
        showMessage("La palabra ya fue utilizada.", "error");
        return;
        }
        if (words.length > 0) {
        const lastWord = words[words.length - 1];
        const lastLetter = lastWord[lastWord.length - 1];
            if (word[0] !== lastLetter) {
                showMessage("La palabra no respeta la regla de encadenamiento.", "error");
                return;
            }
        }
        if (!gameStarted) {
            setGameStarted(true);
        }
        setWords(previousWords => [...previousWords, word]);
        setScore(previousScore => previousScore + word.length);
        setTime(TURN_TIME);
        showMessage("Palabra válida.", "success");
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
    }, [gameOver, score]);

    function restartGame() {
        setWords([]);
        setScore(0);
        setTime(TURN_TIME);
        setMessage({text: "", type: ""});
        setGameOver(false);
        setGameStarted(false);
    }

    function showMessage(text, type) {
        setMessage({ text, type });
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