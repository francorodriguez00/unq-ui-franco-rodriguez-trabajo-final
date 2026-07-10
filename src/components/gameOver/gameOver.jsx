import "./gameOver.css";

function GameOver({ score, wordCount, onRestart }) {
  return (
    <div>
      <h2>Juego terminado</h2>

      <p>Puntaje final: {score}</p>

      <p>Palabras válidas: {wordCount}</p>

      <button onClick={onRestart}>Jugar nuevamente</button>
    </div>
  );
}

export default GameOver;