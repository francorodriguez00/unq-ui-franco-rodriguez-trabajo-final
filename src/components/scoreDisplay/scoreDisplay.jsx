import "./scoreDisplay.css";

function Score({ score }) {
    return (
        <div className="score">
            ⭐ Puntaje: {score}
        </div>
    )
}

export default Score;