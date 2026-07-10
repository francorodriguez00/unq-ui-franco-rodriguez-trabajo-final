import "./leaderBoard.css";

function Leaderboard({ scores }) {
  return (
    <div className="leaderboard">
      <h2>🏆 Mejores Puntajes</h2>

      <ol>
        {scores.map((score, index) => (
          <li key={index}>
            {score} puntos
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;