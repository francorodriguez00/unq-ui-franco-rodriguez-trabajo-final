import { useState } from "react";

export function useGame() {
  const [words, setWords] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  return {
    words,
    score,
    time,
    message,
    gameOver,
  };
}