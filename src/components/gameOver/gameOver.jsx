import Leaderboard from "../leaderboard/leaderboard";
import "./gameOver.css";

function GameOver({ score, wordCount, leaderboard, onRestart }) {
  return (
    <div className="game-over">
      <h2>Juego terminado</h2>

      <p>Puntaje final: <strong>{score}</strong></p>

       <p>Palabras válidas: <strong>{wordCount}</strong></p>

       <Leaderboard scores={leaderboard} />

      <button onClick={onRestart}>Jugar de nuevo</button>
    </div>
  );
}

export default GameOver;